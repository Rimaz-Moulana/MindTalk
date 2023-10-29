package com.mindtalk.Backend.dto;

import com.mindtalk.Backend.entity.Appointments;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentRequestsDTO {
    private Integer requestId;
    private Appointments appointments;
    private Boolean requested;
    private Boolean accepted;
}
