import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaomoimonhocComponent } from './taomoimonhoc.component';

describe('TaomoimonhocComponent', () => {
  let component: TaomoimonhocComponent;
  let fixture: ComponentFixture<TaomoimonhocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaomoimonhocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaomoimonhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
