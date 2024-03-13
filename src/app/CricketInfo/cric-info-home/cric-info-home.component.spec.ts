import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricInfoHomeComponent } from './cric-info-home.component';

describe('CricInfoHomeComponent', () => {
  let component: CricInfoHomeComponent;
  let fixture: ComponentFixture<CricInfoHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CricInfoHomeComponent]
    });
    fixture = TestBed.createComponent(CricInfoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
