package mk.ukim.finki.graduate.thesis.routemanagement.service.impl;

import lombok.RequiredArgsConstructor;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.dto.RouteDto;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.repository.AttractionRepository;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.repository.RouteRepository;
import mk.ukim.finki.graduate.thesis.routemanagement.service.RouteService;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import mk.ukim.finki.graduate.thesis.usersdata.service.UserService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.validation.ConstraintViolationException;
import javax.validation.Validator;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class RouteServiceImpl implements RouteService {
    private final UserService userService;
    private final RouteRepository routeRepository;
    private final AttractionRepository attractionRepository;
    private final Validator validator;

    @Override
    public List<Route> findAll() {
        return routeRepository.findAll();
    }

    @Override
    public Optional<Route> findById(Long id) {
        return routeRepository.findById(id);
    }

    @Override
    public Optional<Route> findByName(String name) {
        return routeRepository.findByName(name);
    }

    @Override
    public Optional<Route> createRoute(RouteDto routeForm) {
        Objects.requireNonNull(routeForm, "route form must not be null");
        var constraintViolations = validator.validate(routeForm);
        if (constraintViolations.size() > 0) {
            throw new ConstraintViolationException("route form is not valid", constraintViolations);
        }
        return Optional.of(routeRepository.saveAndFlush(toDomainObject(routeForm)));
    }

    @Override
    public Optional<Route> editRoute(Long id, RouteDto routeForm) {
        Optional<Route> route = this.findById(id);
        if(route.isPresent()) {
            route.get().setName(routeForm.getName());
            route.get().setPictures(routeForm.getPictures());
            route.get().setRouteStatus(routeForm.getRouteStatus());
            route.get().setStartDate(routeForm.getStartDate());
            route.get().setEndDate(routeForm.getEndDate());
            route.get().setAttractions(routeForm.getTouristAttractions());
            route.get().setDescription(routeForm.getDescription());
            route.get().setPrice(routeForm.getPrice());
            this.routeRepository.save(route.get());
        }
        return route;
    }

    @Override
    public List<Route> searchRoutes(String name) {
        if (name!=null) {
            return routeRepository.findAllByNameLike("%"+name+"%");
        }
        return this.findAll();
    }

    @Override
    public void deleteRoute(Long id) {
        this.routeRepository.deleteById(id);
    }
    private Route toDomainObject(RouteDto routeForm) {
        User  creator = this.userService.findByEmail(routeForm.getEmail());
        return new Route(routeForm.getName(), routeForm.getDescription(), routeForm.getStartDate(),
                routeForm.getEndDate(), routeForm.getPictures(), routeForm.getRouteStatus(),
                routeForm.getTouristAttractions(),creator, routeForm.getPrice());
    }
}
