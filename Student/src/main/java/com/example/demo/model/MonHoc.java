package com.example.demo.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="monhoc")
public class MonHoc {

	@Id
	@GeneratedValue
	@Column(name="id")
	private Long id;
	
	@Column(name="tenMH")
	private String tenMH;
	
	@Column(name="sotrinh")
	private int soTrinh;
	
	@ManyToMany(mappedBy="monHocs")
	private Set<SinhVien> sinhViens;
	public MonHoc() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MonHoc(Long id, String tenMH, int soTrinh, Set<SinhVien> sinhViens) {
		super();
		this.id = id;
		this.tenMH = tenMH;
		this.soTrinh = soTrinh;
		this.sinhViens = sinhViens;
	}
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTenMH() {
		return tenMH;
	}
	public void setTenMH(String tenMH) {
		this.tenMH = tenMH;
	}
	public int getSoTrinh() {
		return soTrinh;
	}
	public void setSoTrinh(int soTrinh) {
		this.soTrinh = soTrinh;
	}
	@Override
	public String toString() {
		return "MonHoc [id=" + id + ", tenMH=" + tenMH + ", soTrinh=" + soTrinh + ", sinhViens=" + sinhViens + "]";
	}

	
	
	
}
