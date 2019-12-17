import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrfilterComponent } from './ingrfilter.component';

describe('IngrfilterComponent', () => {
  let component: IngrfilterComponent;
  let fixture: ComponentFixture<IngrfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngrfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngrfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
