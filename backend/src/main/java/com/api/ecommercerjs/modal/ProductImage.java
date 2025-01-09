package com.api.ecommercerjs.modal;

import jakarta.persistence.*;

@Entity
@Table(name = "product_images")
public class ProductImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String link;

    @Column(nullable = false)
    private String extension;

    @Column(nullable = false)
    private Boolean isMainImage;

    @Column(nullable = false)
    private Boolean isVisible;

    // Getters e Setters

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Product getProduct() {
        return this.product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLink() {
        return this.link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getExtension() {
        return this.extension;
    }

    public void setExtension(String extension) {
        this.extension = extension;
    }

    public Boolean isIsMainImage() {
        return this.isMainImage;
    }

    public Boolean getIsMainImage() {
        return this.isMainImage;
    }

    public void setIsMainImage(Boolean isMainImage) {
        this.isMainImage = isMainImage;
    }

    public Boolean isIsVisible() {
        return this.isVisible;
    }

    public Boolean getIsVisible() {
        return this.isVisible;
    }

    public void setIsVisible(Boolean isVisible) {
        this.isVisible = isVisible;
    }

    /*
     * 
     * Product product = new Product();
     * product.setName("Example Product");
     * product.setPrice(100.0);
     * product.setDescription("Description here");
     * product.setStockQuantity(10);
     * 
     * ProductImage image1 = new ProductImage();
     * image1.setName("image1.jpg");
     * image1.setLink("https://example.com/image1.jpg");
     * image1.setExtension(".jpg");
     * image1.setIsMainImage(true);
     * image1.setIsVisible(true);
     * image1.setProduct(product);
     * 
     * ProductImage image2 = new ProductImage();
     * image2.setName("image2.jpg");
     * image2.setLink("https://example.com/image2.jpg");
     * image2.setExtension(".jpg");
     * image2.setIsMainImage(false);
     * image2.setIsVisible(true);
     * image2.setProduct(product);
     * 
     * product.getImages().add(image1);
     * product.getImages().add(image2);
     * 
     * // Salvar no repositório
     * productRepository.save(product);
     * 
     * 
     */

}
