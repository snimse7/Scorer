import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDescriptionComponent } from './match-description.component';

describe('MatchDescriptionComponent', () => {
  let component: MatchDescriptionComponent;
  let fixture: ComponentFixture<MatchDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchDescriptionComponent]
    });
    fixture = TestBed.createComponent(MatchDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
