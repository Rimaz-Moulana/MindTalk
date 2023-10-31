package com.mindtalk.Backend.repo;

import com.mindtalk.Backend.entity.AssignedCounsellors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssignedCounsellorsRepo extends JpaRepository <AssignedCounsellors, Integer>{

//    public List<AssignedCounsellors> findAllByCounsellorId(Integer counsellor_id);
}
