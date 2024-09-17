import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSeatingZonesComponent } from './event-seating-zones.component';

describe('EventSeatingZonesComponent', () => {
  let component: EventSeatingZonesComponent;
  let fixture: ComponentFixture<EventSeatingZonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSeatingZonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSeatingZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
