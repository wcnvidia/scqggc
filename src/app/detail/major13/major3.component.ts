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
    des: "培养具备较强的沟通能力，协调和应变能力，掌握房地产调查的方法以及房地产销售，经纪工作必须的物业管理知识，能够在房地产服务，房地产开发等行业企业，培养从事房地产销售，房地产经纪，物业助理等工作的高素质劳动者的技能型人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "房地产基础知识，建筑工程基础，物业管理知识，房地产市场调查，房地产销售操作实务，房地产估价，房地产测绘。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后面向万科企业股份有限公司，恒大地产集团，大连万达股份有限公司，绿地控股集团有限公司，保利房地产股份有限公司或其他知名房地产经营与开发公司，物业管理公司等从事房地产投资与经济分析，房地产管理，房地产估价，房地产销售，房地产经营与开发项目等管理工作。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：房地产经营与评估。本科：房地产经营管理。",
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
