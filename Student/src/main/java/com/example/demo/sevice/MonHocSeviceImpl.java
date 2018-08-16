package com.example.demo.sevice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.MonHoc;

@Service
public class MonHocSeviceImpl implements MonHocSevice {
	@Autowired
	MonHocReposytory MonHocReposytory;
	
	@Override
	public List<MonHoc> getAll() {
		// TODO Auto-generated method stub
		return MonHocReposytory.findAll();
	}

	@Override
	public MonHoc findById(long id) {
		// TODO Auto-generated method stub
		return MonHocReposytory.findById(id);
	}

	@Override
	public void deleteMonHoc(long id) {
		// TODO Auto-generated method stub
		MonHocReposytory.deleteById(id);
	}

	@Override
	public void saveMonHoc(MonHoc monHoc) {
		// TODO Auto-generated method stub
		MonHocReposytory.save(monHoc);
		
	}

}
