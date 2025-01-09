package com.api.ecommercerjs.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.api.ecommercerjs.modal.CartItem;
import com.api.ecommercerjs.repository.CartItemRepository;

@Service
public class CartService {

    @Autowired
    private CartItemRepository cartItemRepository;

    public CartItem addToCart(CartItem cartItem) {
        CartItem cartItemAdd = new CartItem();
        cartItemAdd.setProductId(cartItem.getProductId());
        cartItemAdd.setUserId(cartItem.getUserId());
        cartItemAdd.setProductName(cartItem.getProductName());
        cartItemAdd.setPrice(cartItem.getPrice());
        cartItemAdd.setQuantity(cartItem.getQuantity());
        return cartItemRepository.save(cartItemAdd);
    }

    public List<CartItem> getAllCartItems() {
        return cartItemRepository.findAll();
    }

    public List<CartItem> getCartItems(Long userId) {
        return cartItemRepository.findByUserId(userId);
    }

    public void removeFromCart(Long userId, Long cartItemId) {
        cartItemRepository.deleteById(cartItemId);
    }

    public void updateQuantity(Long userId, Long cartItemId, Integer quantity) {
        CartItem cartItem = cartItemRepository.findById(cartItemId).orElseThrow();
        cartItem.setQuantity(quantity);
        cartItemRepository.save(cartItem);
    }
}
