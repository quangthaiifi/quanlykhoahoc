package com.example.demo.sevice;

import java.util.List;

import com.example.demo.model.SinhVien;

public interface SinhVienSevice {
	
	List<SinhVien> getAll();
	
	SinhVien findById(long id);
	
	void deleteSinhVien(long id);
	
	void saveSinhVien(SinhVien sinhVien);
	

}
