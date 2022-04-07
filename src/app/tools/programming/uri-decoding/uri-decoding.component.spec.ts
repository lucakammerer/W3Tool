import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UriDecodingComponent } from './uri-decoding.component';

describe('UriDecodingComponent', () => {
  let component: UriDecodingComponent;
  let fixture: ComponentFixture<UriDecodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UriDecodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UriDecodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
