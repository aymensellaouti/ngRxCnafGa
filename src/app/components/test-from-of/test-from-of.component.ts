import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable, from, of, tap } from "rxjs";

@Component({
  selector: "app-test-from-of",
  templateUrl: "./test-from-of.component.html",
  styleUrls: ["./test-from-of.component.css"],
})
export class TestFromOfComponent {
  from$: Observable<any>;
  of$: Observable<any>;
  source = [1, 2, 3];
  constructor() {
    this.from$ = from(this.source);
    this.of$ = of(this.source, "cc", new Date());

    this.from$
      .pipe(
        tap((data) => {
          console.log("In Tap", data);
        })
      )
      .subscribe({
        next: (data) => {
          console.log(`From : ${data}`);
        },
        complete: () => {
          console.log(`From : complete`);
        },
      });
    this.of$.subscribe({
      next: (data) => {
        console.log(`of : ${data}`);
      },
      complete: () => {
        console.log(`of : complete`);
      },
    });
  }
}
