package com.mindtalk.Backend.dto.entertainment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MeditationDTO {
    private boolean status;
    private String title;
    private String category;
    private String description;
    private String link;

    public boolean getStatus() {
        return status=true;
    }
}
