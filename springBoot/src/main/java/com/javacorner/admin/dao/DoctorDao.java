package com.javacorner.admin.dao;

import com.javacorner.admin.entity.Doctor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface DoctorDao extends JpaRepository<Doctor,Long> {
    @Query(value = "select d from Doctor as d where d.firstName like %:name% or d.lastName like %:name%")
    Page<Doctor> findDoctorsByName(@Param("name") String name, PageRequest pageRequest);

    @Query(value = "select d from Doctor as d where d.user.email=:email")
    Doctor findDoctorByEmail(@Param("email") String email);
}
