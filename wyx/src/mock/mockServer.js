/*使用mock.js来mock数据/接口模块*/
import Mock from "mockjs"
import data from './msite.json'
import classifyData from './category.json'
import indentify from './shiwu.json'

/*首页*/
//首页上方分类列表
Mock.mock('/cateList',{code:0,data:data.cateList});
//暴露接口:轮播图
Mock.mock('/focusList',{code:0,data:data.focusList});
//轮播图下面三个并排字符
Mock.mock('/policyDescList',{code:0,data:data.policyDescList});
//暴露接口:轮播图下面10个小图片列表
Mock.mock('/kingKongModule',{code:0,data:data.kingKongModule});
//暴露接口:新人专享礼
Mock.mock('/indexActivityModule',{code:0,data:data.indexActivityModule});
//暴露接口: 品牌制造商直供
Mock.mock('/tagList',{code:0,data:data.tagList});

/*分类页面*/
//分类列表
Mock.mock('/listText',{code:0,data:classifyData});

/*识物页面*/
Mock.mock('/indentify',{code:0,data:indentify});






