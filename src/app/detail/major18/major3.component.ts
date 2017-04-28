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
    des: "​培养具备较强的沟通、协调和应变能力，掌握系统的珠宝玉石鉴定、珠宝首饰鉴定与评估、珠宝首饰营销的专业知识，具有珠宝玉石鉴定、珠宝首饰营销等相关专业技能，能够在珠宝玉石鉴定机构、加工及营销企业、旅游商品营销等部门从事珠宝玉石鉴定、检测、销售、款式设计、加工等工作的高素质技能型人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "宝石鉴定、钻石学、宝石款式设计与加工、玉石雕刻工艺、玉雕鉴赏、翡翠评价，贵金属首饰、珠宝营销、古玩玉器鉴赏、工艺美术、市场营销学。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后面向知名珠宝企业如金大福、通灵珠宝、千叶珠宝、赛菲尔首饰、爱恋珠宝、老凤祥等，从事旅游商品营销、首饰品牌开发与策划、产品运营、珠宝首饰产品营销与经营，担任珠宝首饰营销师、珠宝店店长，导购师等。也可自己成立首饰设计或创立珠宝自营店，进行自主创业。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：珠宝鉴定与营销。本科：珠宝市场营销学。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
]
@Component({
  selector: 'app-major2',
  templateUrl: './major3.component.html',
  styleUrls: ['./major3.component.css']
})
export class Major2Component implements OnInit {
cards = Cards
  constructor() { }

  ngOnInit() {
  }

}
