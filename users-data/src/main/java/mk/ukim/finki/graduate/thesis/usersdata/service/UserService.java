package mk.ukim.finki.graduate.thesis.usersdata.service;

import mk.ukim.finki.graduate.thesis.usersdata.domain.dto.UserLoginDto;
import mk.ukim.finki.graduate.thesis.usersdata.domain.dto.UserRegisterDto;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.VerificationToken;

import java.util.List;

public interface UserService {
    User register(UserRegisterDto form);

    User login(UserLoginDto form);

    List<User> findAll();

    User findById(Long id);

    User getUser(String verificationToken);

    void saveRegisteredUser(User user);

    void createVerificationToken(User user, String token);

    VerificationToken getVerificationToken(String VerificationToken);
}
