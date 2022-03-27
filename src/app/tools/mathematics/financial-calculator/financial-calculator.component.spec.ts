import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialCalculatorComponent } from './financial-calculator.component';

describe('FinancialCalculatorComponent', () => {
  let component: FinancialCalculatorComponent;
  let fixture: ComponentFixture<FinancialCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
