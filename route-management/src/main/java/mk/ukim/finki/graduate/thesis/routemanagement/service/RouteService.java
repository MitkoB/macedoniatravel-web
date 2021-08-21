package mk.ukim.finki.graduate.thesis.routemanagement.service;

import mk.ukim.finki.graduate.thesis.routemanagement.domain.dto.RouteDto;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;

import java.util.List;
import java.util.Optional;

public interface RouteService {
    List<Route> findAll();
    Optional<Route> findById(Long id);
    Optional<Route> findByName(String name);
    Optional<Route> createRoute(RouteDto routeForm);
    Optional<Route> editRoute(Long id, RouteDto routeForm);
    List<Route> searchRoutes(String name);
    void deleteRoute(Long id);
}
