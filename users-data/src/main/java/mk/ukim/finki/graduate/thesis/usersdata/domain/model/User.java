package mk.ukim.finki.graduate.thesis.usersdata.domain.model;
import lombok.Getter;
import lombok.NoArgsConstructor;
import mk.ukim.finki.graduate.thesis.usersdata.domain.enumeration.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.RouteMatcher;

import javax.persistence.*;
import java.util.Collection;
import java.util.Collections;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "[USER]")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private String address;
    private String contactNumber;
    @Enumerated(value = EnumType.STRING)
    private Role role;
    private boolean enabled;

    public User(String email, String password, String firstName, String lastName, String address, String contactNumber,
                Role role) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.contactNumber = contactNumber;
        this.role = role;
        this.enabled = false;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(role);
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    public boolean isEnabled() {
        return enabled;
    }
}
