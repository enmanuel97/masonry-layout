import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animales: any[] = [
    {
      img: 'img1.jpg'
    },
    {
      img: 'img2.jpg'
    },
    {
      img: 'img3.jpg'
    },
    {
      img: 'img4.jpg'
    },
    {
      img: 'img5.jpg'
    },
    {
      img: 'img6.jpg'
    },
    {
      img: 'img7.jpg'
    },
    {
      img: 'img8.jpg'
    },
    {
      img: 'img9.jpg'
    },
  ];
  constructor() {}

}
