package com.mindtalk.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PaymentsDTO {
    private Long payment_id;
    private Integer counsellorId;
    private Integer userId;
    private Integer amount;
    private String payment_type;
    private LocalDateTime timeline;
}
