package com.blogger.service.Interface;

import com.blogger.model.Like;
import com.blogger.service.ServiceBase.BaseService;

public interface ILikeService extends BaseService<Like, String> {
    long countByPostId(String postId);
}

