package com.blogger.services.Implement;

import com.blogger.models.Like;
import com.blogger.repositories.LikeRepository;
import com.blogger.services.Interface.ILikeService;
import com.blogger.services.ServiceBase.BaseServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeService extends BaseServiceImpl<Like, String> implements ILikeService {
    @Autowired
    private LikeRepository likeRepository;

    @Override
    public long countByPostId(String postId) {
        return 0;
    }
}
