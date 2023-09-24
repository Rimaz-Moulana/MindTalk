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
    private LocalTime Mon_S;
    private LocalTime Mon_E;
    private LocalTime Tue_S;
    private LocalTime Tue_E;
    private LocalTime Wed_S;
    private LocalTime Wed_E;
    private LocalTime Thur_S;
    private LocalTime Thur_E;
    private LocalTime Fri_S;
    private LocalTime Fri_E;
    private LocalTime Sat_S;
    private LocalTime Sat_E;
    private LocalTime Sun_S;
    private LocalTime Sun_E;

}
