package sk.msholto.app.scheduler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class AppScheduler {

    private static final Logger logger = LoggerFactory.getLogger(AppScheduler.class);

    @Scheduled(fixedRate = 1000 * 60 * 30) // every 30 minutes
    public void checkReminders() {
        logger.info("App scheduler invoked");

        logger.info("App scheduler finished");
    }
}
