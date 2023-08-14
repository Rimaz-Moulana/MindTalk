package com.mindtalk.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class messageDTO {
    private int chatId;
    private String content;
    private String senderName;
    private LocalDateTime timestamp;
}
