package mk.ukim.finki.graduate.thesis.routemanagement.domain.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.enumeration.RouteStatus;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "route")
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(length = 5000)
    private String description;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String pictures;
    @Enumerated(value = EnumType.STRING)
    private RouteStatus routeStatus;
    @ManyToMany(fetch = FetchType.EAGER)
    private List<Attraction> attractions;
    @ManyToOne
    private User user;
    private String price;
    // new field how many people can go on this route
    private Integer capacity;
    // new field for feature get top 10
    private Double averageGrade;

    public Route(String name, String description, LocalDateTime startDate, LocalDateTime endDate, String pictures,
                 RouteStatus routeStatus, List<Attraction> attractions, User user, String price, Integer capacity) {
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.pictures = pictures;
        this.routeStatus = routeStatus;
        this.attractions = attractions;
        this.user = user;
        this.price = price;
        this.capacity = capacity;
        this.averageGrade = 0.0;
    }
}
