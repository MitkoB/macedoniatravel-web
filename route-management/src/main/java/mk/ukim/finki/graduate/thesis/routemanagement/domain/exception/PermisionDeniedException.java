package mk.ukim.finki.graduate.thesis.routemanagement.domain.exception;

public class PermisionDeniedException extends RuntimeException{
    public PermisionDeniedException() {
        super("You don't have access");
    }
}
