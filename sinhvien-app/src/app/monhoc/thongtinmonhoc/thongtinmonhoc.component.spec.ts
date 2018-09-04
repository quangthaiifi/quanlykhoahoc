import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinmonhocComponent } from './thongtinmonhoc.component';

describe('ThongtinmonhocComponent', () => {
  let component: ThongtinmonhocComponent;
  let fixture: ComponentFixture<ThongtinmonhocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinmonhocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinmonhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
