package com.blogger.service.Implement;

import com.blogger.model.Like;
import com.blogger.repository.LikeRepository;
import com.blogger.service.Interface.ILikeService;
import com.blogger.service.ServiceBase.BaseServiceImpl;

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
