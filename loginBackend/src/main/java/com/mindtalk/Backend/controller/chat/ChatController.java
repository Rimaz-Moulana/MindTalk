package com.mindtalk.Backend.controller.chat;

import com.mindtalk.Backend.entity.Chat;
import com.mindtalk.Backend.entity.ChatMessage;
import com.mindtalk.Backend.entity.Message;
import com.mindtalk.Backend.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController
@Controller
//@RequestMapping("/api/v1/chats")
public class ChatController {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;    //can create dynamic templates

    @MessageMapping("chat/{to}")
    public void sendMessage(
            @DestinationVariable String to,
            Message message
    ){
        System.out.println("handling send messsage: "+message+ " to: "+ to);
        message.
    }

//    @MessageMapping("/message")     //app/message
//    @SendTo("/chatroom/public")
//    public Message receivePublicMessage(
//            @Payload Message message
//    ){
//        return message;
//    }
//
//    @MessageMapping("/private-message")
//    public Message receivePrivateMessage(
//            @Payload Message message
//    ){
//        simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(),"/private",message);   //user/username/private
//        return message;
//    }

//    //each time we receive a message it will go to /topic/public
//    @MessageMapping("/chat.sendMessage")
//    @SendTo("/topic/public")
//    public Message sendMessage(
//            @Payload Message message
//    ){
//        return mssage;
//    }
//
//    @MessageMapping("/chat.addUser")
//    @SendTo("/topic/public")
//    public ChatMessage addUser(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor){
//        //add username in websocket session
//        headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
//        return chatMessage;
//    }

}
