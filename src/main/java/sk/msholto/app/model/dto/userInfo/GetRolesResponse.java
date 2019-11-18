package sk.msholto.app.model.dto.userInfo;

import sk.msholto.app.model.db.Roles;

import java.util.ArrayList;
import java.util.List;

public class GetRolesResponse {

    private List<Roles> roles;

    public GetRolesResponse() {
        this.roles = new ArrayList<>();
    }

    public List<Roles> getRoles() {
        return roles;
    }

    public void setRoles(List<Roles> roles) {
        this.roles = roles;
    }
}
