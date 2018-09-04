package com.example.demo.sevice;


import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.MonHoc;
import com.example.demo.model.SinhVien;

@Service
public class SinhVienSeviceInpl implements SinhVienSevice {
	@Autowired
	SinhVienRepository sinhVienRepository;
	
	@Autowired
	MonHocSevice monHocSevice;
	@Override
	public List<SinhVien> getAll() {
		// TODO Auto-generated method stub
		return sinhVienRepository.findAll();
	}

	@Override
	public SinhVien findById(long id) {
		// TODO Auto-generated method stub
		return sinhVienRepository.getOne(id);
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

	@Override
	public void dangKyMonHoc(long idSinhVien, MonHoc monHoc) {
		SinhVien sinhVien = findById(idSinhVien);
	
		Set<MonHoc> monHocs;
		if (sinhVien.getMonHocs() == null) {
			monHocs = new HashSet<MonHoc>();
		} else {
			monHocs = sinhVien.getMonHocs();
		}
		monHocs.add(monHoc);
		sinhVien.setMonHocs(monHocs);
		this.saveSinhVien(sinhVien);

	}

	@Override
	public void deleteMonHocDangKy(long idSV, MonHoc monHoc) {
			
		SinhVien sinhVien = findById(idSV);
		sinhVien.getMonHocs().remove(monHoc);
		saveSinhVien(sinhVien);
		
		
	}

}
