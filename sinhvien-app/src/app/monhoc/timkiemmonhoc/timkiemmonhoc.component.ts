import { Component, OnInit } from '@angular/core';
import { MonhocService } from '../../service/monhoc.service';
import { Monhoc } from '../../model/monhoc';
@Component({
  selector: 'app-timkiemmonhoc',
  templateUrl: './timkiemmonhoc.component.html',
  styleUrls: ['./timkiemmonhoc.component.css']
})
export class TimkiemmonhocComponent implements OnInit {
  id : number;
  monHoc : Monhoc;
  submitted = false;
  ngOnInit() {
    this.id = 0; 
    
  }
  constructor(private monHocService : MonhocService) { }
  public searchMonHoc() {
    this.monHocService.getMonHocById(this.id)
      .subscribe(monHoc => this.monHoc = monHoc);
      console.log(this.monHoc);
      
  }
  onSubmit() {

    this.submitted = true;
       this.searchMonHoc();
  }
  
}
