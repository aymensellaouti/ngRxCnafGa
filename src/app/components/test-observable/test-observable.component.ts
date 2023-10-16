import { Component, OnDestroy } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, Subscription, filter, map, take } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
@Component({
  selector: "app-test-observable",
  templateUrl: "./test-observable.component.html",
  styleUrls: ["./test-observable.component.css"],
})
export class TestObservableComponent implements OnDestroy {
  monObservable: Observable<number>;
  mySubbscriptions: Subscription = new Subscription();
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
    this.mySubbscriptions.add(
      this.monObservable.pipe(takeUntilDestroyed()).subscribe({
        next: (val) => {
          console.log(val);
        },
      })
    );
    this.mySubbscriptions.add(
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
        })
    );
  }
  ngOnDestroy(): void {
    this.mySubbscriptions.unsubscribe();
  }
}
