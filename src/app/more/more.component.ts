import { Component, OnInit } from '@angular/core';
export class Image{
  url:string
}
const Images:Image[]=[
  {url:"http://i4.buimg.com/591259/64a5fe42a48d7107.jpg"},
  {url:"http://i4.buimg.com/591259/7cf9eebff5b088ea.jpg"},
  {url:"http://i4.buimg.com/591259/171f6ecbd7c07165.jpg"},
  {url:"http://i4.buimg.com/591259/fa5c81a4b693e9e7.jpg"},
  {url:"http://i4.buimg.com/591259/2ca37fdb5c101a95.jpg"},
  {url:"http://i1.piimg.com/591259/1057eee08d7c5fad.jpg"},
]

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
images=Images;
  constructor() { }

  ngOnInit() {
  }

}
