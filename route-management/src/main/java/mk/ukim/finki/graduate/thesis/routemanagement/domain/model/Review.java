package mk.ukim.finki.graduate.thesis.routemanagement.domain.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "review")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private User user;
    @ManyToOne
    private Route route;
    private LocalDateTime timeCreated;
    private String comment;
    private Integer grade;

    public Review(User user, Route route, String comment, Integer grade) {
        this.user = user;
        this.route = route;
        this.timeCreated = LocalDateTime.now();
        this.comment = comment;
        this.grade = grade;
    }
}
