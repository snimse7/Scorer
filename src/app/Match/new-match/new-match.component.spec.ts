import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMatchComponent } from './new-match.component';

describe('NewMatchComponent', () => {
  let component: NewMatchComponent;
  let fixture: ComponentFixture<NewMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMatchComponent]
    });
    fixture = TestBed.createComponent(NewMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
