package mk.ukim.finki.graduate.thesis.routemanagement.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.var;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.dto.RouteDto;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.exception.AlreadyHadTicketException;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.exception.CanNotEnrollOnRouteException;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.exception.RouteCanNotBeFoundException;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Attraction;
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
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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
    public Optional<Route> createRoute(RouteDto routeForm, String username) {
        Objects.requireNonNull(routeForm, "route form must not be null");
        var constraintViolations = validator.validate(routeForm);
        if (constraintViolations.size() > 0) {
            throw new ConstraintViolationException("route form is not valid", constraintViolations);
        }
        return Optional.of(routeRepository.saveAndFlush(toDomainObject(routeForm, username)));
    }

    @Override
    public Optional<Route> editRoute(Long id, RouteDto routeForm) {
        Optional<Route> route = this.findById(id);
        if(route.isPresent()) {
            route.get().setName(routeForm.getName());
            route.get().setPictures(routeForm.getPictures());
            route.get().setRouteStatus(routeForm.getRouteStatus());
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
            LocalDateTime startDate = LocalDateTime.parse(routeForm.getStartDate(), formatter);
            LocalDateTime endDate = LocalDateTime.parse(routeForm.getEndDate(), formatter);
            route.get().setStartDate(startDate);
            route.get().setEndDate(endDate);
            List<Attraction> attractionList=this.attractionRepository.findAllById(routeForm.getTouristAttractions());
            route.get().setAttractions(attractionList);
            route.get().setDescription(routeForm.getDescription());
            route.get().setPrice(routeForm.getPrice());
            route.get().setCapacity(routeForm.getCapacity());
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

    @Override
    public List<Route> findTopRated() {
        return this.routeRepository.findTop5ByOrderByAverageGradeDesc();
    }

    @Override
    public Route enrollUserOnRoute(Long id, String username) {
        Route route = this.routeRepository.findById(id).orElseThrow(RouteCanNotBeFoundException::new);
        if(route.getCapacity()>0) {
            if (route.getUsersWithTicket().stream().anyMatch(i->i.getUsername().equals(username))) {
                throw new AlreadyHadTicketException();
            }
            //okay scenario
            route.getUsersWithTicket().add(this.userService.findByEmail(username));
            route.setCapacity(route.getCapacity()-1);
            return this.routeRepository.save(route);
        }
        throw new CanNotEnrollOnRouteException();
    }


    private Route toDomainObject(RouteDto routeForm, String username) {
        User  creator = this.userService.findByEmail(username);
        List<Attraction> attractionList=this.attractionRepository.findAllById(routeForm.getTouristAttractions());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        LocalDateTime startDate = LocalDateTime.parse(routeForm.getStartDate(), formatter);
        LocalDateTime endDate = LocalDateTime.parse(routeForm.getEndDate(), formatter);
        return new Route(routeForm.getName(), routeForm.getDescription(), startDate,
                endDate, routeForm.getPictures(), routeForm.getRouteStatus(),
                attractionList,creator, routeForm.getPrice(), routeForm.getCapacity());
    }
}
