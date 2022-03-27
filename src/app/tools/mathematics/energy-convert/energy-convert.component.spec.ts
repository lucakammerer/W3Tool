import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyConvertComponent } from './energy-convert.component';

describe('EnergyConvertComponent', () => {
  let component: EnergyConvertComponent;
  let fixture: ComponentFixture<EnergyConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
