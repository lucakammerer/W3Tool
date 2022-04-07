import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64EncodingComponent } from './base64-encoding.component';

describe('Base64EncodingComponent', () => {
  let component: Base64EncodingComponent;
  let fixture: ComponentFixture<Base64EncodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Base64EncodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64EncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
