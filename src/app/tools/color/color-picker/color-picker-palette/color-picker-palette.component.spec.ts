import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerPaletteComponent } from './color-picker-palette.component';

describe('ColorPickerPaletteComponent', () => {
  let component: ColorPickerPaletteComponent;
  let fixture: ComponentFixture<ColorPickerPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerPaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
