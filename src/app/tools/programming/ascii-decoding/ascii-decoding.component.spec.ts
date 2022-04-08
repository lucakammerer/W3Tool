import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiDecodingComponent } from './ascii-decoding.component';

describe('AsciiDecodingComponent', () => {
  let component: AsciiDecodingComponent;
  let fixture: ComponentFixture<AsciiDecodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsciiDecodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiDecodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
