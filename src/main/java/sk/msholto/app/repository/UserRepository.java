package sk.msholto.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sk.msholto.app.model.db.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}
