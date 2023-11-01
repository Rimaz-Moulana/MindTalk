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
    private Integer Id;
    private Integer counsellorId;
    private Integer Day;
    private LocalTime Timeslot1_S;
    private LocalTime Timeslot1_E;
    private LocalTime Timeslot2_S;
    private LocalTime Timeslot2_E;
    private LocalTime Timeslot3_S;
    private LocalTime Timeslot3_E;
}
