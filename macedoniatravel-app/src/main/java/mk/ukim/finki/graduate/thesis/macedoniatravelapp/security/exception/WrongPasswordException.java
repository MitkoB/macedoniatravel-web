package mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.exception;

public class WrongPasswordException extends RuntimeException{
    public WrongPasswordException() {
        super("Wrong password exception, please enter correct password");
    }
}
