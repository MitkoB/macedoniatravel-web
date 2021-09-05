package mk.ukim.finki.graduate.thesis.macedoniatravelapp.port.controller;

import lombok.RequiredArgsConstructor;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.dto.AttractionDto;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.enumeration.AttractionType;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Attraction;
import mk.ukim.finki.graduate.thesis.routemanagement.service.AttractionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/attraction")
@CrossOrigin(origins = "http://localhost:3000")
public class AttractionController {
    private final AttractionService attractionService;

    @GetMapping
    public List<Attraction> findAll(@RequestParam(required = false) String name,
                                    @RequestParam(required = false) AttractionType
                                    attractionType)
    {
        if (name!=null) {
            return attractionService.searchAttractionByName(name);
        }
        if(attractionType!=null) {
            return attractionService.searchAttractionByType(attractionType);
        }
        return attractionService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Attraction> findById(@PathVariable Long id) {
        return this.attractionService.findById(id)
                .map(attraction -> ResponseEntity.ok().body(attraction))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Attraction> create(@RequestBody @Valid AttractionDto touristAttraction) {
        return this.attractionService.createAttraction(touristAttraction)
                .map(attraction -> ResponseEntity.ok().body(attraction))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Attraction> edit(@PathVariable Long id,
                                                  @RequestBody @Valid AttractionDto touristAttractionForm) {
        return this.attractionService.editAttraction(id,touristAttractionForm)
                .map(attraction -> ResponseEntity.ok().body(attraction))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        this.attractionService.deleteAttraction(id);
        if (this.attractionService.findById(id).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/types")
    public AttractionType[] findAllAttractionTypes()
    {
        return AttractionType.values();
    }
}
