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
    des: "培养掌握金融基础理论，具备较好的沟通，协调力和应变能力，能在金融机构从事商业银行业务处理，金融产品营销，证券投资分析，客户服务，项目推广，权证处理等业务工作的实用型技术人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "金融认知，证券基础，保险认知，金融营销实务，金融基本技能，银行柜面业务处理，证券交易，证券投资资金，人身保险实务，财产保险实务。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后可面向各城市商业银行，贷款公司，保险公司，证券公司，担保公司，信托公司，基金公司，股票公司等金融事业，从事相关岗位工作。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：金融与证券。本科：金融学。",
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
