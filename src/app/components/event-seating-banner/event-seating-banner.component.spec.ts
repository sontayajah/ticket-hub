import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSeatingBannerComponent } from './event-seating-banner.component';

describe('EventSeatingBannerComponent', () => {
  let component: EventSeatingBannerComponent;
  let fixture: ComponentFixture<EventSeatingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSeatingBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSeatingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
