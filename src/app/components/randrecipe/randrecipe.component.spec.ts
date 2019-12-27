import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandrecipeComponent } from './randrecipe.component';

describe('RandrecipeComponent', () => {
  let component: RandrecipeComponent;
  let fixture: ComponentFixture<RandrecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandrecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
