package com.mindtalk.Backend.entity.entertainment;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "music")
public class Music {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    //@Column(columnDefinition = "BOOLEAN DEFAULT TRUE")
    //private boolean status;
    private String title;
    private String category;
    private String description;
    private String link;
}
