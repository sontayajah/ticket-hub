import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingSelectionComponent } from './event-booking-selection.component';

describe('EventBookingSelectionComponent', () => {
  let component: EventBookingSelectionComponent;
  let fixture: ComponentFixture<EventBookingSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBookingSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBookingSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
