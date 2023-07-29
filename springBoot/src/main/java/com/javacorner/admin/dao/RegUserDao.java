package com.javacorner.admin.dao;

import com.javacorner.admin.entity.Instructor;
import com.javacorner.admin.entity.RegUser;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;

public interface RegUserDao extends JpaRepository<RegUser,Long> {

    @Query("select u from RegUser as u where u.userName = :name" )
    Page<RegUser> findRegUsersByName(@Param("name") String name, PageRequest pageRequest);

    @Query("select u from RegUser as u where u.user.email = :email")
    RegUser findRegUserByEmail(@Param("email") String email);


}
