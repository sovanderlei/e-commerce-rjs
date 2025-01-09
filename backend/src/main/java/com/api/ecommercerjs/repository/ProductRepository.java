package com.api.ecommercerjs.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.api.ecommercerjs.dto.ProductDTO;
import com.api.ecommercerjs.modal.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategoryId(Long categoryId);

    @Query("SELECT new com.api.ecommercerjs.dto.ProductDTO(p.id, p.name, p.price, p.description, p.stockQuantity, p.image, p.categoryId, c.name) "
            + "FROM Product p JOIN Category c ON p.categoryId = c.id")
    Page<ProductDTO> findAllWithCategoryName(Pageable pageable);

}
