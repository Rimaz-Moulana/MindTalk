package com.mindtalk.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CounsellorAvailabilityDTO {
    private Integer CounsellorId;
    private LocalDate Mon_D;
    private LocalTime Mon_T;
    private LocalDate Tue_D;
    private LocalTime Tue_T;
    private LocalDate Wed_D;
    private LocalTime Wed_T;
    private LocalDate Thur_D;
    private LocalTime Thur_T;
    private LocalDate Fri_D;
    private LocalTime Fri_T;
    private LocalDate Sat_D;
    private LocalTime Sat_T;
    private LocalDate Sun_D;
    private LocalTime Sun_T;
}
