package sk.msholto.app.services.db;

import sk.msholto.app.models.db.User;

public interface UserService {

    void save(User user);

    User findByUsername(String username);
}