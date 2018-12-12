/*包含n个接口请求函数的模块*/
import ajax from './ajax'

const BASE="/163"
const BASE1="/api"

/*首页*/
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
/*分类页面*/
/*分类列表*/
export const reqListText=()=>ajax('/listText');
/*识物页面推荐*/
export const reqIndentify=()=>ajax(BASE+'/topic/v1/find/recManual.json');
/*识物页面的头部list导航*/
export const reqHeadList=()=>ajax(BASE+'/topic/v1/find/getTabs.json');
/*识物页面达人*/
export const reqFashion=()=>ajax(BASE+'/topic/v1/find/getTabData.json?page=1&size=5&tabId=4');

/*用户名密码登录*/
export const reqPwdLogin=({name,pwd,captcha})=>ajax(BASE1+'/login_pwd',{name,pwd,captcha},"POST")
/*短信验证码登录*/
export const reqSendCode=(phone)=>ajax(BASE1+'/sendcode',{phone})
/*手机号验证码登录*/
export const reqSmsLogin=(phone,code)=>ajax(BASE1+'/login_sms',{phone,code},"POST")
/*接收用户*/
export const reqUser = () => ajax(BASE1 + '/userinfo')
