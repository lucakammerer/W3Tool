import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiEncodingComponent } from './ascii-encoding.component';

describe('AsciiEncodingComponent', () => {
  let component: AsciiEncodingComponent;
  let fixture: ComponentFixture<AsciiEncodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsciiEncodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
