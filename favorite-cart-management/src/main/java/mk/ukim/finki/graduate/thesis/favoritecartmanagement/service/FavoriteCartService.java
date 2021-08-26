package mk.ukim.finki.graduate.thesis.favoritecartmanagement.service;

import mk.ukim.finki.graduate.thesis.favoritecartmanagement.domain.model.FavoriteCart;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;

import java.util.List;
import java.util.Optional;

public interface FavoriteCartService {
    FavoriteCart getActiveFavoriteCart(String username);
    List<Route> listAllRoutesInFavoriteCart(String username);
    Optional<FavoriteCart> addRouteToFavoriteCart(String username, Long routeId);
    FavoriteCart deleteRouteFromFavoriteCart(String username,Long routeId);
}
