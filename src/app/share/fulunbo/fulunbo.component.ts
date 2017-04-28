import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

export class Carousel {
  url: string;
}
const Carousels: Carousel[] = [
  { url: "http://i2.muimg.com/591259/2c2884735e4d94f0.jpg" },
  { url: "http://i2.muimg.com/591259/a896a96495baab96.jpg" },
  { url: "http://i2.muimg.com/591259/5072f677edf6467f.jpg" },
]
@Component({
  selector: 'app-fulunbo',
  templateUrl: './fulunbo.component.html',
  styleUrls: ['./fulunbo.component.css'],
  providers: [{ provide: CarouselConfig, useValue: { interval: 1500, noPause: true } }]
})
export class FulunboComponent implements OnInit {
  carousels = Carousels
  constructor() { }

  ngOnInit() {
  }

}
