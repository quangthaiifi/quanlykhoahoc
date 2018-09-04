import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinhsinhvienComponent } from './thongtinhsinhvien.component';

describe('ThongtinhsinhvienComponent', () => {
  let component: ThongtinhsinhvienComponent;
  let fixture: ComponentFixture<ThongtinhsinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinhsinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinhsinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
