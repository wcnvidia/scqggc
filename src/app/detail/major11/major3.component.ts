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
    des: "培养具有必需的文化科学知识、应用性的电子商务专业知识与综合素质，能熟练运用现代经济理论、电子商务技术，独立进行电子商务软件应用、网站建设与规划的高等技术应用性专门人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "电子商务概论，电子商务数据库，电子商务网站建设，网络营销，电子商务与物流应用，电子商务案例分析，电子商务专业英语等。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后可在各类信息技术公司，计算机网络公司，电子商务企业，如百度，搜狗，腾讯，百都科技，龙擎科技，动力无限等企业从事网络销售，网页设计，运营，维护，和管理等岗位工作。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：电子商务。本科：电子商务。",
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
