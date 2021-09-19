package mk.ukim.finki.graduate.thesis.routemanagement.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.var;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.dto.AttractionDto;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.enumeration.AttractionType;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.exception.TouristAttractionCanNotBeFoundException;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Attraction;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.repository.AttractionRepository;
import mk.ukim.finki.graduate.thesis.routemanagement.service.AttractionService;
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
public class AttractionServiceImpl implements AttractionService {
    private final AttractionRepository attractionRepository;
    private final Validator validator;

    @Override
    public List<Attraction> findAll() {
        return attractionRepository.findAll();
    }

    @Override
    public Optional<Attraction> findById(Long id) {
        return attractionRepository.findById(id);
    }

    @Override
    public Attraction findByName(String name) {
        return attractionRepository.findByName(name).orElseThrow(TouristAttractionCanNotBeFoundException::new);
    }

    @Override
    public Optional<Attraction> createAttraction(AttractionDto form) {
        Objects.requireNonNull(form, "tourist attraction form must not be null");
        var constraintViolations = validator.validate(form);
        if (constraintViolations.size() > 0) {
            throw new ConstraintViolationException("tourist attraction form is not valid", constraintViolations);
        }
        return Optional.of(attractionRepository.saveAndFlush(toDomainObject(form)));
    }

    @Override
    public Optional<Attraction> editAttraction(Long id, AttractionDto form) {
        Optional<Attraction> touristAttraction = this.findById(id);
        if(touristAttraction.isPresent()) {
            Attraction attraction = touristAttraction.get();
            attraction.setName(form.getName());
            attraction.setDescription(form.getDescription());
            attraction.setLocation(form.getLocation());
            attraction.setLatitude(form.getLatitude());
            attraction.setLongitude(form.getLongitude());
            attraction.setAttractionType(form.getAttractionType());
            attraction.setPictures(form.getPictures());
            attractionRepository.save(attraction);
            return Optional.of(attraction);
        }
        return touristAttraction;
    }

    @Override
    public List<Attraction> searchAttractionByName(String name) {
        if (name != null) {
            return this.attractionRepository.findAllByNameLike("%" + name + "%");
        }
        return this.findAll();
    }

    @Override
    public List<Attraction> searchAttractionByType(AttractionType type) {
        if (type != null) {
            return this.attractionRepository.findAllByAttractionType(type);
        }
        return this.findAll();
    }

    @Override
    public void deleteAttraction(Long id) {
         this.attractionRepository.deleteById(id);
    }

    private Attraction toDomainObject(AttractionDto attractionForm) {
        return new Attraction(attractionForm.getName(), attractionForm.getLatitude(), attractionForm.getLongitude(),
                attractionForm.getLocation(), attractionForm.getDescription(), attractionForm.getPictures(),
                attractionForm.getAttractionType());
    }
}
