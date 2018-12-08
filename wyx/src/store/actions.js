import {
  RECEIVE_CATELIST,
  RECEIVE_FOCUSLIST,
  RECEIVE_PLICYDESCLIST,
  RECEIVE_KINGKONGMODULE,
  RECEIVE_INDEXACTIVITYMODULE,
  RECEIVE_TAGLIST
} from './mutation-types'
import {
  reqCateList,
  reqFocusList,
  reqPolicyDescList,
  reqKingKongModule,
  reqIndexActivityModule,
  reqTagList
} from '../api/index'
import state from './state'
export default {
 /*发送ajax请求*/
  //首页上方分类列表
  async getCateList({commit,state}){
    const result=await reqCateList();
    if(result.code===0){
      const cateList=result.data;
      commit(RECEIVE_CATELIST,cateList);
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
  }
}
