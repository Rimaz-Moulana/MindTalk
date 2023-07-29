package com.javacorner.admin.dao;

import com.javacorner.admin.model.RegUser;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface RegUserDao extends JpaRepository<RegUser,Long> {

    @Query(value = "select r from RegUser as r where r.username like %:name%")
    Page<RegUser> findRegUserByName(@Param("name") String name, PageRequest pageRequest);

    @Query(value = "select r from RegUser as r where r.user.email=:email")
    RegUser findRegUserByEmail(@Param("email") String email);

}
