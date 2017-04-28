import { Component, OnInit } from '@angular/core';

export class Card {
  title: string;
  des: string;
  bg: string;
  icon: string;
}
const Cards: Card[] = [
  {
    title: "培养目标",
    des: "培养德智体美全面发展，熟练掌握计算机图形，图像处理，动漫设计与制作的基本知识和技能，能够在广告公司，游戏公司，影视公司，网络公司等从事动漫设计，动漫制作等等技术应用型人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "素描，色彩，摄影，手绘漫画，卡通形象设计，插画设计，原画设计，网页设计与制作，Flash动画制作，Phototshop图像处理，3DSMAX三维动画技法，MAYA动画技法。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后可进入火鸟动画公司，上海旭明动画设计制作公司等大型动漫制作公司，毕业后主要从事游戏原画设计师，动漫原画设计师，游戏场景设计师，游戏角色模型设计师，游戏3D美术设计师等等岗位工作。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：动漫设计。本科：动画",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
]

@Component({
  selector: 'app-major2',
  templateUrl: './major2.component.html',
  styleUrls: ['./major2.component.css']
})
export class Major2Component implements OnInit {
  cards = Cards;
  constructor() { }

  ngOnInit() {
  }

}
