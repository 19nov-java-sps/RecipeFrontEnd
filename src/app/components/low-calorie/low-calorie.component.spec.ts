import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowCalorieComponent } from './low-calorie.component';

describe('LowCalorieComponent', () => {
  let component: LowCalorieComponent;
  let fixture: ComponentFixture<LowCalorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowCalorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowCalorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
