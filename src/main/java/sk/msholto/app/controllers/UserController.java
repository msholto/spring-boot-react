package sk.msholto.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @GetMapping("/login")
    public String login(Model model, String error, String logout) {
        if (error != null)
            model.addAttribute("error", "Prihlásenie neúspešné");

        if (logout != null)
            model.addAttribute("message", "Odhlásenie úspešné");

        return "login.html";
    }

    @GetMapping("/ui")
    public String uiView() {
        return "index.html";
    }
}
