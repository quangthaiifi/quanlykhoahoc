package com.example.demo;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.model.MonHoc;
import com.example.demo.model.SinhVien;
import com.example.demo.sevice.MonHocSevice;
import com.example.demo.sevice.SinhVienRepository;
import com.example.demo.sevice.SinhVienSevice;

@SpringBootApplication
@Transactional
public class StudentApplication   {

	@Autowired
	SinhVienRepository sinhVienRepository;
	
	@Autowired
	SinhVienSevice sinhVienSevice;
	public static void main(String[] args) {
		SpringApplication.run(StudentApplication.class, args);
	
	}
	

	
}
