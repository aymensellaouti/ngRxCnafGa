import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, filter, map, take } from "rxjs";

@Component({
  selector: "app-test-observable",
  templateUrl: "./test-observable.component.html",
  styleUrls: ["./test-observable.component.css"],
})
export class TestObservableComponent {
  monObservable: Observable<number>;

  constructor(private toaster: ToastrService) {
    this.monObservable = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    this.monObservable.subscribe({
      next: (val) => {
        console.log(val);
      },
    });
    this.monObservable
      /* 5 4 3 2 1 */
      .pipe(
        map((x) => x * 3),
        /* 15 12 9 6 3 */
        filter((x) => !(x % 2)),
        /* 12 6 */
        take(1)
      )
      .subscribe({
        next: (val) => {
          this.toaster.info("" + val);
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
          this.toaster.warning("C'est fini !!");
        },
      });
  }
}
