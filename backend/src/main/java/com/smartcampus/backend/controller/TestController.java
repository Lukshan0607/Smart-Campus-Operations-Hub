package com.smartcampus.backend.controller; // මේ package එක ඔයාගේ project එකට 맞춰 replace කරන්න

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class TestController {

    @GetMapping("/test")
    public String test() {
        return "API Working!";
    }
}