import { Component } from "@angular/core";
import { Observable, Subject, merge, reduce, scan } from "rxjs";

@Component({
  selector: "app-merge-reduce-scan",
  templateUrl: "./merge-reduce-scan.component.html",
  styleUrls: ["./merge-reduce-scan.component.css"],
})
export class MergeReduceScanComponent {
  stream1$: Subject<number> = new Subject();
  stream2$: Subject<number> = new Subject();
  merge$!: Observable<number>;
  reduce$!: Observable<number>;
  scan$!: Observable<number>;

  constructor() {
    this.merge$ = merge(this.stream1$, this.stream2$);
    this.reduce$ = this.merge$.pipe(reduce((acc, valeur) => acc + valeur));
    this.scan$ = this.merge$.pipe(scan((acc, valeur) => acc + valeur));
  }
  emit1(nb: number) {
    this.stream1$.next(nb);
  }
  emit2(nb: number) {
    this.stream2$.next(nb);
  }

  terminate(stream: Subject<number>) {
    stream.complete();
  }
}
