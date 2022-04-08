import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLowercaseComponent } from './text-lowercase.component';

describe('TextLowercaseComponent', () => {
  let component: TextLowercaseComponent;
  let fixture: ComponentFixture<TextLowercaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextLowercaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLowercaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
