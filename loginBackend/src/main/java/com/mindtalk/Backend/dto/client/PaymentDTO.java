package com.mindtalk.Backend.dto.client;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDTO {
    private int id;
    private String paymentType;
    private LocalDateTime timestamp;
    private int userId;
    private BigDecimal amount;
}
