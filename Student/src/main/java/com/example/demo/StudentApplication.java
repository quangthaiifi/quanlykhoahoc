package com.example.demo;

import java.util.HashSet;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.model.MonHoc;
import com.example.demo.model.SinhVien;
import com.example.demo.sevice.MonHocSevice;
import com.example.demo.sevice.SinhVienSevice;

@SpringBootApplication
@Transactional
public class StudentApplication implements CommandLineRunner{

	@Autowired
	MonHocSevice monHocSevice;
	
	@Autowired
	SinhVienSevice sinhVienSevice;
	public static void main(String[] args) {
		SpringApplication.run(StudentApplication.class, args);
	
	}

	@Override
	public void run(String... args) throws Exception {
		MonHoc monHoc = new MonHoc();
		monHoc.setSoTrinh(1);
		monHoc.setTenMH("Tin Hoc");
		monHocSevice.saveMonHoc(monHoc);
		MonHoc monHoc2 = new MonHoc();
		monHoc2.setSoTrinh(1);
		monHoc2.setTenMH("Ngoai ngu");
		monHocSevice.saveMonHoc(monHoc2);
		SinhVien sinhVien = new SinhVien();
		sinhVien.setGioiTinh(1);
		sinhVien.setLop("a1");
		sinhVien.setNgaySinh("16/09/1998");
		sinhVien.setQueQuan("Thai Binh");
		sinhVien.setTenSV("Thai ");
		Set<MonHoc> monHocs = new HashSet<MonHoc>();
		monHocs.add(monHoc);
		monHocs.add(monHoc2);
		sinhVien.setMonHocs(monHocs);
		sinhVienSevice.saveSinhVien(sinhVien);
		
	}
}
