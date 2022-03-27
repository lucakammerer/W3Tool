import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingCalculatorComponent } from './programming-calculator.component';

describe('ProgrammingCalculatorComponent', () => {
  let component: ProgrammingCalculatorComponent;
  let fixture: ComponentFixture<ProgrammingCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
