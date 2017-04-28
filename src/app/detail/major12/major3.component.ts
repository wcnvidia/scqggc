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
    des: "培养能够在汽车整车销售与服务，汽车零件供应等行业从事汽车整车营销，汽车零件部销售，汽车零件部销售，二手汽车销售和汽车保险代理工作的实用性技能型中等专业人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "汽车文化，汽车商务礼仪，汽车使用性能，汽车构造，汽车销售流程，汽车配件基础知识，汽车电子商务，汽车销售营销，汽车销售实务，汽车使用与维护。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后面向成都西菱汽车配件有限公司，上海华特汽车配件公司，大陆集团等公司就业，也可以进入汽车生产企业，销售服务企业，保险公司等从事汽车销售服务业务，包保险公司等从事汽车销售服务业务，包括汽车整车机零配件销售，二手车交易，维修接待，汽车报修，理赔等工作。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：汽车服务与销售。本科：市场营销。",
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
cards = Cards;
  constructor() { }

  ngOnInit() {
  }

}
