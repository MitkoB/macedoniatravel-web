package mk.ukim.finki.graduate.thesis.macedoniatravelapp.port.controller;

import lombok.RequiredArgsConstructor;
import mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.domain.RefreshToken;
import mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.domain.RefreshTokenException;
import mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.dto.request.RefreshTokenRequest;
import mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.dto.response.JwtResponse;
import mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.dto.response.RefreshTokenResponse;
import mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.service.RefreshTokenService;
import mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.utils.JwtUtils;
import mk.ukim.finki.graduate.thesis.usersdata.domain.dto.UserLoginDto;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final RefreshTokenService refreshTokenService;
    private final JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody UserLoginDto loginRequest) {

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
