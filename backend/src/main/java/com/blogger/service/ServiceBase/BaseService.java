package com.blogger.service.ServiceBase;

import java.util.List;
import java.util.Optional;

public interface BaseService<T, ID> {
    T create(T entity);
    Optional<T> findById(ID id);
    List<T> findAll();
    T update(ID id, T entity);
    void deleteById(ID id);
}