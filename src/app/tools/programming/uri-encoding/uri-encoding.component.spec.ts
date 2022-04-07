import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UriEncodingComponent } from './uri-encoding.component';

describe('UriEncodingComponent', () => {
  let component: UriEncodingComponent;
  let fixture: ComponentFixture<UriEncodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UriEncodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UriEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
