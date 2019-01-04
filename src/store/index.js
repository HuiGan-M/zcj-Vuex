import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import modules from './modules/modulesA'
import modulesA from './modules/modulesA';
//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [{
        id: 110,
        name: 'a1',
        age: 22
      },
      {
        id: 111,
        name: 'a2',
        age: 12
      },
      {
        id: 112,
        name: 'a3',
        age: 44
      },
      {
        id: 113,
        name: 'a4',
        age: 33
      },
      {
        id: 114,
        name: 'a5',
        age: 8
      },
    ],
    info: {
      name: 'lilei',
      age: 55,
      height: 1
    }
  },
  mutations,
  getters,
  actions,
  modules: {
    a: modulesA
  }
})
//3.导入插件
export default store
/**
 * 对象的解构(ES6)
 * let obj= {
 *  name:'居家',
 *  age:12,
 *  height:1.88
 * }
 * const{name, age, height} = obj
 */
