import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() cvs: Cv[] | null = [];
  @Output() forwardCv = new EventEmitter<Cv>();
}
