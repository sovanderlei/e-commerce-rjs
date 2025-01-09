package com.api.ecommercerjs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.api.ecommercerjs.dto.ProductDTO;
import com.api.ecommercerjs.modal.Product;
import com.api.ecommercerjs.repository.ProductRepository;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public Page<ProductDTO> listarProdutos(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findAllWithCategoryName(pageable);
    }

    @PostMapping
    public Product adicionarOuAtualizarProduto(@RequestBody Product product) {
        if (product.getId() == null || product.getId() == 0) {
            product.setId(null);
            return productRepository.save(product);
        } else {
            return productRepository.findById(product.getId())
                    .map(existingProduct -> {
                        existingProduct.setName(product.getName());
                        existingProduct.setPrice(product.getPrice());
                        existingProduct.setDescription(product.getDescription());
                        existingProduct.setStockQuantity(product.getStockQuantity());
                        existingProduct.setCategoryId(product.getCategoryId());
                        existingProduct.setImage(product.getImage());
                        return productRepository.save(existingProduct);
                    })
                    .orElseThrow(() -> new RuntimeException("Product not found with id: " + product.getId()));
        }
    }

    @GetMapping("/{id}")
    public Product buscarProdutoPorId(@PathVariable Long id) {
        return productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found!"));
    }

    @DeleteMapping("/{id}")
    public void deletarProduto(@PathVariable Long id) {
        productRepository.deleteById(id);
    }
}
