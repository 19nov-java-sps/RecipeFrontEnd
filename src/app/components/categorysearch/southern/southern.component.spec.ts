import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthernComponent } from './southern.component';

describe('SouthernComponent', () => {
  let component: SouthernComponent;
  let fixture: ComponentFixture<SouthernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
