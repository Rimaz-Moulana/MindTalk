package com.mindtalk.Backend.entity.client;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "client_note")
public class ClientNoteEntity {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;

    private int clientId;
    private String date;
    private String duration;
    private String note;
    private int counsellorId;
}
