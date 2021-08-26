package mk.ukim.finki.graduate.thesis.favoritecartmanagement.domain.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND)
public class FavoriteCartNotFoundException extends RuntimeException {
    public FavoriteCartNotFoundException(Long cartId) {
        super(String.format("Favorite cart with this id: %d not found",cartId));
    }
}
