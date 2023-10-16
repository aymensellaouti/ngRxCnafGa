import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "calulF",
  pure: true,
})
export class CalulFPipe implements PipeTransform {
  transform(x: number): number {
    const result = this.f(x);
    console.log(`${x} : ${result}`);
    return result;
  }

  f(x: number): number {
    if (x == 0 || x == 1) {
      return 1;
    }
    return 2 * this.f(x - 1) + 3 * this.f(x - 2);
  }
}
