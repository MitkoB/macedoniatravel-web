package mk.ukim.finki.graduate.thesis.macedoniatravelapp.port.controller;

import mk.ukim.finki.graduate.thesis.routemanagement.service.FamousEventService;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.dto.FamousEventDto;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.FamousEvent;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import lombok.RequiredArgsConstructor;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/famous-event")
@CrossOrigin(origins = "http://localhost:3000")
public class FamousEventController {

    private final FamousEventService famousEventService;

    @GetMapping
    public List<FamousEvent> findAll() {
        return famousEventService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FamousEvent> findById(@PathVariable Long id) {
        return this.famousEventService.findById(id)
                .map(famousEvent -> ResponseEntity.ok().body(famousEvent))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity deleteFamousEvent(@PathVariable Long id)
    {
        this.famousEventService.deleteById(id);
        if (this.famousEventService.findById(id).isEmpty())
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/create")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<FamousEvent> saveFamousEvent(@RequestBody @Valid FamousEventDto famousEventDto)
    {
        User creator = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return this.famousEventService.save(famousEventDto, creator)
                .map(famousEvent -> ResponseEntity.ok().body(famousEvent))
                .orElseGet(()->ResponseEntity.badRequest().build());
    }

    @PutMapping("/edit/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<FamousEvent> updateFamousEvent(@PathVariable Long id,
                                    @RequestBody @Valid FamousEventDto famousEventDto) {
        User creator = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return this.famousEventService.edit(id,famousEventDto, creator)
                .map(famousEvent -> ResponseEntity.ok().body(famousEvent))
                .orElseGet(()->ResponseEntity.badRequest().build());
    }
}