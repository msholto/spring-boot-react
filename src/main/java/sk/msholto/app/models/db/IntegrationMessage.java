package sk.msholto.app.models.db;

import java.sql.Clob;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "service_message")
public class IntegrationMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, insertable = true, updatable = false)
    private Long id;

    @Column(name = "created", nullable = false, insertable = true, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date created;

    @Column(name = "type", nullable = false, insertable = true, updatable = false)
    @Enumerated(EnumType.STRING)
    private TypeOfIntegrationMessage type;

    @Column(name = "url", nullable = false, insertable = true, updatable = false, length = 1024)
    private String url;

    @Column(name = "request_headers", nullable = true, insertable = true, updatable = false)
    @Lob
    private Clob requestHeaders;

    @Column(name = "request_body", nullable = true, insertable = true, updatable = false)
    @Lob
    private Clob requestBody;

    @Column(name = "response_headers", nullable = true, insertable = true, updatable = false)
    @Lob
    private Clob responseHeaders;

    @Column(name = "response_body", nullable = true, insertable = true, updatable = false)
    @Lob
    private Clob responseBody;

    @Column(name = "exception", nullable = true, insertable = true, updatable = false)
    @Lob
    private Clob exception;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public TypeOfIntegrationMessage getType() {
        return type;
    }

    public void setType(TypeOfIntegrationMessage type) {
        this.type = type;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Clob getRequestHeaders() {
        return requestHeaders;
    }

    public void setRequestHeaders(Clob requestHeaders) {
        this.requestHeaders = requestHeaders;
    }

    public Clob getRequestBody() {
        return requestBody;
    }

    public void setRequestBody(Clob requestBody) {
        this.requestBody = requestBody;
    }

    public Clob getResponseHeaders() {
        return responseHeaders;
    }

    public void setResponseHeaders(Clob responseHeaders) {
        this.responseHeaders = responseHeaders;
    }

    public Clob getResponseBody() {
        return responseBody;
    }

    public void setResponseBody(Clob responseBody) {
        this.responseBody = responseBody;
    }

    public Clob getException() {
        return exception;
    }

    public void setException(Clob exception) {
        this.exception = exception;
    }
}
