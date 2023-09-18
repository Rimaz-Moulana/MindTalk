package com.mindtalk.Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_payments")
public class Payments {
    @Id
    @GeneratedValue
    private int id;

    private String paymentType;
    private LocalDateTime timestamp;
    private int userId;
    private BigDecimal amount;
}
