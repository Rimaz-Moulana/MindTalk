package com.javacorner.admin.dao;

import com.javacorner.admin.model.ProfessionalCounselor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProfessionalCounselorDao extends JpaRepository<ProfessionalCounselor,Long> {

    @Query(value = "select s from ProfessionalCounselor as s where s.firstName like %:name% or s.lastName like %:name%")
    Page<ProfessionalCounselor> findProfessionalCounselorsByName(@Param("name") String name, PageRequest pageRequest);

    @Query(value = "select s from ProfessionalCounselor as s where s.user.email=:email")
    ProfessionalCounselor findProfessionalCounselorByEmail(@Param("email") String email);
}
