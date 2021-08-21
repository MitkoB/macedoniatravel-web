package mk.ukim.finki.graduate.thesis.routemanagement.domain.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND)
public class TouristAttractionCanNotBeFoundException extends RuntimeException{
    public TouristAttractionCanNotBeFoundException() {
        super("Tourist attraction can not be found");
    }
}
