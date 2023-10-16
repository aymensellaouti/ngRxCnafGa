import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";

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
    this.monObservable.subscribe({
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
