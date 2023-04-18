import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricDeliveryComponent } from './fabric-delivery.component';

describe('FabricDeliveryComponent', () => {
  let component: FabricDeliveryComponent;
  let fixture: ComponentFixture<FabricDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
