package sk.msholto.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import sk.msholto.app.models.db.IntegrationMessage;

public interface IntegrationMessageRepository extends JpaRepository<IntegrationMessage, Long> {

}