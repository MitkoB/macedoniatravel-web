package mk.ukim.finki.graduate.thesis.usersdata.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.var;
import mk.ukim.finki.graduate.thesis.usersdata.domain.dto.UserLoginDto;
import mk.ukim.finki.graduate.thesis.usersdata.domain.dto.UserRegisterDto;
import mk.ukim.finki.graduate.thesis.usersdata.domain.exception.PasswordsDoNotMatchException;
import mk.ukim.finki.graduate.thesis.usersdata.domain.exception.UserAlreadyExistsException;
import mk.ukim.finki.graduate.thesis.usersdata.domain.exception.UserCanNotBeFoundException;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.VerificationToken;
import mk.ukim.finki.graduate.thesis.usersdata.domain.repository.UserRepository;
import mk.ukim.finki.graduate.thesis.usersdata.domain.repository.VerificationTokenRepository;
import mk.ukim.finki.graduate.thesis.usersdata.service.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.validation.ConstraintViolationException;
import javax.validation.Validator;
import java.util.List;
import java.util.Objects;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final VerificationTokenRepository verificationTokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final Validator validator;

    @Override
    public User register(UserRegisterDto form) {
        Objects.requireNonNull(form, "user form must not be null");
        var constraintViolations = validator.validate(form);
        if (constraintViolations.size() > 0) {
            throw new ConstraintViolationException("user form is not valid", constraintViolations);
        }
        if (emailExist(form.getEmail())) {
            throw new UserAlreadyExistsException(form.getEmail());
        }
        if (!form.getPassword().equals(form.getRepeatPassword())) {
            throw new PasswordsDoNotMatchException();
        }

        return userRepository.saveAndFlush(toDomainObject(form));
    }

    @Override
    public User login(UserLoginDto form) {
        return null;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).orElseThrow(UserCanNotBeFoundException::new);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User getUser(String verificationToken) {
        return verificationTokenRepository.findByToken(verificationToken).getUser();
    }

    @Override
    public void saveRegisteredUser(User user) {
      userRepository.save(user);
    }

    @Override
    public void createVerificationToken(User user, String token) {
        VerificationToken myToken = new VerificationToken(user, token);
        verificationTokenRepository.save(myToken);
    }

    @Override
    public VerificationToken getVerificationToken(String VerificationToken) {
        return verificationTokenRepository.findByToken(VerificationToken);
    }

    private boolean emailExist(String email) {
        return userRepository.findByEmail(email) != null;
    }

    private User toDomainObject(UserRegisterDto userForm) {
        return new User(userForm.getEmail(), passwordEncoder.encode(userForm.getPassword()), userForm.getFirstName(),
                userForm.getLastName(), userForm.getAddress(), userForm.getContactNumber(), userForm.getRole());
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return userRepository.findByEmail(s);
    }
}
