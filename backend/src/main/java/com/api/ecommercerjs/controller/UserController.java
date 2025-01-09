package com.api.ecommercerjs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import com.api.ecommercerjs.modal.User;
import com.api.ecommercerjs.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/users")
// s@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public Page<User> listarUsuarios(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return userRepository.findAll(pageable);
    }

    @PostMapping
    public User adicionarOuAtualizarUsuario(@RequestBody User user) {

        if (user.getId() == null || user.getId() == 0) {
            user.setId(null);
            return userRepository.save(user);
        } else {
            return userRepository.findById(user.getId())
                    .map(existingUser -> {
                        existingUser.setName(user.getName());
                        existingUser.setEmail(user.getEmail());
                        existingUser.setPassword(user.getPassword());
                        return userRepository.save(existingUser);
                    })
                    .orElseThrow(() -> new RuntimeException("User not found with id: " + user.getId()));
        }
    }

    @GetMapping("/{id}")
    public User buscarUsuarioPorId(@PathVariable Long id) {
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found!"));
    }

    @DeleteMapping("/{id}")
    public void deletarUsuario(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}
