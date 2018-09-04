import { Component, OnInit } from '@angular/core';
import { SinhvienService } from '../../service/sinhvien.service';
import { Sinhvien } from '../../model/sinhvien';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-taomoisinhvien',
  templateUrl: './taomoisinhvien.component.html',
  styleUrls: ['./taomoisinhvien.component.css']
})
export class TaomoisinhvienComponent implements OnInit {

  constructor(private sinhVienServicer:SinhvienService,private routing:ActivatedRoute) { }
  
  sinhVien:Sinhvien = new Sinhvien();
  submited = false;
  idSinhVien:number;
  newSinhVien(){
    this.submited = false;
    this.sinhVien = new Sinhvien();
  }
  save() {
    this.sinhVienServicer.createSinHVien(this.sinhVien)
      .subscribe(data => console.log(data), error => console.log(error));
    this.sinhVien = new Sinhvien();
  }
  update() {
    this.sinhVienServicer.updateSinhVien(this.idSinhVien,this.sinhVien)
      .subscribe(data => console.log(data), error => console.log(error));
    this.sinhVien = new Sinhvien();
  }
  ngOnInit() {
    this.idSinhVien =parseInt(this.routing.snapshot.paramMap.get("id"));
    this.getSinhvien();

  }
  onSubmit() {
    this.submited = true;
    this.save();
  }
  getSinhvien(){
    this.sinhVienServicer.getSinhVienById(this.idSinhVien)
    .subscribe(sinhVien => this.sinhVien = sinhVien);
    console.log(this.sinhVien);
  }
}
