import Vuex from 'vuex'
import Vue from 'vue'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    // 定义状态
  state: {
    author: 'Wise Wrong',
    a:1 ,
  },
  //突变集合---用来操作状态集合
  mutations:{
      newAuthor (state,msg) {
          state.author = msg
      },
      reduce(state){
        state.a-=1;
    }
  },
  //动作集合---用来操作突变集合的
  actions: {
    seta({commit},value){
        commit("SETA",value)
    }
    },
    //显示集合
    getters: {
        geta(state){
            return state.a
        }
    }
})