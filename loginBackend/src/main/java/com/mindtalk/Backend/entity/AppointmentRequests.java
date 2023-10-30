package com.mindtalk.Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    @ManyToOne
    @JoinColumn(name = "appointmentId")
    private Appointments appointments;
   private Boolean requested;
   private Boolean accepted;
}
