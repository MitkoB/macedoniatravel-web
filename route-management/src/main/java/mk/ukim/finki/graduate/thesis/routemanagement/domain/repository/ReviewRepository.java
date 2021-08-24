package mk.ukim.finki.graduate.thesis.routemanagement.domain.repository;

import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Review;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findAllByRoute(Route route);
    List<Review> findAllByRouteAndGrade(Route route,Integer grade);
}
