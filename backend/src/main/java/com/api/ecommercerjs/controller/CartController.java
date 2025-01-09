package com.api.ecommercerjs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.ecommercerjs.modal.CartItem;
import com.api.ecommercerjs.service.CartService;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/add")
    public ResponseEntity<CartItem> addToCart(@RequestBody CartItem cartItem) {
        CartItem addedItem = cartService.addToCart(cartItem);
        return ResponseEntity.ok(addedItem);
    }

    @GetMapping("/items")
    public List<CartItem> getCartItems(@RequestParam Long userId) {
        return cartService.getCartItems(userId);
    }

    @GetMapping("/allitems")
    public List<CartItem> getAllCartItems() {
        return cartService.getAllCartItems();
    }

    @DeleteMapping("/remove")
    public ResponseEntity<Void> removeFromCart(@RequestParam Long userId, @RequestParam Long cartItemId) {
        cartService.removeFromCart(userId, cartItemId);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update")
    public ResponseEntity<CartItem> updateQuantity(@RequestParam Long userId, @RequestParam Long cartItemId,
            @RequestParam Integer quantity) {
        cartService.updateQuantity(userId, cartItemId, quantity);
        return ResponseEntity.ok().build();
    }
}
