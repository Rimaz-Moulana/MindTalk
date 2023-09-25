package com.mindtalk.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ExternalBookedDTO {
    private Integer BookedId;
    private Integer counsellorId;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
}
