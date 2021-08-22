package mk.ukim.finki.graduate.thesis.macedoniatravelapp.security.domain;

import lombok.Getter;
import lombok.Setter;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import javax.persistence.*;
import java.time.Instant;

@Entity
@Getter
@Setter
@Table(name = "refreshToken")
public class RefreshToken {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Column(nullable = false, unique = true)
    private String token;

    @Column(nullable = false)
    private Instant expiryDate;
}
