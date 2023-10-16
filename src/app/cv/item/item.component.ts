import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
  @Input() cv: Cv | null = null;
  @Input() size = 50;
  constructor(private cvService: CvService) {}
  /*   @Output() selectCv = new EventEmitter<Cv>(); */

  onSelectCv() {
    /*     if (this.cv) this.selectCv.emit(this.cv); */
    if (this.cv) this.cvService.selectCv(this.cv);
  }
}
