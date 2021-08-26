package mk.ukim.finki.graduate.thesis.favoritecartmanagement.domain.repository;

import mk.ukim.finki.graduate.thesis.favoritecartmanagement.domain.enumeration.FavoriteCartStatus;
import mk.ukim.finki.graduate.thesis.favoritecartmanagement.domain.model.FavoriteCart;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FavoriteCartRepository extends JpaRepository<FavoriteCart, Long> {
    Optional<FavoriteCart> findByUserAndFavoriteCartStatus(User user, FavoriteCartStatus status);
}
