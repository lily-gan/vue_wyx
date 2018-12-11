import {
  RECEIVE_CATELIST, //首页上方分类列表
  RECEIVE_FOCUSLIST, //轮播图数组
  RECEIVE_PLICYDESCLIST, //轮播图下方三个并排字符
  RECEIVE_KINGKONGMODULE,  //播图下面10个小图片列表对象
  RECEIVE_INDEXACTIVITYMODULE, //新人专享礼
  RECEIVE_TAGLIST ,             //品牌制造商直供
  RECEIVE_LISTTEXT,
  RECEIVE_INDENTIFY,  //识物页面  推荐
  RECEIVE_HEADLIST,   //识物页面头部导航list
  RECEIVE_FASHION    //识物页面 达人
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
  /*分类页面*/
  [RECEIVE_LISTTEXT](state,listText){
    state.listText=listText;

  },
  /*识物页面*/
  [RECEIVE_INDENTIFY](state,indentify){
    state.indentify=indentify;
  },
  [RECEIVE_HEADLIST](state,headList){
    state.headList=headList;
  },
  [RECEIVE_FASHION](state,fashion){
    state.fashion=fashion;
  }
}

