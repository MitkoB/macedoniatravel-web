package mk.ukim.finki.graduate.thesis.routemanagement.service;

import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Review;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    Optional<Review> findById(Long routeId);
    List<Review> listAllRouteReviews(Long routeId);
    Optional<Review> addReviewForRoute(String username, Long routeId, String comment, Integer grade);
    void deleteReview(String username,Long reviewId);
    Integer numberOfReviewsInRoutesByGrade(Long routeId,Integer grade);
    List<Integer> numberOfReviewsPerGrade(Long routeId);
}
