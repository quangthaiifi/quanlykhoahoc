package com.example.demo.sevice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.SinhVien;

@Service
public class SinhVienSeviceInpl implements SinhVienSevice {
	@Autowired
	SinhVienRepository sinhVienRepository;

	@Override
	public List<SinhVien> getAll() {
		// TODO Auto-generated method stub
		return sinhVienRepository.findAll();
	}

	@Override
	public SinhVien findById(long id) {
		// TODO Auto-generated method stub
		return sinhVienRepository.findById(id);
	}

	@Override
	public void deleteSinhVien(long id) {
		sinhVienRepository.deleteById(id);
		
	}

	@Override
	public void saveSinhVien(SinhVien sinhVien) {
		// TODO Auto-generated method stub
		sinhVienRepository.save(sinhVien);
	}

}
