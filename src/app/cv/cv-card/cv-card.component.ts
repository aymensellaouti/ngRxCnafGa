import { Component, Input } from "@angular/core";
import { Cv } from "../model/cv";
import { EmbaucheService } from "../services/embauche.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-cv-card",
  templateUrl: "./cv-card.component.html",
  styleUrls: ["./cv-card.component.css"],
})
export class CvCardComponent {
  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.cv$ = this.cvService.selectCv$;
  }
  cv$: Observable<Cv>;
  /* @Input() cv: Cv | null = null; */
  embaucher(cv: Cv) {
    if (cv) {
      if (this.embaucheService.embauche(cv)) {
        this.toastr.success(`${cv?.firstname} ${cv.name} a été pré embauché`);
      } else {
        this.toastr.warning(`${cv.firstname} ${cv.name} est déjà pré embauché`);
      }
    }
  }
}
