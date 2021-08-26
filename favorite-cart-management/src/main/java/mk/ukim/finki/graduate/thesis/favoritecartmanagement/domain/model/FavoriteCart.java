package mk.ukim.finki.graduate.thesis.favoritecartmanagement.domain.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mk.ukim.finki.graduate.thesis.favoritecartmanagement.domain.enumeration.FavoriteCartStatus;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "favoriteCart")
public class FavoriteCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime localDateTime;
    @ManyToOne
    private User user;
    @Enumerated(EnumType.STRING)
    private FavoriteCartStatus favoriteCartStatus;
    @ManyToMany(fetch = FetchType.EAGER)
    private List<Route> routeList;

    public FavoriteCart(User user) {
        this.localDateTime=LocalDateTime.now();
        this.user = user;
        this.favoriteCartStatus=FavoriteCartStatus.CREATED;
        this.routeList=new ArrayList<>();
    }
}
