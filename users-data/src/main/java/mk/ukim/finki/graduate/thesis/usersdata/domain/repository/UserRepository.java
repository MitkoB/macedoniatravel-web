package mk.ukim.finki.graduate.thesis.usersdata.domain.repository;

import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
