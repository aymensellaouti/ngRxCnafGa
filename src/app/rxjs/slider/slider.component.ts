import { Component, Input, OnInit } from "@angular/core";
import { Observable, map, timer } from "rxjs";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"],
})
export class SliderComponent implements OnInit {
  @Input() time = 1500;
  @Input() size = 150;
  @Input() images: string[] = [
    "as.jpg",
    "404.png",
    "cv.png",
    "rotating_card_profile.png",
    "rotating_card_profile2.png",
    "rotating_card_profile3.png",
  ];
  slider$!: Observable<string>;

  constructor() {}
  ngOnInit(): void {
    this.slider$ = timer(0, this.time).pipe(
      map((index) => this.images[index % (this.images.length - 1)])
    );
  }
}
