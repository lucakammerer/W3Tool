import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InflationCalculatorComponent } from './inflation-calculator.component';

describe('InflationCalculatorComponent', () => {
  let component: InflationCalculatorComponent;
  let fixture: ComponentFixture<InflationCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InflationCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InflationCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
