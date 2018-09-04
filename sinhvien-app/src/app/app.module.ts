import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ThongtinmonhocComponent } from './monhoc/thongtinmonhoc/thongtinmonhoc.component';
import { DanhsachmonhocComponent } from './monhoc/danhsachmonhoc/danhsachmonhoc.component';
import { TaomoimonhocComponent } from './monhoc/taomoimonhoc/taomoimonhoc.component';
import { TimkiemmonhocComponent } from './monhoc/timkiemmonhoc/timkiemmonhoc.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TaomoisinhvienComponent } from './sinhvien/taomoisinhvien/taomoisinhvien.component'
import { DanhsachsinhvienComponent } from './sinhvien/danhsachsinhvien/danhsachsinhvien.component';
import { ThongtinhsinhvienComponent } from './sinhvien/thongtinhsinhvien/thongtinhsinhvien.component';
import { TimkiemsinhvienComponent } from './sinhvien/timkiemsinhvien/timkiemsinhvien.component';
import { DangnymonhocComponent } from './sinhvien/dangnymonhoc/dangnymonhoc.component';
import { SinhvienComponent } from './sinhvien/sinhvien/sinhvien.component';
@NgModule({
  declarations: [
    AppComponent,
    ThongtinmonhocComponent,
    DanhsachmonhocComponent,
    TaomoimonhocComponent,
    TimkiemmonhocComponent,
    TaomoisinhvienComponent,
    DanhsachsinhvienComponent,
    ThongtinhsinhvienComponent,
    TimkiemsinhvienComponent,
    DangnymonhocComponent,
    SinhvienComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
