package mk.ukim.finki.graduate.thesis.routemanagement.domain.event;

import lombok.Getter;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import org.springframework.context.ApplicationEvent;

import java.util.Locale;

@Getter
public class OnRouteReservationEvent extends ApplicationEvent {
    private String appUrl;
    private Locale locale;
    private User user;
    private Route route;

    public OnRouteReservationEvent(
            User user, Route route, Locale locale, String appUrl) {
        super(user);

        this.user = user;
        this.route = route;
        this.locale = locale;
        this.appUrl = appUrl;
    }
}
