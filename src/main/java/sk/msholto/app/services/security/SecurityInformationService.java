package sk.msholto.app.services.security;

import sk.msholto.app.models.db.Roles;

import java.util.List;

public interface SecurityInformationService {

    String getPrincipalName();

    List<Roles> getRoles();
}