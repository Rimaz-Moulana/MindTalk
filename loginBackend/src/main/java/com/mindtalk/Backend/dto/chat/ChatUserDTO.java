package com.mindtalk.Backend.dto.chat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ChatUserDTO {
    private int chatUserId;
    private String name;
    private String userRole;
}
