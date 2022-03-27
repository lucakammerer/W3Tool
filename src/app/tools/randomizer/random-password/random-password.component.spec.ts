import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPasswordComponent } from './random-password.component';

describe('RandomPasswordComponent', () => {
  let component: RandomPasswordComponent;
  let fixture: ComponentFixture<RandomPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
