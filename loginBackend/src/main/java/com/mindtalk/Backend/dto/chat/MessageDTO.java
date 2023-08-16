package com.mindtalk.Backend.dto.chat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageDTO {
    private int id;
    private int senderId;
    private int receiverId;
    private String message;
    private LocalDateTime timestamp;
}
