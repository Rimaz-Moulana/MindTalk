package com.javacorner.admin.dao;

import com.javacorner.admin.model.VolunteerCounselor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VolunteerCounselorDao extends JpaRepository<VolunteerCounselor,Long> {
    @Query(value = "select s from VolunteerCounselor as s where s.firstName like %:name% or s.lastName like %:name%")
    Page<VolunteerCounselor> findVolunteerCounserlorsByName(@Param("name") String name, PageRequest pageRequest);

    @Query(value = "select s from VolunteerCounselor as s where s.user.email=:email")
    VolunteerCounselor findVolunteerCounserlorByEmail(@Param("email") String email);
}
