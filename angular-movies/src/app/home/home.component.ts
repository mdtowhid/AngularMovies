import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  moviesInTheaters: any = [];
  moviesInFutureReleases: any;

  handleRating(rate: number) {
    alert(rate);
  }
  constructor() {}

  ngOnInit(): void {
    this.moviesInTheaters = [
      {
        title: 'spider-man',
        releaseDate: new Date(),
        price: 140.99,
        poster: 'https://www.tutorialspoint.com/images/QAicon.png',
      },
      {
        title: 'Moana',
        releaseDate: new Date(),
        price: 140.99,
        poster: '',
      },
    ];

    this.moviesInFutureReleases;
  }
}
