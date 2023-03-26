import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportReportComponent } from './report-report.component';

describe('ReportReportComponent', () => {
  let component: ReportReportComponent;
  let fixture: ComponentFixture<ReportReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
