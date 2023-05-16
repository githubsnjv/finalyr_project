import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricdeliveryComponent } from './fabricdelivery.component';

describe('FabricdeliveryComponent', () => {
  let component: FabricdeliveryComponent;
  let fixture: ComponentFixture<FabricdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricdeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
