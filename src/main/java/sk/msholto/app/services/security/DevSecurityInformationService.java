package sk.msholto.app.services.security;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;
import sk.msholto.app.models.db.Roles;

import java.util.Arrays;
import java.util.List;

@Service
@Profile("dev")
public class DevSecurityInformationService implements SecurityInformationService {

    public String getPrincipalName() {
        return "admin";
    }

    public List<Roles> getRoles() {
        return Arrays.asList(Roles.ROLE_ADMIN);
    }
}