package com.example.demo.sevice;

import java.util.List;

import com.example.demo.model.MonHoc;

public interface MonHocSevice {

	List<MonHoc> getAll();
	
	MonHoc findById(long id);
	
	void deleteMonHoc(long id);
	
	void saveMonHoc(MonHoc monHoc);
}
