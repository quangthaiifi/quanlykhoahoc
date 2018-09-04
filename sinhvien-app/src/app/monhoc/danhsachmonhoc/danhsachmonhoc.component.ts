import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MonhocService } from '../../service/monhoc.service';
import { Monhoc} from '../../model/monhoc'
import { Router } from '@angular/router';
@Component({
  selector: 'app-danhsachmonhoc',
  templateUrl: './danhsachmonhoc.component.html',
  styleUrls: ['./danhsachmonhoc.component.css']
})
export class DanhsachmonhocComponent implements OnInit {
  monHocs : Observable<Monhoc[]>;
  constructor( private monHocService : MonhocService,private router:Router) { }
  numRow:number =0;
  ngOnInit() {
    this.reloadData();
    
  }
  deleteMonHoc(id:number) {
    
    this.monHocService.deleteMonHoc(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  deleteMonHocs() {
    this.monHocService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
   }
  reloadData() {
   this.monHocs = this.monHocService.getAllMonHocList();
   
    
  }
  editMonHoc(id:number){
  
    this.router.navigate(['/edit',id])
   
    
  }
  formcreate(){
    this.router.navigate(["add"]);
  }

}
