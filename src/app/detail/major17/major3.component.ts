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
    des: "​培养具备较强的沟通能力，协调能力和应变能力，具有时尚品牌的营销能力，在服务装公司和门店能灵活运用专业知识完成产品的策划、生产、销售和推广，具有一定的掌握力和综合能力的实用型服装营销人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "服装材料，服装结构设计与制图，服装市场营销，广告与促销，服装设计，时装市场案例研究，商务谈判与推销技巧。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后面向圣楼兰、天猫、快尚时装、上海宝鸟、广州中球国际、上海美特斯邦威服饰、李宁（中国）体育用品、四川浪莎、报喜鸟集团、浙江奥康鞋业、商场专卖店等公司，从事商品专员、品牌经理、拓展经理、电商运营、新媒体运营、导购、店长、培训讲师、运营管理等岗位工作。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：服装营销与管理专业。本科：市场营销学。",
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
