package mk.ukim.finki.graduate.thesis.routemanagement.domain.exception;

public class CanNotEnrollOnRouteException extends RuntimeException{
    public CanNotEnrollOnRouteException() {
        super("All places are filled, you can not check in on the route.");
    }
}
