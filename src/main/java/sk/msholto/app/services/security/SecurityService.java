package sk.msholto.app.services.security;

public interface SecurityService {

    String findLoggedInUsername();

    void autoLogin(String username, String password);
}
