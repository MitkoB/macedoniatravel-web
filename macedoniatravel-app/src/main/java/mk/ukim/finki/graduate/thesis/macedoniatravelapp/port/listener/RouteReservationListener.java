package mk.ukim.finki.graduate.thesis.macedoniatravelapp.port.listener;

import mk.ukim.finki.graduate.thesis.macedoniatravelapp.config.EmailSenderService;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.event.OnRouteReservationEvent;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Component;


@Component
public class RouteReservationListener implements ApplicationListener<OnRouteReservationEvent> {
    @Autowired
    private EmailSenderService emailSenderService;

    @Override
    public void onApplicationEvent(OnRouteReservationEvent event) {
        this.confirmReservation(event);
    }

    private void confirmReservation(OnRouteReservationEvent event) {
        User user = event.getUser();
        Route route = event.getRoute();
        String recipientAddress = user.getEmail();
        String subject = "Route Reservation";
        String message = ("This is your ticket. You made your reservation for route: " + route.getName() + "\r\n" +
                "More information: \r\n" +
                "Price: " + route.getPrice() + "\r\n" +
                "Start date: " + route.getStartDate().toString().split("T")[0]
                + " at: " +  route.getStartDate().toString().split("T")[1]);

        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(recipientAddress);
        email.setFrom("belmezovmitko@gmail.com");
        email.setSubject(subject);
        email.setText(message);
        emailSenderService.sendEmail(email);
    }
}
