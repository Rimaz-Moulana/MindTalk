package com.mindtalk.Backend.controller.notification;

import com.mindtalk.Backend.entity.Notification;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class NotificationController {

    private final SimpMessagingTemplate messagingTemplate;

    public NotificationController(SimpMessagingTemplate messagingTemplate){
        this.messagingTemplate = messagingTemplate;
    }

    @MessageMapping("/sendPublicNotification")
    public void sendPublicNotification(String message){
        messagingTemplate.convertAndSend("/topic/notification", message);// broadcast the message
    }

    @MessageMapping("/sendPrivateNotification")
    public void sendPrivateNotification(Notification request){
        String userChannel = "/user/" + request.getRecipientId() + "/queue/private";
    }
}
