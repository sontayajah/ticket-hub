import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingSeatComponent } from './event-booking-seat.component';

describe('EventBookingSeatComponent', () => {
  let component: EventBookingSeatComponent;
  let fixture: ComponentFixture<EventBookingSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBookingSeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBookingSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
