import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageConvertComponent } from './storage-convert.component';

describe('StorageConvertComponent', () => {
  let component: StorageConvertComponent;
  let fixture: ComponentFixture<StorageConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
