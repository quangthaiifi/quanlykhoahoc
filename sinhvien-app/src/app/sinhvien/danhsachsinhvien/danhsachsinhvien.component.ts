import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {SinhvienService} from '../../service/sinhvien.service';
import { Sinhvien } from '../../model/sinhvien';
import { Router } from '@angular/router';
@Component({
  selector: 'app-danhsachsinhvien',
  templateUrl: './danhsachsinhvien.component.html',
  styleUrls: ['./danhsachsinhvien.component.css']
})
export class DanhsachsinhvienComponent implements OnInit {
  sinhViens : Observable <Sinhvien[]>;
  idMoHoc:number;
  constructor( private sinhVienSevice:SinhvienService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
    
  }
  deleteSinhViens() {
    this.sinhVienSevice.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
  reloadData() {
    this.sinhViens = this.sinhVienSevice.getAllSinhVieinList();
    
  }
  deleteSinhVien(id:number){
    this.sinhVienSevice.deleteSinhVien(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  editSinhVien(id:number){
    this.router.navigate(["editsinhvien",id]);
  }
  dangkymonhoc(id:number){
    this.router.navigate(["dangkymonhoc",id])
  }
  formcreate(){
    this.router.navigate(["addsinhvien"]);
  }
}
