import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingBannerComponent } from './event-booking-banner.component';

describe('EventBookingBannerComponent', () => {
  let component: EventBookingBannerComponent;
  let fixture: ComponentFixture<EventBookingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBookingBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBookingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
