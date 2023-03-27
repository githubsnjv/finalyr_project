import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAllotmentComponent } from './job-allotment.component';

describe('JobAllotmentComponent', () => {
  let component: JobAllotmentComponent;
  let fixture: ComponentFixture<JobAllotmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAllotmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAllotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
