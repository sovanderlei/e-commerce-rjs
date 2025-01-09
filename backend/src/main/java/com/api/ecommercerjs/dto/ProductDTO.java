package com.api.ecommercerjs.dto;

public class ProductDTO {
    private Long id;
    private String name;
    private Double price;
    private String description;
    private Integer stockQuantity;
    private String image;
    private Long categoryId;
    private String categoryName;

    public ProductDTO(Long id, String name, Double price, String description, Integer stockQuantity, String image,
            Long categoryId,
            String categoryName) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.stockQuantity = stockQuantity;
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.image = image;

    }

    // Getters e Setters

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return this.price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getStockQuantity() {
        return this.stockQuantity;
    }

    public void setStockQuantity(Integer stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return this.categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getImage() {
        return this.image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}
