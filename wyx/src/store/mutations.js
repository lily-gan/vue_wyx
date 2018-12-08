import {
  RECEIVE_CATELIST, //首页上方分类列表
  RECEIVE_FOCUSLIST, //轮播图数组
  RECEIVE_PLICYDESCLIST, //轮播图下方三个并排字符
  RECEIVE_KINGKONGMODULE,  //播图下面10个小图片列表对象
  RECEIVE_INDEXACTIVITYMODULE, //新人专享礼
  RECEIVE_TAGLIST              //品牌制造商直供
}from './mutation-types.js'
import state from './state'
import Vue from 'vue'
export default {
  [RECEIVE_CATELIST](state,cateList){
    state.cateList=cateList;
  },
  [RECEIVE_FOCUSLIST](state,focusList){
  state.focusList=focusList;
  },
  [RECEIVE_PLICYDESCLIST](state,policyDescList){
    state.policyDescList=policyDescList;
  },
  [RECEIVE_KINGKONGMODULE](state,kingKongModule){
    state.kingKongModule=kingKongModule;
  },
  [RECEIVE_INDEXACTIVITYMODULE](state,indexActivityModule){
    state.indexActivityModule=indexActivityModule;
  },
  [RECEIVE_TAGLIST](state,tagList){
    state.tagList=tagList;
  },

}

