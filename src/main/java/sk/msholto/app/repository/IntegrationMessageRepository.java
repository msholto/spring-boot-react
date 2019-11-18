package sk.msholto.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sk.msholto.app.model.db.IntegrationMessage;

public interface IntegrationMessageRepository extends JpaRepository<IntegrationMessage, Long> {

}
