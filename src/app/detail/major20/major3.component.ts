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
    des: "​培养热爱幼儿教育事业，能适应幼儿教育改革与发展的需要，关爱幼儿，有良好的师德、宽厚的科学文化知识和扎实的学前教育专业理论，具有过硬的专业技能、教育能力及教育研究的意识和能力，综合素质高，能在托幼机构从事0-6岁保教、管理工作的专科层次幼儿教师。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "学前教育学、学前心理学、学前卫生学、幼儿园教育活动指导、学前教育科研方法、学前儿童游戏、大学语文、大学英语、音乐、美术、舞蹈、幼儿文学、现代教育技术。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
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
