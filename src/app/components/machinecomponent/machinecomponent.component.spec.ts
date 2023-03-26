import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinecomponentComponent } from './machinecomponent.component';

describe('MachinecomponentComponent', () => {
  let component: MachinecomponentComponent;
  let fixture: ComponentFixture<MachinecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachinecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
