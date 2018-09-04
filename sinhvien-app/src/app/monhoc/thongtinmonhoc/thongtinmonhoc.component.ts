import { Component, OnInit, Input } from '@angular/core';
import { MonhocService } from '../../service/monhoc.service';
import { Monhoc } from '../../model/monhoc';
import { Router } from '@angular/router';


import { DanhsachmonhocComponent } from '../danhsachmonhoc/danhsachmonhoc.component';
@Component({
  selector: 'app-thongtinmonhoc',
  templateUrl: './thongtinmonhoc.component.html',
  styleUrls: ['./thongtinmonhoc.component.css']
})
export class ThongtinmonhocComponent implements OnInit {
  
  @Input() monHoc: Monhoc;
  constructor(private monHocService:MonhocService,private danhSachMonHoc:DanhsachmonhocComponent,private router : Router) { }
  
  ngOnInit() {
    console.log(this.monHoc );
    
  }
 deleteMonHoc() {
    
    this.monHocService.deleteMonHoc(this.monHoc.id)
      .subscribe(
        data => {
          console.log(data);
          this.danhSachMonHoc.reloadData();
        },
        error => console.log(error));
  }
editMonHoc(){
  
  this.router.navigate(['/edit',this.monHoc.id])
 
  
}
    
    
}
