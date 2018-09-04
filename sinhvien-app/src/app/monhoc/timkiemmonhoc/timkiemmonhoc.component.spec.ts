import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimkiemmonhocComponent } from './timkiemmonhoc.component';

describe('TimkiemmonhocComponent', () => {
  let component: TimkiemmonhocComponent;
  let fixture: ComponentFixture<TimkiemmonhocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimkiemmonhocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimkiemmonhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
