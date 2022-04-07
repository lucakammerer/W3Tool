import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureConvertComponent } from './temperature-convert.component';

describe('TemperatureConvertComponent', () => {
  let component: TemperatureConvertComponent;
  let fixture: ComponentFixture<TemperatureConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
