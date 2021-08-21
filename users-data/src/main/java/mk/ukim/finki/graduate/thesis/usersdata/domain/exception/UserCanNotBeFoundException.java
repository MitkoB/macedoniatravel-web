package mk.ukim.finki.graduate.thesis.usersdata.domain.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class UserCanNotBeFoundException extends RuntimeException {
    public UserCanNotBeFoundException() {
        super("User can not be found");
    }
}
