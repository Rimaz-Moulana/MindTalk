package com.mindtalk.Backend.dto.client;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ClientNoteDTO {

    private String date;
    private String duration;
    private String summary;
}
