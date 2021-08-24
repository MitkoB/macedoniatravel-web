package mk.ukim.finki.graduate.thesis.macedoniatravelapp.port.controller;

import lombok.RequiredArgsConstructor;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.dto.RouteDto;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.enumeration.RouteStatus;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Review;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;
import mk.ukim.finki.graduate.thesis.routemanagement.service.ReviewService;
import mk.ukim.finki.graduate.thesis.routemanagement.service.RouteService;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/route")
@CrossOrigin(origins = "http://localhost:3000")
public class RouteController {
    private final RouteService routeService;
    private final ReviewService reviewService;

    @GetMapping
    public List<Route> findAll() {
        return routeService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Route> findById(@PathVariable Long id) {
        return this.routeService.findById(id)
                .map(attraction -> ResponseEntity.ok().body(attraction))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Route> create(@RequestBody RouteDto routeForm) {
        return this.routeService.createRoute(routeForm)
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
}
