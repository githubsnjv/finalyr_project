import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnDeliveryComponent } from './yarn-delivery.component';

describe('YarnDeliveryComponent', () => {
  let component: YarnDeliveryComponent;
  let fixture: ComponentFixture<YarnDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YarnDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YarnDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
