package mk.ukim.finki.graduate.thesis.routemanagement.service;

import mk.ukim.finki.graduate.thesis.routemanagement.domain.dto.AttractionDto;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.enumeration.AttractionType;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Attraction;

import java.util.List;
import java.util.Optional;

public interface AttractionService {
    List<Attraction> findAll();
    Optional<Attraction> findById(Long id);
    Attraction findByName(String name);
    Optional<Attraction> createAttraction(AttractionDto form);
    Optional<Attraction> editAttraction(Long id, AttractionDto form);
    List<Attraction> searchAttractionByName(String name);
    List<Attraction> searchAttractionByType(AttractionType type);
    void deleteAttraction(Long id);
}
