
import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

export class Carousel{
  url:string
}
const Carousels:Carousel[]=[
  {url:"http://i4.buimg.com/591259/707fe85a1873ea42.jpg"},
  {url:"http://i4.buimg.com/591259/f829092e356b6769.jpg"},
]
@Component({
  selector: 'app-zhulunbo',
  templateUrl: './zhulunbo.component.html',
  styleUrls: ['./zhulunbo.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}],
  
})
export class ZhulunboComponent implements OnInit {
  carousels=Carousels
  constructor() { }

  ngOnInit() {
  }

}
