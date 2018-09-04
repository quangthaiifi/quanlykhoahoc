import { Component, OnInit } from '@angular/core';
import { MonhocService } from '../../service/monhoc.service';
import { Monhoc }from '../../model/monhoc'
import { RouterLinkActive, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { error } from 'util';
import { TimkiemmonhocComponent } from '../timkiemmonhoc/timkiemmonhoc.component';
@Component({
  selector: 'app-taomoimonhoc',
  templateUrl: './taomoimonhoc.component.html',
  styleUrls: ['./taomoimonhoc.component.css']
})
export class TaomoimonhocComponent implements OnInit {

  constructor(private monHocService : MonhocService, private router:ActivatedRoute,private route:Router) { }
  monHoc : Monhoc = new Monhoc();
  submited = false;
  timKiemMonHocComponent: TimkiemmonhocComponent;
  ngOnInit() {
    this.monHoc.id=  parseInt(this.router.snapshot.paramMap.get('id'));
   // this.timKiemMonHocComponent.searchMonHoc();
    this.searchMonHoc();

  }
  newMonHoc(): void {
    this.submited = false;
    this.monHoc = new Monhoc();
  }
  save() {
    this.monHocService.createMonHoc(this.monHoc)
      .subscribe(data => console.log(data), error => console.log(error));
    this.monHoc = new Monhoc();
  }
  update(){
    console.log(this.monHoc);
    
    this.monHocService.updateMonHoc(this.monHoc.id,this.monHoc)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.monHoc = new Monhoc();
  }
  onSubmit() {
    this.submited = true;
    if(isNaN(this.monHoc.id)){
    this.save();
    }else
    {this.update();}
    this.route.navigate(['monhocs']);
  }
  private searchMonHoc() {
    this.monHocService.getMonHocById(this.monHoc.id)
      .subscribe(monHoc => this.monHoc = monHoc);
      console.log(this.monHoc);
      
  }

}
