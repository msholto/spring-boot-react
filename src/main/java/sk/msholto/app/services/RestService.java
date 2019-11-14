package sk.msholto.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RestService extends AbstractIntegrationService {

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public RestTemplate getRestTemplate() {
        return restTemplate;
    }
}
