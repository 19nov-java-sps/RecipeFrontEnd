import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByFoodGroupComponent } from './by-food-group.component';

describe('ByFoodGroupComponent', () => {
  let component: ByFoodGroupComponent;
  let fixture: ComponentFixture<ByFoodGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByFoodGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByFoodGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
