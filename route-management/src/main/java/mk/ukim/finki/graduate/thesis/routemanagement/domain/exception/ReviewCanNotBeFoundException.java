package mk.ukim.finki.graduate.thesis.routemanagement.domain.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND)
public class ReviewCanNotBeFoundException extends RuntimeException{
    public ReviewCanNotBeFoundException() {
        super("Review can not be found");
    }
}
