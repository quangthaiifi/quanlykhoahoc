import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Monhoc } from '../model/monhoc';

@Injectable({
  providedIn: 'root'
})
export class MonhocService {
  private baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }
  getMonHoc(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}` + `/monhoc/` + `${id}`);
  }
 
  createMonHoc(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/monhoc/create`, customer);
  }
 
  updateMonHoc(id: number, value: any): Observable<Object> {
    console.log("Đang sửa môn hoc");
    
    return this.http.put(`${this.baseUrl}`+`/monhoc/`+`${id}`, value);
  }
 
  deleteMonHoc(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}`+`/monhoc/delete/`+`${id}`, { responseType: 'text' });
  }
 
  getAllMonHocList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/monhocs`);
  }
 
  getMonHocById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/monhoc/` + `${id}`);
  }
 
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/monhoc/delete`, { responseType: 'text' });
  }
}

