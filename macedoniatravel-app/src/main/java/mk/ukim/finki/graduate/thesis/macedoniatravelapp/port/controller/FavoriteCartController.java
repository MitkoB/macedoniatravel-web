package mk.ukim.finki.graduate.thesis.macedoniatravelapp.port.controller;

import lombok.RequiredArgsConstructor;
import mk.ukim.finki.graduate.thesis.favoritecartmanagement.domain.model.FavoriteCart;
import mk.ukim.finki.graduate.thesis.favoritecartmanagement.service.FavoriteCartService;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/favorite-cart")
@CrossOrigin(origins = "http://localhost:3000")
public class FavoriteCartController {
    private final FavoriteCartService favoriteCartService;

    @GetMapping("/items")
    public List<Route> getAllFavoriteCarItems(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        return this.favoriteCartService.listAllRoutesInFavoriteCart(user.getUsername());
    }

    @PostMapping("/{id}/routeAdd")
    public ResponseEntity<FavoriteCart> addRouteToFavoriteCart(@PathVariable Long id, Authentication authentication)
    {
        User user = (User) authentication.getPrincipal();
        return this.favoriteCartService.addRouteToFavoriteCart(user.getUsername(), id)
                .map(favoriteCart -> ResponseEntity.ok().body(favoriteCart))
                .orElseGet(()->ResponseEntity.badRequest().build());
    }
    @DeleteMapping("/{id}/routeRemove")
    public ResponseEntity removeRoueFromCart(@PathVariable Long id, Authentication authentication)
    {
        User user = (User) authentication.getPrincipal();
        this.favoriteCartService.deleteRouteFromFavoriteCart(user.getUsername(), id);
        if (this.favoriteCartService.listAllRoutesInFavoriteCart(user.getUsername()).stream().noneMatch(r -> r.getId().equals(id)))
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }
}
