package mk.ukim.finki.graduate.thesis.favoritecartmanagement.service.impl;

import lombok.RequiredArgsConstructor;
import mk.ukim.finki.graduate.thesis.favoritecartmanagement.domain.enumeration.FavoriteCartStatus;
import mk.ukim.finki.graduate.thesis.favoritecartmanagement.domain.exception.RouteAlreadyExistsInFavoriteCart;
import mk.ukim.finki.graduate.thesis.favoritecartmanagement.domain.model.FavoriteCart;
import mk.ukim.finki.graduate.thesis.favoritecartmanagement.domain.repository.FavoriteCartRepository;
import mk.ukim.finki.graduate.thesis.favoritecartmanagement.service.FavoriteCartService;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.exception.RouteCanNotBeFoundException;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.repository.RouteRepository;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import mk.ukim.finki.graduate.thesis.usersdata.domain.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class FavoriteCartServiceImpl implements FavoriteCartService {
    private final FavoriteCartRepository favoriteCartRepository;
    private final RouteRepository routeRepository;
    private final UserRepository userRepository;

    @Override
    public FavoriteCart getActiveFavoriteCart(String username) {
        User user=userRepository.findByEmail(username);
        if(favoriteCartRepository.findByUserAndFavoriteCartStatus(user, FavoriteCartStatus.CREATED).isEmpty())
        {
            FavoriteCart favoriteCart=new FavoriteCart(user);
            return favoriteCartRepository.save(favoriteCart);
        }
        else{
            return favoriteCartRepository.findByUserAndFavoriteCartStatus(user,FavoriteCartStatus.CREATED).get();
        }
    }

    @Override
    public List<Route> listAllRoutesInFavoriteCart(String username) {
        FavoriteCart favoriteCart=this.getActiveFavoriteCart(username);
        return favoriteCart.getRouteList();
    }

    @Override
    public Optional<FavoriteCart> addRouteToFavoriteCart(String username, Long routeId) {
        Route route=routeRepository.findById(routeId).orElseThrow(RouteCanNotBeFoundException::new);
        FavoriteCart favoriteCart=this.getActiveFavoriteCart(username);
        if(favoriteCart.getRouteList().stream().anyMatch(i -> i.getId().equals(routeId))) {
            throw new RouteAlreadyExistsInFavoriteCart();
        }
        favoriteCart.getRouteList().add(route);
        return Optional.of(favoriteCartRepository.save(favoriteCart));
    }

    @Override
    public FavoriteCart deleteRouteFromFavoriteCart(String username, Long routeId) {
        FavoriteCart favoriteCart=this.getActiveFavoriteCart(username);
        List<Route> routes=favoriteCart.getRouteList();
        routes.removeIf(r->r.getId().equals(routeId));
        return favoriteCartRepository.save(favoriteCart);
        }
}
