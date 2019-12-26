import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LactoseComponent } from './lactose.component';

describe('LactoseComponent', () => {
  let component: LactoseComponent;
  let fixture: ComponentFixture<LactoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LactoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LactoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
