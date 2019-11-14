package sk.msholto.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import sk.msholto.app.models.db.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
}