import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SinhvienService {

  private baseUrl = 'http://localhost:8080/api';
  
  constructor(private http: HttpClient,private router:Router) { }
  
  getSinhVien(id: number): Observable<any> {
    console.log(`++${this.baseUrl}` + `/sinhvien/` + `${id}`);
    
    return this.http.get(`${this.baseUrl}` + `/sinhvien/` + `${id}`);
  }
 
  createSinHVien(sinhvien: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/sinhvien/create`, sinhvien);
  }
 
  updateSinhVien(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}`+`/sinhvien/`+`${id}`, value);
  }
 
  deleteSinhVien(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}`+`/sinhvien/delete/`+`${id}`, { responseType: 'text' });
  }
 
  getAllSinhVieinList(): Observable<any> {
    console.log(`${this.baseUrl}`+`/sinhviens`);
    return this.http.get(`${this.baseUrl}`+`/sinhviens`);
  }
 
  getSinhVienById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/sinhvien/` + `${id}`);
  } 
  updateDangky(id: number, value: any): Observable<Object> {
    console.log(id+ "   "+value + "   " + `${this.baseUrl}`+`/sinhvien/dangky`);
    
    return this.http.put(`${this.baseUrl}`+`/sinhvien/dangky/`+`${id}`,value);
  }
 
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/sinhvien/delete`, { responseType: 'text' });
  }
  deleteDangkyMonHoc(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}`+`/sinhvien/xoadangky/`+`${id}`, value);
  }
}