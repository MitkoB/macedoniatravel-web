package mk.ukim.finki.graduate.thesis.usersdata.domain.exception;

public class PasswordsDoNotMatchException extends RuntimeException{
    public PasswordsDoNotMatchException() {
        super("Passwords do not match exception");
    }
}
