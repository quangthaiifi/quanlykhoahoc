import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangnymonhocComponent } from './dangnymonhoc.component';

describe('DangnymonhocComponent', () => {
  let component: DangnymonhocComponent;
  let fixture: ComponentFixture<DangnymonhocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangnymonhocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangnymonhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
