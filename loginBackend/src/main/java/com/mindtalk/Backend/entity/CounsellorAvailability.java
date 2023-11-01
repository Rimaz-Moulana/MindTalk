package com.mindtalk.Backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "_counsellorAvailability")
public class CounsellorAvailability {
   @Id
    @GeneratedValue
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
