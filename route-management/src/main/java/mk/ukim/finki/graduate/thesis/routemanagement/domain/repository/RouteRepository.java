package mk.ukim.finki.graduate.thesis.routemanagement.domain.repository;

import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RouteRepository extends JpaRepository<Route,Long> {
    Optional<Route> findByName(String name);
    List<Route> findAllByNameLike(String name);
    List<Route> findTop5ByOrderByAverageGradeDesc();
}
