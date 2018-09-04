package com.example.demo.sevice;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.MonHoc;
import com.example.demo.model.SinhVien;

@Repository
public interface SinhVienRepository extends JpaRepository<SinhVien, Long> {
		SinhVien findById(long id);
		
		
}
