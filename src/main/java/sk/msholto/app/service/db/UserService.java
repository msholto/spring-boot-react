package sk.msholto.app.service.db;

import sk.msholto.app.model.db.User;

public interface UserService {

    void save(User user);

    User findByUsername(String username);
}
