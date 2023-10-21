package com.example.server.services;

import com.example.server.models.User;
import com.example.server.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServices {
    @Autowired
    private UserRepository userRepository;
    public List<User> allUsers(){
        return userRepository.findAll();
    }
}
