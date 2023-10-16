import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CvComponent } from "./cv.component";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";

import { Spy, provideAutoSpy } from "jasmine-auto-spies";
import { SubscriberSpy, subscribeSpyTo } from "@hirez_io/observer-spy";
import { NO_ERRORS_SCHEMA } from "@angular/core";

fdescribe("CvComponent", () => {
  let component: CvComponent;
  let fixture: ComponentFixture<CvComponent>;
  let fakeCvs: Cv[] = [
    new Cv(1, "aymen", "sellaouti", "teacher", "as.jpg", "1234", 40),
    new Cv(2, "nidhal", "jelassi", "enfant", "       ", "1234", 41),
    new Cv(2, "skander", "sellaouti", "enfant", "       ", "1234", 4),
  ];
  let cvServiceSpy: Spy<CvService>;
  let cv$ObserverSpy: SubscriberSpy<Cv[]>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CvComponent],
      providers: [provideAutoSpy(CvService)],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    cvServiceSpy = TestBed.inject<any>(CvService);
    cvServiceSpy.getCvs.and.nextWith(fakeCvs);
    fixture = TestBed.createComponent(CvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cv$ObserverSpy = subscribeSpyTo(component.cvs$);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("get all Cvs", () => {
    expect(cv$ObserverSpy.getLastValue()).toBe(fakeCvs);
  });
  it("get juniors from cvs with age < 40", () => {
    const juinorsSpy = subscribeSpyTo(component.juniors$);
    expect(juinorsSpy.getLastValue()?.length).toBe(1);
  });
  it("get seniors from cvs with age >= 40", () => {
    const seniorsSpy = subscribeSpyTo(component.seniors$);
    expect(seniorsSpy.getLastValue()?.length).toBe(2);
  });
});
