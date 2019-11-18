package sk.msholto.app.validation;

import java.util.List;

public interface Validatable {

    default boolean validate() {
        return validateAndGetMessages().isEmpty();
    }

    List<String> validateAndGetMessages();
}
