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
@Table(name="_externalBooked")
public class ExternalBooked {
    @Id
    @GeneratedValue
    private Integer BookedId;
    private Integer counsellorId;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;


}
