package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.HashSet;
import java.util.List;

public interface ChatRepository extends JpaRepository<Chat, Integer> {
    List<Chat> findByUserId(int userId);
    List<Chat> findByCounsellorId(int counsellorId);
    HashSet<Chat> getChatByFirstUserName(String username);

    HashSet<Chat> getChatBySecondUserName(String username);

    HashSet<Chat> getChatByFirstUserNameAndSecondUserName(String firstUserName, String secondUserName);

    HashSet<Chat> getChatBySecondUserNameAndFirstUserName(String firstUserName, String secondUserName);
}
//public interface ChatRepository extends JpaRepository<Chat, Integer> {
//}
