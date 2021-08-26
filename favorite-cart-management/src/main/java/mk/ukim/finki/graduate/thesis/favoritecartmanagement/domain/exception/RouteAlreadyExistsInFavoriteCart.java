package mk.ukim.finki.graduate.thesis.favoritecartmanagement.domain.exception;

public class RouteAlreadyExistsInFavoriteCart extends RuntimeException{
    public RouteAlreadyExistsInFavoriteCart() {
        super("This item already exists in favorite cart");
    }
}
