import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailScheduleComponent } from './event-detail-schedule.component';

describe('EventDetailScheduleComponent', () => {
  let component: EventDetailScheduleComponent;
  let fixture: ComponentFixture<EventDetailScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDetailScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetailScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
