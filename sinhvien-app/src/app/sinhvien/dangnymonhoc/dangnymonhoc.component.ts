import { Component, OnInit } from '@angular/core';
import { SinhvienService } from '../../service/sinhvien.service';
import { Sinhvien } from '../../model/sinhvien';
import { ActivatedRoute, Router } from '@angular/router';
import { Monhoc } from '../../model/monhoc';
import { MonhocService } from '../../service/monhoc.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dangnymonhoc',
  templateUrl: './dangnymonhoc.component.html',
  styleUrls: ['./dangnymonhoc.component.css']
})
export class DangnymonhocComponent implements OnInit {
  idSinhVien: number;
  idMonHoc:number;
  sinhVien:Sinhvien = new Sinhvien();
  monHoc:Monhoc = new Monhoc();
  monHocs:Observable <Monhoc[]>
  constructor(private sinhvienService:SinhvienService,private router : ActivatedRoute,private monhocService:MonhocService, private route:Router) { }

  ngOnInit() {
    this.monHocs = this.monhocService.getAllMonHocList();
    this.idSinhVien= parseInt(this.router.snapshot.paramMap.get("id"));
    
    this.searchSinhVien()
  }
  searchSinhVien(){
    this.sinhvienService.getSinhVienById(this.idSinhVien)
      .subscribe(sinhVien => this.sinhVien = sinhVien);
      console.log("sinh vien:"+this.sinhVien);
      
  }
  
  onSubmit(){
    
    console.log(this.monHoc);
    
    this.sinhvienService.updateDangky(this.sinhVien.id,this.monHoc)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.route.navigate(["dangkymonhoc",this.sinhVien.id]);
  }
  deleteDangkyMonHoc(sinhVien:Sinhvien,monHoc:Monhoc){
        this.sinhvienService.deleteDangkyMonHoc(this.sinhVien.id,this.monHoc)
        .subscribe(data=>console.log(data),error=>console.log(error));
    this.route.navigate(["dangkymonhoc",this.sinhVien.id]);
        
    
  }
}
