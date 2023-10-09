import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalArrayComponent } from './additional-array.component';

describe('AdditionalArrayComponent', () => {
  let component: AdditionalArrayComponent;
  let fixture: ComponentFixture<AdditionalArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdditionalArrayComponent]
    });
    fixture = TestBed.createComponent(AdditionalArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
