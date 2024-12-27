package com.blogger.services.ServiceBase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Optional;

public abstract class BaseServiceImpl<T, ID> implements BaseService<T, ID> {

    @Autowired
    protected MongoRepository<T, ID> repository;

    @Override
    public T create(T entity) {
        return repository.save(entity);
    }

    @Override
    public Optional<T> findById(ID id) {
        return repository.findById(id);
    }

    @Override
    public List<T> findAll() {
        return repository.findAll();
    }

    @Override
    public T update(ID id, T entity) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Entity not found");
        }
        return repository.save(entity); // Overwrites the document
    }

    @Override
    public void deleteById(ID id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Entity not found");
        }
        repository.deleteById(id);
    }
}

