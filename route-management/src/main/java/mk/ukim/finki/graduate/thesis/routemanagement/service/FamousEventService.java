package mk.ukim.finki.graduate.thesis.routemanagement.service;

import mk.ukim.finki.graduate.thesis.routemanagement.domain.dto.FamousEventDto;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.FamousEvent;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;

import java.util.List;
import java.util.Optional;

public interface FamousEventService {
    List<FamousEvent> findAll();
    Optional<FamousEvent> findById(Long id);
    Optional<FamousEvent> findByTitle(String title);
    Optional<FamousEvent> save(FamousEventDto famousEventDto, User creator);
    Optional<FamousEvent> edit(Long id, FamousEventDto famousEventDto, User creator);
    void deleteById(Long id);
}
