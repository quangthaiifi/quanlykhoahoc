import { Component, OnInit,Input } from '@angular/core';
import { SinhvienService } from '../../service/sinhvien.service';
import { Sinhvien } from '../../model/sinhvien';
import { DanhsachmonhocComponent } from '../../monhoc/danhsachmonhoc/danhsachmonhoc.component';
import { DanhsachsinhvienComponent } from '../danhsachsinhvien/danhsachsinhvien.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-thongtinhsinhvien',
  templateUrl: './thongtinhsinhvien.component.html',
  styleUrls: ['./thongtinhsinhvien.component.css']
})
export class ThongtinhsinhvienComponent implements OnInit {
 @Input() sinhVien : Sinhvien;
  constructor(private sinhVienServicer: SinhvienService, private danhSachSinhVien:DanhsachsinhvienComponent,private router: Router) { }

  ngOnInit() {
    console.log(this.sinhVien);
    
  }
  deleteMonHoc() {
    this.sinhVienServicer.deleteSinhVien(this.sinhVien.id)
      .subscribe(
        data => {
          console.log(data);
          this.danhSachSinhVien.reloadData();
        },
        error => console.log(error));
  }
  editMonHoc(){

    
  }
  dangkymonhoc(){
    this.router.navigate(['dangkymonhoc',this.sinhVien.id])
    
  }
}
