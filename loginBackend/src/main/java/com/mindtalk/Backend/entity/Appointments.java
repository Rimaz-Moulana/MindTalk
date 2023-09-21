package com.mindtalk.Backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_appointments")
public class Appointments {
    @Id
    @GeneratedValue
    private Integer appointmentId;
    private Integer userId;
    private Integer counsellorId;
    private LocalDate appointmentDate;
    private LocalTime timeSlot;
}
