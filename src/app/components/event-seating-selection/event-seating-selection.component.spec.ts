import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSeatingSelectionComponent } from './event-seating-selection.component';

describe('EventSeatingSelectionComponent', () => {
  let component: EventSeatingSelectionComponent;
  let fixture: ComponentFixture<EventSeatingSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSeatingSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSeatingSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
