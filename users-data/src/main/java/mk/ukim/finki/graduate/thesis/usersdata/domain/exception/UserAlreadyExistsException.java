package mk.ukim.finki.graduate.thesis.usersdata.domain.exception;

public class UserAlreadyExistsException extends RuntimeException{
    public UserAlreadyExistsException(String email) {
        super(String.format("User with username: %s already exists", email));
    }
}
