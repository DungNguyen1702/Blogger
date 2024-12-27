package com.blogger.services.Interface;

import com.blogger.models.Like;
import com.blogger.services.ServiceBase.BaseService;

public interface ILikeService extends BaseService<Like, String> {
    long countByPostId(String postId);
}

