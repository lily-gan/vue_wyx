/*包含n个接口请求函数的模块*/
import ajax from './ajax'
/*const BASE='/api'*/
/*获取首页上方分类列表*/
export const reqCateList=()=>ajax('/cateList');
/*获取轮播图*/
export const reqFocusList=()=>ajax('/focusList');
/*获取轮播图下方三个并排字符*/
export const reqPolicyDescList=()=>ajax('/policyDescList');
/*获取轮播图下面10个小图片列表*/
export const reqKingKongModule=()=>ajax(`/kingKongModule`);
/*新人专享礼*/
export const reqIndexActivityModule=()=>ajax('/indexActivityModule')
/*品牌制造商直供*/
export const reqTagList=()=>ajax('/tagList');

