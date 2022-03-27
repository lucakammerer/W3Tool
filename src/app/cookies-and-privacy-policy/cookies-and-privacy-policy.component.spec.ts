import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesAndPrivacyPolicyComponent } from './cookies-and-privacy-policy.component';

describe('CookiesAndPrivacyPolicyComponent', () => {
  let component: CookiesAndPrivacyPolicyComponent;
  let fixture: ComponentFixture<CookiesAndPrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookiesAndPrivacyPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesAndPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
