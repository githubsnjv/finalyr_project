import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YarndeliveryComponent } from './yarndelivery.component';

describe('YarndeliveryComponent', () => {
  let component: YarndeliveryComponent;
  let fixture: ComponentFixture<YarndeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YarndeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YarndeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
