package com.javacorner.admin.dao;

import com.javacorner.admin.entity.RegUser;
import com.javacorner.admin.entity.Student;
import com.javacorner.admin.entity.VolunteerCounselor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VolunteerCounselorDao extends JpaRepository<VolunteerCounselor,Long> {

    @Query(value = "select v from VolunteerCounselor as v where v.firstName like %:name% or v.lastName like %:name%")
    Page<Student> findVolunteerCounselorsByName(@Param("name") String name, PageRequest pageRequest);

    @Query(value = "select v from VolunteerCounselor as v where v.user.email=:email")
    Student findVolunteerCounselorByEmail(@Param("email") String email);
}
