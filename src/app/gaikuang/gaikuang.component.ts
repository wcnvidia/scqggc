import { Component, OnInit } from '@angular/core';
export class Card {
  des: string
}
export class Manage{
  des:string
}
const Cards: Card[] = [
  { des: "国家级重点中等职业学校" },
  { des: "中国盐业协会会员单位" },
  { des: "全国学生军训试点中专" },
  { des: "四川省美术教育专业委员会中等分会副理事长单位" },
  { des: "全国公共英语等级考试考点" },
  { des: "四川省职业技术院校计算机等级考试先进考点学校" },
]
const Manages: Manage[] = [
  { des: "全封闭准军事化" },
  { des: "早晚自习效果督查制" },
  { des: "晚点名晚查寝常态制" },
  { des: "卫生·内务日查周评制" },
  { des: "节节查课点名制" },
  { des: "请销假规范运作" },
  { des: "家校联系定时制" },
  { des: "安全·法制教育常规制" },
  { des: "安全检查日查周评制" },
  { des: "仪容仪表周查制" },
]

@Component({
  selector: 'app-gaikuang',
  templateUrl: './gaikuang.component.html',
  styleUrls: ['./gaikuang.component.css'],

})
export class GaikuangComponent implements OnInit {
  cards = Cards;
  manages = Manages;
  constructor() { }

  ngOnInit() {
  }

}
