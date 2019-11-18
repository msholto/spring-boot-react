package sk.msholto.app.service.security;

import org.springframework.context.annotation.Profile;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import sk.msholto.app.model.db.Roles;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Profile("test")
public class TestSecurityInformationService implements SecurityInformationService {

    public String getPrincipalName() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth != null) {
            Object o = auth.getPrincipal();
            if (o instanceof UserDetails) {
                return ((User) o).getUsername();
            }
        }

        return null;
    }

    public List<Roles> getRoles() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth != null) {
            Object o = auth.getPrincipal();
            if (o instanceof UserDetails) {
                return ((User) o)
                        .getAuthorities()
                        .stream()
                        .map(x -> Roles.valueOf(x.getAuthority()))
                        .collect(Collectors.toList());
            }
        }

        return new ArrayList<>();
    }
}
