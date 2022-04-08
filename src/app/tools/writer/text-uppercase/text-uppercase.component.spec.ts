import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextUppercaseComponent } from './text-uppercase.component';

describe('TextUppercaseComponent', () => {
  let component: TextUppercaseComponent;
  let fixture: ComponentFixture<TextUppercaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextUppercaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextUppercaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
