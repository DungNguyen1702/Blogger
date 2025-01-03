package com.blogger.services.Implement;

import com.blogger.models.Post;
import com.blogger.repositories.PostRepository;
import com.blogger.services.Interface.IPostService;
import com.blogger.services.ServiceBase.BaseServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@Service
public class PostService extends BaseServiceImpl<Post, String> implements IPostService {
    @Autowired
    private PostRepository postRepository;

    @Override
    public List<Post> findByCategoryId(String categoryId) {
        return List.of();
    }

    @Override
    public List<Post> findByAccountId(String accountId) {
        return List.of();
    }

    @Override
    public List<Post> findAllPostsWithCategory() {
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
    public List<Post> findPopularPost() {
        return postRepository.findPopularPost(4);
    }
}
