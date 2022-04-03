import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeralConvertComponent } from './numeral-convert.component';

describe('NumerialConvertComponent', () => {
  let component: NumeralConvertComponent;
  let fixture: ComponentFixture<NumeralConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeralConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeralConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
