package mk.ukim.finki.graduate.thesis.routemanagement.service.impl;

import lombok.RequiredArgsConstructor;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.dto.FamousEventDto;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.FamousEvent;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.repository.FamousEventRepository;
import mk.ukim.finki.graduate.thesis.routemanagement.service.FamousEventService;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
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
public class FamousEventServiceImpl implements FamousEventService {
    private final FamousEventRepository famousEventRepository;
    private final Validator validator;

    @Override
    public List<FamousEvent> findAll() {
        return famousEventRepository.findAll();
    }

    @Override
    public Optional<FamousEvent> findById(Long id) {
        return famousEventRepository.findById(id);
    }

    @Override
    public Optional<FamousEvent> findByTitle(String title) {
        return famousEventRepository.findByTitle(title);
    }

    @Override
    public Optional<FamousEvent> save(FamousEventDto famousEventDto, User creator) {
        Objects.requireNonNull(famousEventDto, "Famous event form must not be null");
        var constraintViolations = validator.validate(famousEventDto);
        if (constraintViolations.size() > 0) {
            throw new ConstraintViolationException("famous event form is not valid", constraintViolations);
        }
        return Optional.of(famousEventRepository.saveAndFlush(toDomainObject(famousEventDto, creator)));
    }

    @Override
    public Optional<FamousEvent> edit(Long id, FamousEventDto famousEventDto, User creator) {
        Optional<FamousEvent> famousEvent = this.findById(id);
        if(famousEvent.isPresent()) {
            famousEvent.get().setTitle(famousEventDto.getTitle());
            famousEvent.get().setDescription(famousEventDto.getDescription());
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
            LocalDateTime startDate = LocalDateTime.parse(famousEventDto.getStart(), formatter);
            LocalDateTime endDate = LocalDateTime.parse(famousEventDto.getEnd(), formatter);
            famousEvent.get().setStart(startDate);
            famousEvent.get().setEnd(endDate);
            famousEvent.get().setPicture(famousEventDto.getPicture());
            famousEvent.get().setLocation(famousEventDto.getLocation());
            famousEvent.get().setCreator(creator);
            famousEventRepository.save(famousEvent.get());
        }
        return famousEvent;
    }

    @Override
    public void deleteById(Long id) {
        famousEventRepository.deleteById(id);
    }

    private FamousEvent toDomainObject(FamousEventDto famousEventDto, User user) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        LocalDateTime startDate = LocalDateTime.parse(famousEventDto.getStart(), formatter);
        LocalDateTime endDate = LocalDateTime.parse(famousEventDto.getEnd(), formatter);
        return new FamousEvent(famousEventDto.getTitle(), famousEventDto.getDescription(),
                startDate, endDate, famousEventDto.getPicture(), famousEventDto.getLocation(), user);
    }
}
