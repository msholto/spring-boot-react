package sk.msholto.app.service.security;

import org.junit.jupiter.api.extension.ExtendWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class GeneratePasswordTest {

    private static final Logger logger = LoggerFactory.getLogger(GeneratePasswordTest.class);

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    //@Test
    public void testGeneratePassword() {
        String password = "Pass123";

        String encoded = bCryptPasswordEncoder.encode(password);

        logger.debug(encoded);
    }
}
