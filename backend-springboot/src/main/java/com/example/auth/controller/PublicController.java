
package com.example.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PublicController {

    @GetMapping("/public")
    public String publicEndpoint() {
        return "This is a public endpoint";
    }

    @GetMapping("/user")
    public String userEndpoint() {
        return "This is a USER endpoint";
    }

    @GetMapping("/admin")
    public String adminEndpoint() {
        return "This is an ADMIN endpoint";
    }
}
