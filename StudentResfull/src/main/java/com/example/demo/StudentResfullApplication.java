package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.controller.MonHocController;
import com.example.demo.controller.SinhVienController;

@SpringBootApplication
public class StudentResfullApplication implements CommandLineRunner{
	@Autowired
	SinhVienController sinhVienController;
	@Autowired
	MonHocController monHocController;
	
	public static void main(String[] args) {
		SpringApplication.run(StudentResfullApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
	}
}
