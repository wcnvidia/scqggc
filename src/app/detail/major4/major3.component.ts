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
    des: "培养具备较强的沟通能力，协调能力和应变能力，掌握只能设备的装配调试与维修维护等基本技能，在智能终端系统集成，工程实施，系统维护企业从事智能设备调测与开通，系统运行与维护，产品辅助与设计，，生产与检验等工作实用型，技能型专业人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "智能产品开发，移动应用技术，电子技术基础，智能化仪器及应用，智能检测传感技术，自动检测与转换技术。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "主要面向电子电器设备的生产企业，销售和维修服务部门。学生毕业后可进入苏宁，格力，美的，富士康等公司，也可以从事智能设备，智能终端，音频视频家用电器和办公自动化设备的装配，调试，销售和检修等岗位工作，并可自主创业。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：智能终端技术与应用。本科：电子科技与技术。",
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
