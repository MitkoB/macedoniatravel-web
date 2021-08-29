package mk.ukim.finki.graduate.thesis.macedoniatravelapp.port.listener;

import mk.ukim.finki.graduate.thesis.macedoniatravelapp.config.EmailSenderService;
import mk.ukim.finki.graduate.thesis.usersdata.domain.event.OnRegistrationCompleteEvent;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import mk.ukim.finki.graduate.thesis.usersdata.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class RegistrationListener implements ApplicationListener<OnRegistrationCompleteEvent> {

    @Autowired
    private  UserService service;

    @Autowired
    private EmailSenderService emailSenderService;

    @Override
    public void onApplicationEvent(OnRegistrationCompleteEvent event) {
        this.confirmRegistration(event);
    }

    private void confirmRegistration(OnRegistrationCompleteEvent event) {
        User user = event.getUser();
        String token = UUID.randomUUID().toString();
        service.createVerificationToken(user, token);

        String recipientAddress = user.getEmail();
        String subject = "Registration Confirmation";
        String confirmationUrl
                = event.getAppUrl() + "/confirm-account";
        String message = ("You have registered successfully. Activate your account with this code: " + token);

        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(recipientAddress);
        email.setFrom("belmezovmitko@gmail.com");
        email.setSubject(subject);
        email.setText(message + "\r\n" + "http://localhost:3000" + confirmationUrl);
        emailSenderService.sendEmail(email);
    }
}
