import { Component } from "@angular/core";
import { Cv } from "../model/cv";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { Observable, catchError, map, of, retry, shareReplay } from "rxjs";
@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  cvs$: Observable<Cv[]>;
  juniors$: Observable<Cv[]>;
  seniors$: Observable<Cv[]>;
  nbClick = 0;
  date = new Date();
  constructor(
    /* private toastr: ToastrService, */ private cvService: CvService
  ) {
    /* this.cvService.selectCv$.subscribe(() => this.nbClick++); */
    this.cvs$ = this.cvService.getCvs().pipe(
      retry({
        count: 4,
        delay: 1500,
      }),
      catchError((e) => {
        /*  this.toastr.error(`
            Attention!! Les données sont fictives, problème avec le serveur.
            Veuillez contacter l'admin.`); */
        return of(this.cvService.getFakeCvs());
      }),
      shareReplay()
    );
    this.juniors$ = this.cvs$.pipe(
      map((cvs) => cvs.filter((cv) => cv.age < 40))
    );
    this.seniors$ = this.cvs$.pipe(
      map((cvs) => cvs.filter((cv) => cv.age >= 40))
    );
  }
}
