export default {
  //modulesA模块
  state: {
    name: '二狗子',
  },
  mutations: {
    updataName(state, payload) {
      state.name = payload
      // state.success=payload.success
    }
  },
  getters: {
    fullName(state) {
      return state.name + '真滴6!'
    },
    fullName2(state, getters) {
      return getters.fullName + ' 真滴流弊!'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  },
  actions: {
    aUpdataName(context) {
      console.log(context);
      setTimeout(() => {
        context.commit('updataName', '一号村花')
      }, 1000) 
    }
  }

}
