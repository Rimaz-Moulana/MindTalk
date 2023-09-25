package com.mindtalk.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PaymentsDTO {
    private Long payment_id;
    private Integer userId;
    private Integer amount;
    private String payment_type;
}
