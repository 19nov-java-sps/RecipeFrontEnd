import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaribbeanComponent } from './caribbean.component';

describe('CaribbeanComponent', () => {
  let component: CaribbeanComponent;
  let fixture: ComponentFixture<CaribbeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaribbeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaribbeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
