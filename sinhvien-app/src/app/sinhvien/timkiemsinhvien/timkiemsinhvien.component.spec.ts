import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimkiemsinhvienComponent } from './timkiemsinhvien.component';

describe('TimkiemsinhvienComponent', () => {
  let component: TimkiemsinhvienComponent;
  let fixture: ComponentFixture<TimkiemsinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimkiemsinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimkiemsinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
