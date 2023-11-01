package com.mindtalk.Backend.entity;

import jakarta.persistence.*;
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
@Table(name = "_appointmentRequests")
public class AppointmentRequests {
    @Id
    @GeneratedValue
    private Integer requestId;
   private Integer userId;

   private Boolean requested;
   private Boolean accepted;
    private Integer counsellorId;
    private LocalDate date;
    private LocalTime timeSlot;
}
