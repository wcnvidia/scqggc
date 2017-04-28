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
    des: "培养掌握机械与电气知识，在机电设备操作企业、售后服务企业、物业管理公司从事机电产品的制造、安装、调试、维护、运行或销售工作的高素质劳动者和技能型人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "机械制图、电工基础、金属工艺、电子技术、电控设备、安装维修、制图CAD、钳工技术、机械基础、电工技能训练、焊工工艺、车工工艺学、数控加工基础、公差与配合、家电维修技术。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后可面向襄阳航与机电液压应用技术，东风纳德车桥等公司从事相关工作，也可以在相应的企业事业单位从事机电设备的运行，维修，安装，调试，机电一体化设备的设计，改造，生产管理，技术管理，以及机械制造工艺设计与设施，工装设计与设施，机电一体化设备的管理和维护，数控机床的编造和操作等岗位工作。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：自动化生产设备应用，机电一体化技术。本科：电气工程及自动化。",
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
