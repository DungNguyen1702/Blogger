package com.blogger.services.Implement;

import com.blogger.models.Post;
import com.blogger.models.TodayUpdate;
import com.blogger.repositories.PostRepository;
import com.blogger.services.Interface.IPostService;
import com.blogger.services.ServiceBase.BaseServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PostService extends BaseServiceImpl<Post, String> implements IPostService {
  @Autowired
  private PostRepository postRepository;

  @Autowired
  private TodayUpdateService todayUpdateService;

  @Override
  public List<Post> findByCategoryId(String categoryId) {
    return List.of();
  }

  @Override
  public List<Post> findByAccountId(String accountId) {
    return List.of();
  }

  @Override
  public Post create(Post newPost) {
    todayUpdateService.updateTodayUpdate(TodayUpdate.builder().newPostNum(1).build());
    return postRepository.save(newPost);
  }

  @Override
  public Optional<Post> findById(String id) {
    Optional<Post> post = postRepository.findById(id);

    if (post.isPresent()) {
      post.get().setViewTurn(post.get().getViewTurn() + 1);
      postRepository.save(post.get());
      todayUpdateService.updateTodayUpdate(TodayUpdate.builder().blogReads(1).build());
    }

    return post;
  }

  @Override
  public List<Post> findAllPostsWithCategory() {
    todayUpdateService.updateTodayUpdate(TodayUpdate.builder().totalVisitors(1).build());
    return postRepository.findAllPostsWithCategory();
  }

  @Override
  public List<Post> findFeaturedThisMonthPost() {
    LocalDate now = LocalDate.now();

    LocalDate startOfMonth = now.withDayOfMonth(1);

    LocalDate startOfNextMonth = startOfMonth.plusMonths(1);

    Date startOfMonthDate = Date.from(startOfMonth.atStartOfDay(ZoneId.systemDefault()).toInstant());
    Date startOfNextMonthDate = Date.from(startOfNextMonth.atStartOfDay(ZoneId.systemDefault()).toInstant());

    return postRepository.findFeaturedThisMonthPost(startOfMonthDate, startOfNextMonthDate, 4);
  }

  @Override
  public List<Post> findPopularPost(Integer limit) {
    return postRepository.findPopularPost(limit);
  }
}
