import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeReduceScanComponent } from './merge-reduce-scan.component';

describe('MergeReduceScanComponent', () => {
  let component: MergeReduceScanComponent;
  let fixture: ComponentFixture<MergeReduceScanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MergeReduceScanComponent]
    });
    fixture = TestBed.createComponent(MergeReduceScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
