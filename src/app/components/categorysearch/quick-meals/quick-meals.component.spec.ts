import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickMealsComponent } from './quick-meals.component';

describe('QuickMealsComponent', () => {
  let component: QuickMealsComponent;
  let fixture: ComponentFixture<QuickMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
