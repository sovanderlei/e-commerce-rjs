package com.api.ecommercerjs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import com.api.ecommercerjs.modal.Category;
import com.api.ecommercerjs.repository.CategoryRepository;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping
    public Page<Category> listarCategorias(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return categoryRepository.findAll(pageable);
    }

    // http://localhost:8080/api/categories/allcategories
    @GetMapping("/allcategories")
    public List<Category> allCategories() {
        return categoryRepository.findAll();
    }

    @PostMapping
    public Category adicionarOuAtualizarCategoria(@RequestBody Category category) {
        if (category.getId() == null || category.getId() == 0) {
            category.setId(null);
            return categoryRepository.save(category);
        } else {
            return categoryRepository.findById(category.getId())
                    .map(existingCategory -> {
                        existingCategory.setName(category.getName());
                        existingCategory.setDescription(category.getDescription());
                        existingCategory.setActive(category.isActive());
                        existingCategory.setImageUrl(category.getImageUrl());
                        existingCategory.setUpdatedBy(category.getUpdatedBy());
                        return categoryRepository.save(existingCategory);
                    })
                    .orElseThrow(() -> new RuntimeException("Category not found with id: " + category.getId()));
        }
    }

    @GetMapping("/{id}")
    public Category buscarCategoriaPorId(@PathVariable Long id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found!"));
    }

    @DeleteMapping("/{id}")
    public void deletarCategoria(@PathVariable Long id) {
        categoryRepository.deleteById(id);
    }
}
