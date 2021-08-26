package mk.ukim.finki.graduate.thesis.routemanagement.domain.repository;

import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.FamousEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface FamousEventRepository extends JpaRepository<FamousEvent, Long> {
    Optional<FamousEvent> findByTitle(String title);
    List<FamousEvent> findByStartGreaterThanEqualAndEndLessThanEqual(LocalDateTime start, LocalDateTime end);
}
