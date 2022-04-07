import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencyConvertComponent } from './cryptocurrency-convert.component';

describe('CryptocurrencyConvertComponent', () => {
  let component: CryptocurrencyConvertComponent;
  let fixture: ComponentFixture<CryptocurrencyConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptocurrencyConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrencyConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
