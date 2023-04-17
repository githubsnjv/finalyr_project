import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCComponent } from './dc.component';

describe('DCComponent', () => {
  let component: DCComponent;
  let fixture: ComponentFixture<DCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
