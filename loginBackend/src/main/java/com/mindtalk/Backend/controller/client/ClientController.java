package com.mindtalk.Backend.controller.client;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/client")
@Tag(name = "Client")
public class ClientController {


    @Operation(
            description = "Get endpoint for client",
            summary = "This is a summary for client get endpoint",
            responses = {
                    @ApiResponse(
                            description = "Success",
                            responseCode = "200"
                    ),
                    @ApiResponse(
                            description = "Unauthorized / Invalid Token",
                            responseCode = "403"
                    )
            }

    )
    @GetMapping
    public String get() {
        return "GET:: client controller";
    }
    @PostMapping
    public String post() {
        return "POST:: client controller";
    }
    @PutMapping
    public String put() {
        return "PUT:: client controller";
    }
    @DeleteMapping
    public String delete() {
        return "DELETE:: client controller";
    }
}
