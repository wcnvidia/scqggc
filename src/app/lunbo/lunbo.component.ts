import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

export class CampusLive {
  url: string;
}
export class Test {
  url: string;
}
export class CollegeNews{
  title:string;
  link:string;
}
export class CollegeDynamic{
  title:string;
  link:string;
}
const CampusLives: CampusLive[] = [
  { url: "http://i4.buimg.com/591259/64a5fe42a48d7107.jpg" },
  { url: "http://i4.buimg.com/591259/7cf9eebff5b088ea.jpg" },
  { url: "http://i4.buimg.com/591259/171f6ecbd7c07165.jpg" },
  { url: "http://i4.buimg.com/591259/fa5c81a4b693e9e7.jpg" },
]
const Tests: Test[] = [
  { url: "http://i2.muimg.com/591259/4d8924d1e71efa98.jpg" },
  { url: "http://i2.muimg.com/591259/f34a00ce05156b5f.jpg" },
]
const CollegeNewses:CollegeNews[]=[
  {title:"属于程序员的未来|终极揭秘web前端后端开发",link:"/wenzhang/article1"},
  {title:"高速无线网速是如何实现的？",link:"/wenzhang/article2"},
  {title:"“智能+医疗”=人工智能?|政府工作报告开启云平台云竞技",link:"/wenzhang/article3"},
  {title:"机器学习>网络开发？来看外国网友怎么说",link:"/wenzhang/article4"},
  {title:"为什么说现在是汽车销售的春天？来看看这些suv吧",link:"/wenzhang/article5"},
]
const CollegeDynamics:CollegeDynamic[]=[
  {title:"专业明星：世界电竞冠军——陈志豪“Hao”",link:""},
  {title:"专业明星：喜羊羊之父——黄伟明",link:""},
  {title:"经济管理系“乐途·指尖魔力”点钞大赛",link:""},
  {title:"四川省轻工工程学校航空服务专业行业认知活动",link:""},
  {title:"国学经典诵读比赛",link:""},
]
@Component({
  selector: 'app-lunbo',
  templateUrl: './lunbo.component.html',
  styleUrls: ['./lunbo.component.css'],
  providers: [{ provide: CarouselConfig, useValue: { interval: 1500, noPause: true } }]
})
export class LunboComponent implements OnInit {
  campusLives = CampusLives;
  tests = Tests;
  collegeNewses = CollegeNewses;
  collegeDynamics = CollegeDynamics;
  constructor() { }

  ngOnInit() {
  }

}
