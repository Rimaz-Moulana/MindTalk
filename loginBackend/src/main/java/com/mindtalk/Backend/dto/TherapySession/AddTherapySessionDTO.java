package com.mindtalk.Backend.dto.TherapySession;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddTherapySessionDTO {
    private Long id;

    private String time;
    private String date;
    private String counsellors;
    private String sessionType;
    private String link;
}
