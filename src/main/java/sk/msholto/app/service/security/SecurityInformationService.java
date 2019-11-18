package sk.msholto.app.service.security;

import sk.msholto.app.model.db.Roles;

import java.util.List;

public interface SecurityInformationService {

    String getPrincipalName();

    List<Roles> getRoles();
}
