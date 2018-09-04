package com.example.demo.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="sinhvien")
public class SinhVien {
	
	@Id
	@GeneratedValue
	@Column(name="id")
	private Long id;
	
	@Column(name="tensv")
	private String tenSV;
	
	@Column(name="gioitinh")
	private String gioiTinh;
	
	@Column(name="quequan")
	private String queQuan;
	
	@Column(name="ngaysinh")
	private String ngaySinh;
	
	@Column(name="lop")
	private String lop;
	
	@ManyToMany
	@JoinTable(name = "dangky",
    joinColumns = @JoinColumn(name = "idsinhvien"),
    inverseJoinColumns = @JoinColumn(name = "idmonhoc"))
	private Set<MonHoc> monHocs;

	public SinhVien() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SinhVien(Long id, String tenSV, String gioiTinh, String queQuan, String ngaySinh, String lop,
			Set<MonHoc> monHocs) {
		super();
		this.id = id;
		this.tenSV = tenSV;
		this.gioiTinh = gioiTinh;
		this.queQuan = queQuan;
		this.ngaySinh = ngaySinh;
		this.lop = lop;
		this.monHocs = monHocs;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTenSV() {
		return tenSV;
	}

	public void setTenSV(String tenSV) {
		this.tenSV = tenSV;
	}

	public String getGioiTinh() {
		return this.gioiTinh;
	}

	public void setGioiTinh(String gioiTinh) {
		this.gioiTinh = gioiTinh;
	}

	public String getQueQuan() {
		return queQuan;
	}

	public void setQueQuan(String queQuan) {
		this.queQuan = queQuan;
	}

	public String getNgaySinh() {
		return ngaySinh;
	}

	public void setNgaySinh(String ngaySinh) {
		this.ngaySinh = ngaySinh;
	}

	public String getLop() {
		return lop;
	}

	public void setLop(String lop) {
		this.lop = lop;
	}

	public Set<MonHoc> getMonHocs() {
		return monHocs;
	}

	public void setMonHocs(Set<MonHoc> monHocs) {
		this.monHocs = monHocs;
	}

	@Override
	public String toString() {
		return "SinhVien [id=" + id + ", tenSV=" + tenSV + ", gioiTinh=" + gioiTinh + ", queQuan=" + queQuan
				+ ", ngaySinh=" + ngaySinh + ", lop=" + lop + ", monHocs=" + monHocs + "]";
	}

	
}
