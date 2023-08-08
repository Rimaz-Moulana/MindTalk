package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product, Integer> {
}
