package mk.ukim.finki.graduate.thesis.macedoniatravelapp.port.controller;

import lombok.RequiredArgsConstructor;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.dto.RouteDto;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;
import mk.ukim.finki.graduate.thesis.routemanagement.service.RouteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/route")
@CrossOrigin(origins = "http://localhost:3000")
public class RouteController {
    private final RouteService routeService;

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
}
