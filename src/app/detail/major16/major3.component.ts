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
    des: "​培养具备协调能力和应变能力，能够进入医疗机构老年病房，老年护理中学，老年康复中心或大型医药融合型养老机构等单位从事老年人健康保健，护理，康复中心的高素质劳动者和技能型人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "老年人机构管理实务，老年人常见病护理，社区养老服务，老年产品市场开发，老年活动组织与策划，现代服务礼仪，老年政策法规，老年人的生活护理。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后课面向泰康之家，欧葆庭仙林国际颐养中心等老年人服务企业，也可以在各级养老机构（社会福利院，敬老院，老年公寓，居家养老服务中心等）从事老年人高级护理生活，康复保健等技术服务工作，在各级养老机构的行政管理，护理管理，后勤管理等岗位从事基层管理工作，在社区，养老机构等从事老年社会工作。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：老年人服务与管理。本科：家政学。",
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
