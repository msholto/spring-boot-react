package sk.msholto.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import sk.msholto.app.models.db.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}