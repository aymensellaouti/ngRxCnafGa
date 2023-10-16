import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSliderComponent } from './test-slider.component';

describe('TestSliderComponent', () => {
  let component: TestSliderComponent;
  let fixture: ComponentFixture<TestSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestSliderComponent]
    });
    fixture = TestBed.createComponent(TestSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
