package com.mindtalk.Backend.controller.chat;

import com.mindtalk.Backend.entity.Message;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

    @MessageMapping("/chat/{chatId}")
    public void handleChatMessage(@DestinationVariable int chatId, Message message){

    }
}
