package com.example.demo.sevice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.MonHoc;

@Repository
public interface MonHocReposytory extends JpaRepository<MonHoc, Long>{
	MonHoc findById(long id);
	
}
