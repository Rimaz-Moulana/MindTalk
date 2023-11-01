package com.mindtalk.Backend.dto;

import com.mindtalk.Backend.entity.Appointments;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentRequestsDTO {
    private Integer requestId;
    private Integer userId;
    private Boolean requested;
    private Boolean accepted;
    private Integer counsellorId;
    private LocalDate date;
    private String timeSlot;
}
