package com.blogger.service.Implement;

import com.blogger.model.Like;
import com.blogger.repository.LikeRepository;
import com.blogger.service.Interface.ILikeService;
import com.blogger.service.ServiceBase.BaseServiceImpl;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public class LikeService extends BaseServiceImpl<Like, String> implements ILikeService {
    private final LikeRepository likeRepository;

    public LikeService(MongoRepository<Like, String> repository, LikeRepository likeRepository) {
        super(repository);
        this.likeRepository = likeRepository;
    }

    @Override
    public long countByPostId(String postId) {
        return 0;
    }
}
