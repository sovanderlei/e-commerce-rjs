package com.api.ecommercerjs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.api.ecommercerjs.modal.Order;
import com.api.ecommercerjs.repository.OrderRepository;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping
    public List<Order> listarPedidos() {
        return orderRepository.findAll();
    }

    @PostMapping
    public Order adicionarPedido(@RequestBody Order order) {
        return orderRepository.save(order);
    }

    @GetMapping("/{id}")
    public Order buscarPedidoPorId(@PathVariable Long id) {
        return orderRepository.findById(id).orElseThrow(() -> new RuntimeException("Pedido não encontrado!"));
    }

    @DeleteMapping("/{id}")
    public void deletarPedido(@PathVariable Long id) {
        orderRepository.deleteById(id);
    }
}
