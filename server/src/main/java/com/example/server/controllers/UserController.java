package com.example.server.controllers;

import com.example.server.models.User;
import com.example.server.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserServices userServices;
    @GetMapping("/getAll")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userServices.allUsers(), HttpStatus.OK);
    }
}
