import { Component, OnInit } from '@angular/core';
import {DongtaiModel} from './dongtai.model';
const ArticleLists : DongtaiModel[] = [
  {id:11,link:'/wenzhang/article1',title:'属于程序员的未来|终极揭秘web前端后端开发',des:'日常生活中，很多网页呈现出来的简洁布局、精心设计以及各种灵动效果总是让我们赞叹不已，而创造这些酷炫体验的，正是背后的web开发者。早在3年前，互联网就囊括了六亿八千多万的页面，这个数字还在持续快速增长。据估计，该方向人才需求在未来十年内会稳定增长，前景非常广阔。',image:'../../assets/img/a11.jpg'},
  {id:12,link:'/wenzhang/article2',title:'高速无线网速是如何实现的？',des:'2017年1月31日，Qualcomm 与 Telstra、NETGEAR 和爱立信展开合作，在悉尼完成了一场千兆级 LTE 网络测试，测试现场得到了930 Mbps的无线下载速率和127 Mbps的无线上传速率。如此快的无线网速是如何实现的呢？',image:'../../assets/img/a21.jpg'},
  {id:13,link:'/wenzhang/article3',title:'“智能+医疗”=人工智能?|政府工作报告开启云平台云竞技',des:'人工智能技术在物流、医疗、金融、产业物联网等很多领域都有现实应用。对于关乎每个人健康的医疗领域而言，随着基础研究和技术应用逐步推进，“人工智能+医疗”同样将带来日新月异的变化。',image:'../../assets/img/a31.jpeg'},
  {id:14,link:'/wenzhang/article4',title:'机器学习>网络开发？来看外国网友怎么说',des:'最近看到一个很有趣的问题是机器学习和深度学习是比现在的网站开发更好的职业吗？在著名问答网站Quora上的一个答案，列出了几个原因。为什么网络是一个更好的选择在机器学习/深入学习的热情，答案供您参考。',image:'../../assets/img/a41.jpeg'},
  {id:15,link:'/wenzhang/article5',title:'为什么说现在是汽车销售的春天？来看看这些汽车吧(1)',des:'中国SUV市场的火热气氛，似乎并未有减弱的迹象，而自主品牌SUV依然占据多半江山。车市的火爆给了汽车销售专业广大的前景，选择汽车销售专业没错！',image:'../../assets/img/a52.jpg'},
  {id:16,link:'/wenzhang/article6',title:'为什么说现在是汽车销售的春天？来看看这些汽车吧(2)',des:'中国SUV市场的火热气氛，似乎并未有减弱的迹象，而自主品牌SUV依然占据多半江山。车市的火爆给了汽车销售专业广大的前景，选择汽车销售专业没错！',image:'../../assets/img/a6/a61.jpg'},
  {id:17,link:'/wenzhang/article7',title:'为什么说现在是汽车销售的春天？来看看这些汽车吧(3)',des:'中国SUV市场的火热气氛，似乎并未有减弱的迹象，而自主品牌SUV依然占据多半江山。车市的火爆给了汽车销售专业广大的前景，选择汽车销售专业没错！',image:'../../assets/img/a7/a71.jpg'},
  {id:18,link:'/wenzhang/article8',title:'学院召开期末考试考务工作会',des:'12月29日下午2：30，由学院教务处组织全体期末考试监考老师在老阶梯教室召开了花源校区期末考务工作会。全院各行政处室、院系所有监巡考人员都参加了本次会议。',image:'../../assets/img/test235x115.jpg'},
  {id:19,link:'/wenzhang/article9',title:'等你，看“视界” ——数字媒体学院成功举办2017届毕业设计作品展',des:'2016年12月20日数字媒体学院于我校中心教学楼大厅举办了2017届毕业设计作品展--视界。本次毕业展分别是计算机多媒体技术和艺术设计（产品三维模型设计）两大专业的集体展示.',image:'../../assets/img/test235x115.jpg'},
  {id:20,link:'/wenzhang/article10',title:'全国人大代表一行来我院视察指导工作 ——学院隆重举行2017元旦晚会',des:'12月23日，部分全国人大代表和省人大代表来到我院视察指导，学院院长余开源、党委书记、执行院长刁纯志等向代表们汇报了学院近期的工作。',image:'../../assets/img/test235x115.jpg'},
];

@Component({
  selector: 'app-dongtai',
  templateUrl: './dongtai.component.html',
  styleUrls: ['./dongtai.component.css']
})
export class DongtaiComponent implements OnInit {
  articleLists=ArticleLists;
  constructor() { }

  ngOnInit() {
  }

}
