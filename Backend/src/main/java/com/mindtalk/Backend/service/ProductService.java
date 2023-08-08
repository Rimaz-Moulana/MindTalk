package com.mindtalk.Backend.service;

import com.mindtalk.Backend.dto.ProductDTO;
import com.mindtalk.Backend.entity.Product;
import com.mindtalk.Backend.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    public Product createProduct(ProductDTO productDTO){
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setPrice(productDTO.getPrice());

        return productRepo.save(product);
    }

    public Product getProductById(Integer productId){
        return productRepo.findById(productId).orElse(null);
    }
}
