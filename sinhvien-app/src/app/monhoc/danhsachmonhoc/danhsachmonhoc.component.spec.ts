import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachmonhocComponent } from './danhsachmonhoc.component';

describe('DanhsachmonhocComponent', () => {
  let component: DanhsachmonhocComponent;
  let fixture: ComponentFixture<DanhsachmonhocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachmonhocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachmonhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
