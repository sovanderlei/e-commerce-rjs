package com.api.ecommercerjs;

import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.api.ecommercerjs.modal.Category;
import com.api.ecommercerjs.modal.Product;
import com.api.ecommercerjs.modal.User;
import com.api.ecommercerjs.repository.CategoryRepository;
import com.api.ecommercerjs.repository.ProductRepository;
import com.api.ecommercerjs.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.Arrays;

@Configuration
public class DataLoader {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Bean
    public ApplicationRunner loadData() {
        return args -> {
            // Seed categories
            Category electronics = new Category();
            electronics.setName("Electronics");
            electronics.setDescription("Electronic devices and gadgets");
            electronics.setActive(true);
            electronics.setImageUrl("https://example.com/electronics.jpg");
            electronics.setCreatedBy("Admin");
            electronics.setUpdatedBy("Admin");

            Category fashion = new Category();
            fashion.setName("Fashion");
            fashion.setDescription("Clothing and accessories");
            fashion.setActive(true);
            fashion.setImageUrl("https://example.com/fashion.jpg");
            fashion.setCreatedBy("Admin");
            fashion.setUpdatedBy("Admin");

            // categoryRepository.saveAll(Arrays.asList(electronics, fashion));

            // Seed products
            Product Laptop = new Product();
            Laptop.setName("Laptop");
            Laptop.setPrice(699.99);
            Laptop.setDescription("Latest model Laptop with great features");
            Laptop.setStockQuantity(50);
            Laptop.setCategoryId(electronics.getId());
            Laptop.setImage("/images/laptop-img.png");

            Product Mobile = new Product();
            Mobile.setName("Mobile");
            Mobile.setPrice(699.99);
            Mobile.setDescription("Latest model Mobile with great features");
            Mobile.setStockQuantity(50);
            Mobile.setCategoryId(electronics.getId());
            Mobile.setImage("/images/mobile-img.png");

            Product Computers = new Product();
            Computers.setName("Computers");
            Computers.setPrice(699.99);
            Computers.setDescription("Latest model Computers with great features");
            Computers.setStockQuantity(50);
            Computers.setCategoryId(electronics.getId());
            Computers.setImage("/images/computer-img.png");

            // Seed T-Shirt
            Product tshirt = new Product();
            tshirt.setName("Man T-shirt");
            tshirt.setPrice(19.99);
            tshirt.setDescription("Comfortable cotton Man T-shirt");
            tshirt.setStockQuantity(100);
            tshirt.setCategoryId(fashion.getId());
            tshirt.setImage("/images/tshirt-img.png");

            Product manshirt = new Product();
            manshirt.setName("Man Shirt");
            manshirt.setPrice(19.99);
            manshirt.setDescription("Comfortable cotton Man Shirt");
            manshirt.setStockQuantity(100);
            manshirt.setCategoryId(fashion.getId());
            manshirt.setImage("/images/dress-shirt-img.png");

            Product womanshirt = new Product();
            womanshirt.setName("Woman Scarf");
            womanshirt.setPrice(19.99);
            womanshirt.setDescription("Comfortable cotton Woman Scarf");
            womanshirt.setStockQuantity(100);
            womanshirt.setCategoryId(fashion.getId());
            womanshirt.setImage("/images/women-clothes-img.png");

            // productRepository.saveAll(Arrays.asList(Laptop, Mobile, Computers, tshirt,
            // manshirt, womanshirt));

            // Seed users
            User user1 = new User();
            user1.setName("John Doe");
            user1.setEmail("john@example.com");
            user1.setPassword("password123");

            User user2 = new User();
            user2.setName("Jane Smith");
            user2.setEmail("jane@example.com");
            user2.setPassword("securepass");

            // userRepository.saveAll(Arrays.asList(user1, user2));

        };
    }
}
