package com.mindtalk.Backend.controller.counsellor;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface TokenSecurity {
    // Whether to allow requests without a token
    boolean allowWithoutToken() default false;

    // The name of the header that contains the token
    String headerName() default "Authorization";

    // The format of the token
    String tokenFormat() default "Bearer {token}";
}
