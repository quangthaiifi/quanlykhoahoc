package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.SinhVien;
import com.example.demo.sevice.SinhVienSevice;

@Controller
public class SinhVienController {
	@Autowired
	SinhVienSevice sinhVienSevice;
	@ResponseBody
	@GetMapping(value="/")
	public String hompage() {
		return "Xin chao";
	}
	@ResponseBody 
	@GetMapping(value="/sinhviens")
	public List<SinhVien> getAll(){
		return sinhVienSevice.getAll();
	}
	@PostMapping(value="sinhvien")
	public void createSinhVien(@RequestBody SinhVien sinhVien) {
		sinhVienSevice.saveSinhVien(sinhVien);;
	}
	@ResponseBody
	@GetMapping(value="/sinhvien/{id}")
	public SinhVien findById(@PathVariable long id) {
		return sinhVienSevice.findById(id);
	}
	@PutMapping(value="sinhvien/{id}")
	public void updateSinhVien(@RequestBody SinhVien sinhVien,@PathVariable long id){
		sinhVien.setId(id);
		sinhVienSevice.saveSinhVien(sinhVien);
	}
}
