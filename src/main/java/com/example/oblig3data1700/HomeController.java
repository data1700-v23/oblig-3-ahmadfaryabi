package com.example.oblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


@RestController
public class HomeController {

    @Autowired
    private BiletterRepository repo;

    @PostMapping("/settInn")
    public void leggBilett(Biletter innBiletter) {
        repo.leggBilett(innBiletter);
    }
    @PostMapping("/visAlleBiletter")
    public List <Biletter> visAlleBiletter() {
        return repo.hentAlleBiletter();
    }

    @PostMapping("/slettArray")
    public void slettAlleBiletter() {
        repo.slettAlleBiletter();
    }
}