package sk.msholto.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sk.msholto.app.model.db.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
