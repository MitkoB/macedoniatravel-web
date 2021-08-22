package mk.ukim.finki.graduate.thesis.macedoniatravelapp.port.controller;

import lombok.RequiredArgsConstructor;
import mk.ukim.finki.graduate.thesis.usersdata.domain.dto.UserRegisterDto;
import mk.ukim.finki.graduate.thesis.usersdata.domain.event.OnRegistrationCompleteEvent;
import mk.ukim.finki.graduate.thesis.usersdata.domain.exception.UserAlreadyExistsException;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.VerificationToken;
import mk.ukim.finki.graduate.thesis.usersdata.service.UserService;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.Calendar;
import java.util.Locale;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final ApplicationEventPublisher eventPublisher;
    private final UserService userService;

    @PostMapping("/registration")
    public ResponseEntity<UserRegisterDto> registerUserAccount(
            @RequestBody @Valid UserRegisterDto userDto,
            HttpServletRequest request) {

        try {
            User registered = userService.register(userDto);
            String appUrl = request.getContextPath();
            eventPublisher.publishEvent(new OnRegistrationCompleteEvent(registered,
                    request.getLocale(), appUrl));
        } catch (UserAlreadyExistsException uaeEx) {
            return ResponseEntity.badRequest().build();
        } catch (RuntimeException ex) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok().body(userDto);
    }

    @GetMapping("/registrationConfirm")
    public ResponseEntity<?> confirmRegistration
            (WebRequest request, @RequestParam("token") String token) {

        Locale locale = request.getLocale();

        VerificationToken verificationToken = userService.getVerificationToken(token);
        if (verificationToken == null) {
            String message = "No token";
            return ResponseEntity.badRequest().body(message);
        }

        User user = verificationToken.getUser();
        Calendar cal = Calendar.getInstance();
        if ((verificationToken.getExpiryDate().getTime() - cal.getTime().getTime()) <= 0) {
            String message ="Token not valid anymore";
            return ResponseEntity.badRequest().body(message);
        }

        user.setEnabled(true);
        userService.saveRegisteredUser(user);
        return ResponseEntity.ok().body(user);
    }
}
