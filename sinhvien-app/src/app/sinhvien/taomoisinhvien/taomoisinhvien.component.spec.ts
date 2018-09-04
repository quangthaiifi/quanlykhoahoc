import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaomoisinhvienComponent } from './taomoisinhvien.component';

describe('TaomoisinhvienComponent', () => {
  let component: TaomoisinhvienComponent;
  let fixture: ComponentFixture<TaomoisinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaomoisinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaomoisinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
