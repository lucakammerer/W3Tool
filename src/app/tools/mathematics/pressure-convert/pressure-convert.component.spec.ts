import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureConvertComponent } from './pressure-convert.component';

describe('PressureConvertComponent', () => {
  let component: PressureConvertComponent;
  let fixture: ComponentFixture<PressureConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressureConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressureConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
