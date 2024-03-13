import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailHomeComponent } from './player-detail-home.component';

describe('PlayerDetailHomeComponent', () => {
  let component: PlayerDetailHomeComponent;
  let fixture: ComponentFixture<PlayerDetailHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerDetailHomeComponent]
    });
    fixture = TestBed.createComponent(PlayerDetailHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
