import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
export class Zhuanye {
  name: string;
  des: string;
  link: string;
  img: string;
}
const Zhuanyes: Zhuanye[] = [
  { name: "电子竞技", des: "培养能够在电竞产业从事职业游戏玩家，教练员，裁判员，职业经纪人，赛事策划与执行，战术与数据分析，场地运营与维护，俱乐部运营与管理，电竞主持与主播，电竞商务等相关工作的技能型人才。", link: "detail/major1", img: "http://i2.muimg.com/591259/ccb147f4bb37df63.jpg" },
  { name: "动漫设计", des: "培养熟练掌握计算机图形，图像处理，动漫设计与制作的基本知识和技能，能够在广告公司，游戏公司，影视公司，网络公司等从事动漫设计，动漫制作等等技术应用型人才", link: "detail/major2", img: "http://i2.muimg.com/591259/6d8611fac1a0943c.jpg" },
  { name: "新能源汽车维修", des: "培养具备较强的沟通能力，协调能力和应变能力，掌握新能源汽车电气系统检测，新能源汽车发动机电控系统的诊断与修复，新能源汽车安全与舒适系统的诊断与修复等技术，能够在新能源汽车公司，新能源汽车维修公司从事各类汽车设计制造，维修与技术管理等工作的实用型，技能型中等专业人才", link: "detail/major3", img: "http://i2.muimg.com/591259/47565f53b1a99f37.jpg" },
  { name: "智能设备维修", des: "培养具备较强的沟通能力，协调能力和应变能力，掌握只能设备的装配调试与维修维护等基本技能，在智能终端系统集成，工程实施，系统维护企业从事智能设备调测与开通，系统运行与维护，产品辅助与设计，，生产与检验等工作实用型，技能型专业人才。", link: "detail/major4", img: "http://i2.muimg.com/591259/6d80a41c22aed525.jpg" },
  { name: "城市轨道交通服务", des: "培养具备较强的沟通能力，协调能力，应变能力，能够在城市轨道交通运营领域的管理，研究和部门的开发，从事行车组织及调度组织，客运组织，运输指挥等现场操作工作的实用性技能中等专业人才。", link: "detail/major5", img: "http://i2.muimg.com/591259/c8fe1aac07d30e44.jpg" },
  { name: "航空服务", des: "培养掌握航空服务专业知识，具备较强的沟通能力，协调能力和应变能力，能在机场，航空公司，航空服务企业从事机票销售，定做操作，呼叫中心坐席服务，地勤服务，民航电子商务平台运营与维护的实用性技能型中等专业人才", link: "detail/major6", img: "http://i2.muimg.com/591259/f8708bb6c39e98ef.jpg" },
  { name: "酒店管理", des: "培养具有较强的沟通力，协调力和应变能力，掌经济基础管理理论 ，酒店，餐饮与旅游基础知识，具备酒店基本管理与服务能力，能够在各类星级酒店从事基层管理及餐饮，客房服务工作的实用型，技能型中等人才。", link: "detail/major7", img: "http://i2.muimg.com/591259/767c1205dc99de60.jpg" },
  { name: "会计", des: "培养具备较强的沟通，协调和应变能力，掌握会计基本核算方法，核算程序等知识，，能够在中小企业从事会计，出纳，税务核算与申报等工作的实用性技能中等专业人才 ", link: "detail/major8", img: "http://i2.muimg.com/591259/3070ecb5295cab63.jpg" },
  { name: "金融事务", des: "培养掌握金融基础理论，具备较好的沟通，协调力和应变能力，能在金融机构从事商业银行业务处理，金融产品营销，证券投资分析，客户服务，项目推广，权证处理等业务工作的实用型技术人才。", link: "detail/major9", img: "http://i2.muimg.com/591259/36c02cf393fc1a4c.jpg" },
  { name: "工程造价", des: "培养掌握工程造价管理的程序和方法，能够在施工企业投标和合同管理部门或施工项目从事工程造价，在工程招标代理机构，工程造价咨询机构，工程审计单位从事招标文件，的编制和管理工作的高素质劳动者和技能型人才", link: "detail/major10", img: "http://i2.muimg.com/591259/ecbca95925dc8e2b.jpg" },
  { name: "电子商务", des: "培养具有必需的文化科学知识、应用性的电子商务专业知识与综合素质，能熟练运用现代经济理论、电子商务技术，独立进行电子商务软件应用、网站建设与规划的高等技术应用性专门人才。", link: "detail/major11", img: "http://i2.muimg.com/591259/cae8690187f9943f.jpg" },
  { name: "汽车营销", des: "培养能够在汽车整车销售与服务，汽车零件供应等行业从事汽车整车营销，汽车零件部销售，汽车零件部销售，二手汽车销售和汽车保险代理工作的实用性技能型中等专业人才", link: "detail/major12", img: "http://i2.muimg.com/591259/50c64f7c4cf2ca95.jpg" },
  { name: "房地产营销", des: "培养具备较强的沟通能力，协调和应变能力，掌握房地产调查的方法以及房地产销售，经纪工作必须的物业管理知识，能够在房地产服务，房地产开发等行业企业，培养从事房地产销售，房地产经纪，物业助理等工作的高素质劳动者的技能型人才。",link: "detail/major13", img: "http://i2.muimg.com/591259/17b8b997af628438.jpg" },
  { name: "办公室文员", des: "培养具备较强的沟通能力，协调能力和应变能力，能够在工商企业的办公室，行政部等部门从事基层管理，行政助理等综合管理类工作，文书写作与处理，档案管理，会议组织与服务等办公室程序性工作的高素质劳动者和技能型人才。 ", link: "detail/major14", img: "http://i2.muimg.com/591259/ddfac24af24162a0.jpg" },
  { name: "机电技术应用", des: "培养掌握机械与电气知识，在机电设备操作企业、售后服务企业、物业管理公司从事机电产品的制造、安装、调试、维护、运行或销售工作的高素质劳动者和技能型人才。", link: "detail/major15", img: "http://i2.muimg.com/591259/db5049f6ba18c2c3.jpg" },
  { name: "老年人服务", des: "​培养具备协调能力和应变能力，能够进入医疗机构老年病房，老年护理中学，老年康复中心或大型医药融合型养老机构等单位从事老年人健康保健，护理，康复中心的高素质劳动者和技能型人才。", link: "detail/major16", img: "http://i2.muimg.com/591259/402b9c442c1afeaa.jpg" },
  { name: "服装营销", des: "培养具备较强的沟通能力，协调能力和应变能力，具有时尚品牌的营销能力，在服务装公司和门店能灵活运用专业知识完成产品的策划、生产、销售和推广，具有一定的掌握力和综合能力的实用型服装营销人才。", link: "detail/major17", img: "http://i2.muimg.com/591259/af20eb3bf4da99dd.jpg" },
  { name: "珠宝营销", des: "培养具备较强的沟通、协调和应变能力，掌握系统的珠宝玉石鉴定、珠宝首饰鉴定与评估、珠宝首饰营销的专业知识，具有珠宝玉石鉴定、珠宝首饰营销等相关专业技能，能够在珠宝玉石鉴定机构、加工及营销企业、旅游商品营销等部门从事珠宝玉石鉴定、检测、销售、款式设计、加工等工作的高素质技能型人才。", link: "detail/major18", img: "http://i2.muimg.com/591259/34563cff7267449c.jpg" },
  { name: "化妆品营销", des: "培养具备较强的沟通、协调和应变能力，掌握化妆品的使用和营销技巧，能够在综合美容机构从事美容师、美容顾问，在化妆品公司从事化妆品营销及管理等工作的高素质劳动者和技能型人才。", link: "detail/major19", img: "http://i2.muimg.com/591259/46fea731776051ad.jpg" },
]
@Component({
  selector: 'app-zhuanye',
  templateUrl: './zhuanye.component.html',
  styleUrls: ['./zhuanye.component.css'],
})
export class ZhuanyeComponent implements OnInit {
  zhuanyes = Zhuanyes;
  constructor() { }

  ngOnInit() {
  }

}
