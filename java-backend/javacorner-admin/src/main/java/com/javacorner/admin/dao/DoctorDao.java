package com.javacorner.admin.dao;

import com.javacorner.admin.model.Doctor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface DoctorDao extends JpaRepository<Doctor,Long> {
    @Query(value = "select s from Doctor as s where s.firstName like %:name% or s.lastName like %:name%")
    Page<Doctor> findDoctorsByName(@Param("name") String name, PageRequest pageRequest);

    @Query(value = "select s from Doctor as s where s.user.email=:email")
    Doctor findDoctorByEmail(@Param("email") String email);
}
