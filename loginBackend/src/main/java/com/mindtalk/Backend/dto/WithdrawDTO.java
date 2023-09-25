package com.mindtalk.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class WithdrawDTO {
    private Integer counsellorId;
    private Integer amount;
    private String Receiver_name;
    private String Bank_name;
    private LocalDateTime timeline;
}
