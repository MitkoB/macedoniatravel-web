package mk.ukim.finki.graduate.thesis.macedoniatravelapp.port.controller;

import lombok.RequiredArgsConstructor;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.dto.RouteDto;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.enumeration.RouteStatus;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.event.OnRouteReservationEvent;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.exception.CanNotEnrollOnRouteException;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Review;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;
import mk.ukim.finki.graduate.thesis.routemanagement.service.ReviewService;
import mk.ukim.finki.graduate.thesis.routemanagement.service.RouteService;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/route")
@CrossOrigin(origins = "http://localhost:3000")
public class RouteController {
    private final ApplicationEventPublisher eventPublisher;
    private final RouteService routeService;
    private final ReviewService reviewService;

    @GetMapping
    public List<Route> findAll(@RequestParam(required = false) String name)
    {
        if(name!=null) {
            return routeService.searchRoutes(name);
        }
        return routeService.findAll();
    }

    @GetMapping("/top5")
    public List<Route> findTop5() {
        return routeService.findTopRated();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Route> findById(@PathVariable Long id) {
        return this.routeService.findById(id)
                .map(attraction -> ResponseEntity.ok().body(attraction))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Route> create(@RequestBody RouteDto routeForm) {
        User creator = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return this.routeService.createRoute(routeForm, creator.getUsername())
                .map(route -> ResponseEntity.ok().body(route))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Route> edit(@PathVariable Long id,
                                           @RequestBody RouteDto routeForm) {
        return this.routeService.editRoute(id,routeForm)
                .map(route -> ResponseEntity.ok().body(route))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        this.routeService.deleteRoute(id);
        if (this.routeService.findById(id).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/statuses")
    public RouteStatus[] findAllRouteStatuses()
    {
        return RouteStatus.values();
    }


    @GetMapping("/{id}/reviews")
    public List<Review> allReviews(@PathVariable Long id) {
        return this.reviewService.listAllRouteReviews(id);
    }

    @PostMapping("/{id}/add-review")
    public ResponseEntity<Review> addReview(@PathVariable Long id,
                                  @RequestParam String comment,
                                  @RequestParam String grade)
    {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return this.reviewService.addReviewForRoute(user.getUsername(), id, comment, Integer.parseInt(grade))
                .map(review -> ResponseEntity.ok().body(review))
                .orElseGet(()->ResponseEntity.badRequest().build());

    }
    @DeleteMapping("/{id}/delete-review")
    public ResponseEntity deleteRouteReview(@PathVariable Long id)
    {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        this.reviewService.deleteReview(user.getUsername(),id);
        if (this.reviewService.findById(id).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }
    @GetMapping("/{id}/percent-per-grade")
    public List<Integer> getNumberOfReviewsPerGrader(@PathVariable Long id){
        return this.reviewService.numberOfReviewsPerGrade(id);
    }
    @PostMapping("{id}/enroll")
    public ResponseEntity enroll(@PathVariable Long id,  HttpServletRequest request) {
        try {
            User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            String appUrl = request.getContextPath();
            Route route = this.routeService.enrollUserOnRoute(id, user.getUsername());
            eventPublisher.publishEvent(new OnRouteReservationEvent(user, route,
                    request.getLocale(), appUrl));
        } catch (CanNotEnrollOnRouteException canNotEnroll) {
            return ResponseEntity.badRequest().body(canNotEnroll);
        } catch (RuntimeException ex) {
            return ResponseEntity.badRequest().body(ex);
        }
        return  ResponseEntity.ok().body(id);
    }
}
