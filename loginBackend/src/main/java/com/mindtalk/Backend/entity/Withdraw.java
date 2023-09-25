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
@Table(name = "_withdraw")
public class Withdraw {
    @Id
    @GeneratedValue
    private Integer withdraw_id;
    private Integer counsellorId;
    private Integer amount;
    private String Receiver_name;
    private String Bank_name;
    private LocalDateTime timeline;

}
