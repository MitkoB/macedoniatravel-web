package mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.domain;

import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    Optional<RefreshToken> findByToken(String token);
    void deleteByUser(User user);
}
