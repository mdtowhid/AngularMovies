import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() maxRating = 5;
  @Input() selectedRate = 0;
  @Output() onRating: EventEmitter<number> = new EventEmitter<number>();

  maxRatingArr: any = [];
  prevSelectedRate = 0;
  constructor() {}

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number) {
    this.selectedRate = index + 1;
  }

  handleMouseLeave() {
    if (this.prevSelectedRate!==0) 
      this.selectedRate = this.prevSelectedRate;
      else
        this.selectedRate=0;
  }

  rate(index: number) {
    this.selectedRate = index + 1;
    this.prevSelectedRate = index+1;
    this.onRating.emit(this.selectedRate);
  }
}
