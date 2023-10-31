package com.mindtalk.Backend.dto.chat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageDTO {
    private int id;
    private int senderId;
    private String content;
    private Date time;
    private int chatId;
}
