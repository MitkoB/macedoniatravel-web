package mk.ukim.finki.graduate.thesis.macedoniatravelapp.port.controller;
import lombok.RequiredArgsConstructor;
import mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.exception.WrongPasswordException;
import mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.domain.RefreshToken;
import mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.domain.RefreshTokenException;
import mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.dto.request.RefreshTokenRequest;
import mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.dto.response.JwtResponse;
import mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.dto.response.RefreshTokenResponse;
import mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.service.RefreshTokenService;
import mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.utils.JwtUtils;
import mk.ukim.finki.graduate.thesis.usersdata.domain.dto.UserLoginDto;
import mk.ukim.finki.graduate.thesis.usersdata.domain.exception.UserCanNotBeFoundException;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import mk.ukim.finki.graduate.thesis.usersdata.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final RefreshTokenService refreshTokenService;
    private final JwtUtils jwtUtils;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody UserLoginDto loginRequest) {


        UserDetails userInfo=userService.loadUserByUsername(loginRequest.getEmail());
        if(userInfo==null) {
            return ResponseEntity.badRequest().body(new UserCanNotBeFoundException());
        }
        if(!passwordEncoder.matches(loginRequest.getPassword(), userInfo.getPassword()))
        {
            return ResponseEntity.badRequest().body(new WrongPasswordException());
        }

        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        User userDetails = (User) authentication.getPrincipal();

        String jwt = jwtUtils.generateJwtToken(userDetails);
        List<String> roles = userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
        RefreshToken refreshToken = refreshTokenService.createRefreshToken(userDetails.getId());

        return ResponseEntity.ok(new JwtResponse(jwt, refreshToken.getToken(), userDetails.getId(),
                userDetails.getUsername(), roles));
    }

    @PostMapping("/logout")
    public void logout(Authentication authentication, HttpServletRequest request){
        User  user = (User) authentication.getPrincipal();
        this.refreshTokenService.deleteByUserId(user.getId());
        request.getSession().invalidate();
    }

    @PostMapping("/refreshtoken")
    public ResponseEntity<?> refreshtoken(@Valid @RequestBody RefreshTokenRequest request) {
        String requestRefreshToken = request.getRefreshToken();

        return refreshTokenService.findByToken(requestRefreshToken)
                .map(refreshTokenService::verifyExpiration)
                .map(RefreshToken::getUser)
                .map(user -> {
                    String token = jwtUtils.generateTokenFromUsername(user.getUsername());
                    return ResponseEntity.ok(new RefreshTokenResponse(token, requestRefreshToken));
                })
                .orElseThrow(() -> new RefreshTokenException(requestRefreshToken,
                        "Refresh token is not in database!"));
    }
}
