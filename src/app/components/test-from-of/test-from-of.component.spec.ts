import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFromOfComponent } from './test-from-of.component';

describe('TestFromOfComponent', () => {
  let component: TestFromOfComponent;
  let fixture: ComponentFixture<TestFromOfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestFromOfComponent]
    });
    fixture = TestBed.createComponent(TestFromOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
