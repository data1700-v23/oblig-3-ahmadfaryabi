package com.example.oblig3data1700;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.batch.BatchProperties;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BiletterRepository {
    @Autowired
    private JdbcTemplate database;

    public void leggBilett(Biletter innBiletter) {
        String sqlKode = "INSERT INTO Biletter (Film, Antall, Fornavn, Etternavn, Tlf, Epost) VALUES (?,?,?,?,?,?)";
        database.update(sqlKode, innBiletter.getFilm(), innBiletter.getAntall(), innBiletter.getFornavn(), innBiletter.getEtternavn(), innBiletter.getTlf(), innBiletter.getEpost());
    }

    public List<Biletter> hentAlleBiletter() {
        String sqlKode = "SELECT * FROM Biletter";
        List<Biletter> alleBiletter = database.query(sqlKode, new BeanPropertyRowMapper(Biletter.class));
        return alleBiletter;
    }

    public void slettAlleBiletter() {
        String sqlKode = "DELETE FROM Biletter";
        database.update(sqlKode);
    }
}
