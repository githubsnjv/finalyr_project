import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnInwardComponent } from './yarn-inward.component';

describe('YarnInwardComponent', () => {
  let component: YarnInwardComponent;
  let fixture: ComponentFixture<YarnInwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YarnInwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YarnInwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
