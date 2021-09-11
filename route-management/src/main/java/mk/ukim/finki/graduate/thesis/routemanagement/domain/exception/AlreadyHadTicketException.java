package mk.ukim.finki.graduate.thesis.routemanagement.domain.exception;

public class AlreadyHadTicketException extends RuntimeException{
    public AlreadyHadTicketException() {
        super("You can not create ticket again! You have already created it for this route.");
    }
}
