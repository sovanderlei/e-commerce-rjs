package com.api.ecommercerjs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.api.ecommercerjs.modal.ProductImage;
import com.api.ecommercerjs.repository.ProductImageRepository;

@RestController
@RequestMapping("/api/product-images")
public class ProductImageController {

    @Autowired
    private ProductImageRepository productImageRepository;

    @GetMapping
    public List<ProductImage> listarImagens() {
        return productImageRepository.findAll();
    }

    @PostMapping
    public ProductImage adicionarImagem(@RequestBody ProductImage productImage) {
        return productImageRepository.save(productImage);
    }

    @GetMapping("/{id}")
    public ProductImage buscarImagemPorId(@PathVariable Long id) {
        return productImageRepository.findById(id).orElseThrow(() -> new RuntimeException("Imagem não encontrada!"));
    }

    @GetMapping("/product/{productId}")
    public List<ProductImage> listarImagensPorProduto(@PathVariable Long productId) {
        return productImageRepository.findByProductId(productId);
    }

    @DeleteMapping("/{id}")
    public void deletarImagem(@PathVariable Long id) {
        productImageRepository.deleteById(id);
    }
}
