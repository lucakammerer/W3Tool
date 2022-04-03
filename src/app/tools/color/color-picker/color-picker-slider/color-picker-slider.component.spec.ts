import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerSliderComponent } from './color-picker-slider.component';

describe('ColorPickerSliderComponent', () => {
  let component: ColorPickerSliderComponent;
  let fixture: ComponentFixture<ColorPickerSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
