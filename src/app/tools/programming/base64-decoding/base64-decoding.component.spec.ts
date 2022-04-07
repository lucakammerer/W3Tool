import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64DecodingComponent } from './base64-decoding.component';

describe('Base64DecodingComponent', () => {
  let component: Base64DecodingComponent;
  let fixture: ComponentFixture<Base64DecodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Base64DecodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64DecodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
