import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PescatarianComponent } from './pescatarian.component';

describe('PescatarianComponent', () => {
  let component: PescatarianComponent;
  let fixture: ComponentFixture<PescatarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PescatarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PescatarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
