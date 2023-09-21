package com.mindtalk.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDTO {
    private Integer appointmentId;
    private Integer userId;
    private Integer counsellorId;
    private LocalDate date;
    private String timeSlot;
}
