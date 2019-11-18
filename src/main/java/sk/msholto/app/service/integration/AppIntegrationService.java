package sk.msholto.app.service.integration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;

import sk.msholto.app.service.RestService;

@Service
public class AppIntegrationService {

    @Autowired
    private RestService restService;

    public String getListOfBusinessesByIdAsHtml(String identifier) {
        byte[] responseBody = restService.sendGet(UriComponentsBuilder.fromHttpUrl("http://localhost/")).getBody();

        return new String(responseBody);
    }
}
