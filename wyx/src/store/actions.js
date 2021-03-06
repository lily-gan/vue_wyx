import {
  RECEIVE_CATELIST,
  RECEIVE_FOCUSLIST,
  RECEIVE_PLICYDESCLIST,
  RECEIVE_KINGKONGMODULE,
  RECEIVE_INDEXACTIVITYMODULE,
  RECEIVE_TAGLIST,
  RECEIVE_LISTTEXT,
  RECEIVE_INDENTIFY,
  RECEIVE_HEADLIST,
  RECEIVE_FASHION,
  RECEIVE_USER
} from './mutation-types'
import {
  reqCateList,
  reqFocusList,
  reqPolicyDescList,
  reqKingKongModule,
  reqIndexActivityModule,
  reqTagList,
  reqListText,
  reqIndentify,
  reqHeadList,
  reqFashion,
  reqUser
} from '../api/index'
import state from './state'
export default {
 /*发送ajax请求*/
  //首页上方分类列表
  async getCateList({commit,state},cb){
    const result=await reqCateList();
    if(result.code===0){
      const cateList=result.data;
      commit(RECEIVE_CATELIST,cateList);
      typeof cb==="function"&&cb();
    }
  },
  //轮播图
  async getFocusList({commit,state}){
    const result=await reqFocusList();
    //根据结果提交mutation
    if(result.code===0){
      const focusList=result.data;
      commit(RECEIVE_FOCUSLIST,focusList);
    }
  },
  //播图下方三个并排字符
  async getPolicyDescLis({commit,state}){
    const result=await reqPolicyDescList();
    if(result.code===0){
      const policyDescList=result.data;
      commit(RECEIVE_PLICYDESCLIST,policyDescList);
    }
  },
  //轮播图下面10个小图片列表对象
  async getKingKongModule({commit,state}){
    const result=await reqKingKongModule();
    if(result.code===0){
      const kingKongModule =result.data;
      commit(RECEIVE_KINGKONGMODULE,kingKongModule);
    }
  },
  //新人专享礼
  async getIndexActivityModule({commit,state}){
    const result=await reqIndexActivityModule();
    if(result.code===0){
      const indexActivityModule=result.data;
      commit(RECEIVE_INDEXACTIVITYMODULE,indexActivityModule);
    }
  },
  //品牌制造商直供
  async getTagList({commit,state}){
    const result=await reqTagList();
    if(result.code===0){
      const tagList=result.data;
      commit(RECEIVE_TAGLIST,tagList);
    }
  },

  //分类页面
  async getListText({commit,state},cb){
    const result=await reqListText();
    if(result.code===0){
      const listText=result.data;
      commit(RECEIVE_LISTTEXT,listText);
      typeof cb==="function"&&cb();
    }
  },

  //识物页面  推荐
  async getIndentify({commit,state}){
    const result=await reqIndentify();
    if(result.code==="200"){
      const indentify=result.data;
      commit(RECEIVE_INDENTIFY,indentify);
    }
  },
  //识物页面  头部导航list
  async getHeadList({commit,state}){
    const result=await reqHeadList();
    if(result.code==="200"){
      const headList=result.data;
      commit(RECEIVE_HEADLIST,headList);
    }
  },
  //识物页面  达人
  async getFashion({commit,state}){
    const result=await reqFashion();
    // console.log("fashion",result);
    if(result.code==="200"){
      const fashion=result.data;
      commit(RECEIVE_FASHION,fashion);
    }
  },
  // 获取当前用户的异步action
  async getUser({commit}) {
    const result = await reqUser()
    if(result.code===0) {
      const user = result.data
      console.log(user);
      commit(RECEIVE_USER, {user})
    }
  },

  // 保存user的同步action
  saveUser({commit}, user) {
    commit(RECEIVE_USER, {user})
  },

}
