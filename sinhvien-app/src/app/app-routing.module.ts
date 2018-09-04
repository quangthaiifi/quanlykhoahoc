import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {DanhsachmonhocComponent } from './monhoc/danhsachmonhoc/danhsachmonhoc.component'
import { TaomoimonhocComponent } from './monhoc/taomoimonhoc/taomoimonhoc.component';
import { TimkiemmonhocComponent } from './monhoc/timkiemmonhoc/timkiemmonhoc.component';
import { DanhsachsinhvienComponent } from './sinhvien/danhsachsinhvien/danhsachsinhvien.component';
import { TaomoisinhvienComponent } from './sinhvien/taomoisinhvien/taomoisinhvien.component';
import { TimkiemsinhvienComponent } from './sinhvien/timkiemsinhvien/timkiemsinhvien.component';
import { DangnymonhocComponent } from './sinhvien/dangnymonhoc/dangnymonhoc.component';
import { SinhvienComponent } from './sinhvien/sinhvien/sinhvien.component';
const routes: Routes = [
    { path: '', redirectTo: 'monhocs', pathMatch: 'full' },
    { path: 'monhocs', component: DanhsachmonhocComponent },
    { path: 'add', component: TaomoimonhocComponent },
    { path: 'edit/:id', component: TaomoimonhocComponent },
    { path: 'findbyid', component: TimkiemmonhocComponent },
    {path:'sinhviens',component:DanhsachsinhvienComponent},
    {path:'addsinhvien',component:TaomoisinhvienComponent},
    {path:'findbyidsv',component:TimkiemsinhvienComponent},
    {path:'dangkymonhoc/:id',component:DangnymonhocComponent},
    { path: 'editsinhvien/:id', component: TaomoisinhvienComponent },
    { path: 'sinhvien',component:SinhvienComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
