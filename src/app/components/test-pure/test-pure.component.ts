import { Component } from "@angular/core";

@Component({
  selector: "app-test-pure",
  templateUrl: "./test-pure.component.html",
  styleUrls: ["./test-pure.component.css"],
})
export class TestPureComponent {
  message = "";
  elements: number[] = [];

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.elements[i] = this.randomValbetween(20, 30);
    }
  }

  private randomValbetween(min: number, max: number) {
    return Math.ceil(Math.random() * min) + (max - min);
  }
}
