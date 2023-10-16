import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Observable, combineLatest, map, timer } from "rxjs";
import { API } from "../../../config/api.config";

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

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
  photos$!: Observable<Photo[]>;
  constructor(private http: HttpClient) {
    this.photos$ = this.http.get<Photo[]>(API.photos);
  }
  ngOnInit(): void {
    this.slider$ = combineLatest([
      /* API */ this.photos$,
      /* Le Timer */ timer(0, this.time),
    ]).pipe(map(([photos, index]) => photos[index % (photos.length - 1)].url));
    /* this.slider$ = timer(0, this.time).pipe(
      map((index) => this.images[index % (this.images.length - 1)])
    ); */

    /*
      1- Appeler url => Observable La liste des paths
      2- Timer => index
    */
  }
}
