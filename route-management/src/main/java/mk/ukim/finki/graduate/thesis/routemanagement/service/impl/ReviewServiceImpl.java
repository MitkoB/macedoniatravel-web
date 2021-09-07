package mk.ukim.finki.graduate.thesis.routemanagement.service.impl;

import lombok.RequiredArgsConstructor;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.exception.PermisionDeniedException;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.exception.ReviewCanNotBeFoundException;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.exception.RouteCanNotBeFoundException;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Review;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.repository.ReviewRepository;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.repository.RouteRepository;
import mk.ukim.finki.graduate.thesis.routemanagement.service.ReviewService;
import mk.ukim.finki.graduate.thesis.usersdata.domain.enumeration.Role;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import mk.ukim.finki.graduate.thesis.usersdata.domain.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final RouteRepository routeRepository;
    private final UserRepository userRepository;

    @Override
    public Optional<Review> findById(Long routeId) {
        return this.reviewRepository.findById(routeId);
    }

    @Override
    public List<Review> listAllRouteReviews(Long routeId) {
        Route route = routeRepository.findById(routeId).orElseThrow(RouteCanNotBeFoundException::new);
        return reviewRepository.findAllByRoute(route);
    }

    @Override
    public Optional<Review> addReviewForRoute(String username, Long routeId, String comment, Integer grade) {
        User user=userRepository.findByEmail(username);
        Route route=routeRepository.findById(routeId).orElseThrow(RouteCanNotBeFoundException::new);
        if(comment==null || comment.isEmpty() || grade==null)
        {
            throw new IllegalArgumentException();
        }
        Review review=new Review(user,route,comment,grade);
        return Optional.of(reviewRepository.save(review));
    }

    @Override
    public void deleteReview(String username, Long reviewId) {
        User user=userRepository.findByEmail(username);
        Review review=reviewRepository.findById(reviewId).orElseThrow(ReviewCanNotBeFoundException::new);
        if(username.equals(review.getUser().getUsername()) || user.getRole().equals(Role.ROLE_ADMIN))
        {
            this.reviewRepository.delete(review);
        }
        else {
            throw  new PermisionDeniedException();
        }
    }

    @Override
    public Integer numberOfReviewsInRoutesByGrade(Long routeId, Integer grade) {
        Route route=routeRepository.findById(routeId).orElseThrow(RouteCanNotBeFoundException::new);
        List<Review> reviews=reviewRepository.findAllByRouteAndGrade(route,grade);
        return reviews.size();
    }

    @Override
    public List<Integer> numberOfReviewsPerGrade(Long routeId) {
        Route route=routeRepository.findById(routeId).orElseThrow(RouteCanNotBeFoundException::new);
        Integer grade1 = reviewRepository.findAllByRouteAndGrade(route, 1).size();
        Integer grade2 = reviewRepository.findAllByRouteAndGrade(route, 2).size();
        Integer grade3 = reviewRepository.findAllByRouteAndGrade(route, 3).size();
        Integer grade4 = reviewRepository.findAllByRouteAndGrade(route, 4).size();
        Integer grade5 = reviewRepository.findAllByRouteAndGrade(route, 5).size();
        return Arrays.asList(grade1,grade2,grade3,grade4,grade5);
    }
}
