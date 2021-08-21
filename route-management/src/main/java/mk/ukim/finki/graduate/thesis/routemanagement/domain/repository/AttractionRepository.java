package mk.ukim.finki.graduate.thesis.routemanagement.domain.repository;

import mk.ukim.finki.graduate.thesis.routemanagement.domain.enumeration.AttractionType;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Attraction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AttractionRepository extends JpaRepository<Attraction,Long> {
    Optional<Attraction> findByName(String name);
    List<Attraction> findAllByAttractionType(AttractionType type);
    List<Attraction> findAllByNameLike(String name);
}
