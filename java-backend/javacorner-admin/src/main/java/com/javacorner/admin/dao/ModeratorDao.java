package com.javacorner.admin.dao;

import com.javacorner.admin.model.Moderator;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ModeratorDao extends JpaRepository<Moderator,Long> {

    @Query(value = "select m from Moderator as m where m.firstName like %:name% or m.lastName like %:name%")
    Page<Moderator> findModeratorsByName(@Param("name") String name, PageRequest pageRequest);

    @Query(value = "select s from Moderator as s where s.user.email=:email")
    Moderator findModeratorByEmail(@Param("email") String email);
}
