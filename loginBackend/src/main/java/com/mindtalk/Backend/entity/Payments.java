package com.mindtalk.Backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "_payments")
public class Payments {
    @Id
    @GeneratedValue
    private Integer id;
    private Long payment_id;
    private Integer userId;
    private Integer amount;
    private String payment_type;
    private LocalDateTime timeline;
}
