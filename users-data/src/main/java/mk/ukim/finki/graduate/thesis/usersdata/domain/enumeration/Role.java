package mk.ukim.finki.graduate.thesis.usersdata.domain.enumeration;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
    ROLE_ADMIN, ROLE_USER, ROLE_TENANT;

    @Override
    public String getAuthority() {
        return name();
    }
}
