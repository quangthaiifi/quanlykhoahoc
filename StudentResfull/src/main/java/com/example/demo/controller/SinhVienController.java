package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.MonHoc;
import com.example.demo.model.SinhVien;
import com.example.demo.sevice.SinhVienSevice;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value="/api/")
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
	@PostMapping(value="/sinhvien/create")
	public void createSinhVien(@RequestBody SinhVien sinhVien) {
		System.out.println("Day la them sinh vien");
		System.out.println(sinhVien);
		sinhVienSevice.saveSinhVien(sinhVien);;
	}
	@PutMapping(value="/sinhvien/{id}")
	public void updateSinhVien(@RequestBody SinhVien sinhVien,@PathVariable Long id)
	{
		sinhVien.setId(id);
		
		sinhVienSevice.saveSinhVien(sinhVien);
	}
	@ResponseBody
	@GetMapping(value="/sinhvien/{id}")
	public SinhVien findById(@PathVariable long id) {
		return sinhVienSevice.findById(id);
	}
	@DeleteMapping(value="/sinhvien/delete/{id}")
	public ResponseEntity<String> deleteMonHoc(@PathVariable long id) {
		System.out.println("Delete All Customers...");
		sinhVienSevice.deleteSinhVien(id);
		return new ResponseEntity<>("All customers have been deleted!", HttpStatus.OK);
	}
	@PutMapping(value="sinhvien/dangky/{id}")
	public ResponseEntity<String> dangKyMonHoc(@PathVariable long id,@RequestBody MonHoc monHoc){
		System.out.println("dang ky mon hoc");
		sinhVienSevice.dangKyMonHoc(id, monHoc);
		return new ResponseEntity<>("Dang ky mo hoc thanh cong", HttpStatus.OK);
		
	}
	@PutMapping(value="sinhvien/xoadangky/{id}")
	public ResponseEntity<String> xdangKyMonHoc(@PathVariable long id,@RequestBody MonHoc monHoc){
		System.out.println("Xoa dang ky ky mon hoc");
		sinhVienSevice.deleteMonHocDangKy(id, monHoc);
		return new ResponseEntity<>("Xóa thành công mo hoc thanh cong", HttpStatus.OK);
		
	}
	
	
}
