import { Component, OnInit } from '@angular/core';
import { SinhvienService } from '../../service/sinhvien.service';
import { Sinhvien } from '../../model/sinhvien';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timkiemsinhvien',
  templateUrl: './timkiemsinhvien.component.html',
  styleUrls: ['./timkiemsinhvien.component.css']
})
export class TimkiemsinhvienComponent implements OnInit {
  id:number;
  sinhVien:Sinhvien
  constructor(private sinhvienService:SinhvienService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.id=0;
    this.searchSinhVien();
    
  }
  public searchSinhVien() {
    this.sinhvienService.getSinhVienById(this.id)
      .subscribe(sinhVien => this.sinhVien = sinhVien);
      console.log(this.sinhVien);
      
  }
  onSubmit() {
    this.searchSinhVien();
  }

}
