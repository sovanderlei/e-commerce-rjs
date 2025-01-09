package com.api.ecommercerjs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.ecommercerjs.modal.Product;
import com.api.ecommercerjs.modal.ProductImage;
import com.api.ecommercerjs.repository.ProductImageRepository;
import com.api.ecommercerjs.repository.ProductRepository;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductImageRepository productImageRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<ProductImage> getImagesByProductId(Long productId) {
        return productImageRepository.findByProductId(productId);
    }
}
