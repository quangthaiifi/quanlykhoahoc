package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.MonHoc;
import com.example.demo.sevice.MonHocSevice;

@Controller
public class MonHocController {
	
	@Autowired
	MonHocSevice monHocSevice;
	@ResponseBody
	@GetMapping(value="/monhocs")
	public List<MonHoc> getAll(){
		return monHocSevice.getAll();
	}
	
	@ResponseBody
	@GetMapping(value="/monhoc/{id}")
	public MonHoc findById(@PathVariable long id) {
		return monHocSevice.findById(id);
	}
	@PostMapping(value="monhoc")
	public void createMonHoc(@RequestBody MonHoc monHoc) {
		monHocSevice.saveMonHoc(monHoc);
	}
	@PutMapping(value="monhoc/{id}")
	public void updateMonHoc(@RequestBody MonHoc monHoc, @PathVariable long id) {
		monHoc.setId(id);
		monHocSevice.saveMonHoc(monHoc);
	}
	@DeleteMapping(value="monhoc/{id}")
	public void deleteMonHoc(@PathVariable long id) {
		monHocSevice.deleteMonHoc(id);
	}
	
}
