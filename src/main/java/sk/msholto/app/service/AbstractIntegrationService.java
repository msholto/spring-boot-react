package sk.msholto.app.service;

import java.nio.charset.Charset;
import java.util.Date;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.hibernate.engine.jdbc.ClobProxy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import sk.msholto.app.model.db.IntegrationMessage;
import sk.msholto.app.model.db.TypeOfIntegrationMessage;
import sk.msholto.app.repository.IntegrationMessageRepository;

public abstract class AbstractIntegrationService {

    private static final Logger logger = LoggerFactory.getLogger(AbstractIntegrationService.class);

    public abstract RestTemplate getRestTemplate();

    @Autowired
    private IntegrationMessageRepository integrationMessageRepository;

    private final HttpHeaders createHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "text/html; charset=utf-8");
        headers.set("User-Agent",
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36");

        return headers;
    }

    public final ResponseEntity<byte[]> sendGet(String uri) {
        return sendGetWithSession(uri, null);
    }

    public final ResponseEntity<byte[]> sendGet(UriComponentsBuilder builder) {
        return sendGetWithSession(builder, null);
    }

    public final ResponseEntity<byte[]> sendGetWithSession(UriComponentsBuilder builder, String session) {
        return sendGetWithSession(builder.toUriString(), session);
    }

    public final ResponseEntity<byte[]> sendGetWithSession(String uri, String session) {
        HttpHeaders headers = createHeaders();
        if (!StringUtils.isEmpty(session)) {
            headers.set("Cookie", session);
        }

        HttpEntity<?> requestEntity = new HttpEntity<>(headers);

        logger.debug("Invoking get for uri: {}", uri);

        try {
            ResponseEntity<byte[]> response = getRestTemplate().exchange(uri, HttpMethod.GET, requestEntity,
                    byte[].class);

            createMessage(TypeOfIntegrationMessage.GET, uri, requestEntity.getHeaders().toString(), null,
                    response.getHeaders().toString(), new String(response.getBody(), Charset.forName("UTF-8")), null);

            return response;
        } catch (Exception e) {
            createMessage(TypeOfIntegrationMessage.GET, uri, requestEntity.getHeaders().toString(), null, null, null,
                    ExceptionUtils.getStackTrace(e));

            throw e;
        }
    }

    public final ResponseEntity<byte[]> sendPost(String uri, MultiValueMap<String, String> params) {
        return sendPostWithSession(uri, params, null);
    }

    public final ResponseEntity<byte[]> sendPostWithSession(String url, MultiValueMap<String, String> params,
            String session) {
        HttpHeaders headers = createHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        if (!StringUtils.isEmpty(session)) {
            headers.set("Cookie", session);
        }

        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<MultiValueMap<String, String>>(params,
                headers);

        try {
            ResponseEntity<byte[]> response = getRestTemplate().exchange(url, HttpMethod.POST, requestEntity,
                    byte[].class);

            createMessage(TypeOfIntegrationMessage.POST, url, requestEntity.getHeaders().toString(),
                    requestEntity.getBody().toString(), response.getHeaders().toString(),
                    new String(response.getBody(), Charset.forName("UTF-8")), null);

            return response;
        } catch (Exception e) {
            createMessage(TypeOfIntegrationMessage.POST, url, requestEntity.getHeaders().toString(),
                    requestEntity.getBody().toString(), null, null, ExceptionUtils.getStackTrace(e));

            throw e;
        }
    }

    private final void createMessage(TypeOfIntegrationMessage type, String url, String requestHeaders,
            String requestBody, String responseHeaders, String responseBody, String exception) {
        IntegrationMessage integrationMessage = new IntegrationMessage();
        integrationMessage.setCreated(new Date());
        integrationMessage.setType(type);
        integrationMessage.setUrl(url);

        if (requestHeaders != null) {
            integrationMessage.setRequestHeaders(ClobProxy.generateProxy(requestHeaders));
        }

        if (requestBody != null) {
            integrationMessage.setRequestBody(ClobProxy.generateProxy(requestBody));
        }

        if (responseHeaders != null) {
            integrationMessage.setResponseHeaders(ClobProxy.generateProxy(responseHeaders));
        }

        if (responseBody != null) {
            integrationMessage.setResponseBody(ClobProxy.generateProxy(responseBody));
        }

        if (exception != null) {
            integrationMessage.setException(ClobProxy.generateProxy(exception));
        }

        integrationMessageRepository.save(integrationMessage);
    }
}
