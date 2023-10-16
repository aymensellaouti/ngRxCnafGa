import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPureComponent } from './test-pure.component';

describe('TestPureComponent', () => {
  let component: TestPureComponent;
  let fixture: ComponentFixture<TestPureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestPureComponent]
    });
    fixture = TestBed.createComponent(TestPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
