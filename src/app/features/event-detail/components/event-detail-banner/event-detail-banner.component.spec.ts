import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailBannerComponent } from './event-detail-banner.component';

describe('EventDetailBannerComponent', () => {
  let component: EventDetailBannerComponent;
  let fixture: ComponentFixture<EventDetailBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDetailBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetailBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
