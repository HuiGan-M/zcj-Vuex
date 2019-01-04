import Vue from 'vue'
export default { // state 默认参数
  //方法
  increment(state) {
    state.counter++
  }, 
  decrement(state) {
    state.counter--
  },
  incrementCount(state, payload) {
    state.counter += payload.count
  },
  addStudent(state, stu) {
    state.students.push(stu)
  },
  updataInfo(state) {
    state.info.name = '狗蛋'
    // state.info['address']='铁柱' //往对象里添加属性(错误,不会响应式)
    // Vue.set(state.info, 'address', '洛杉矶')

    //mutation是不能进 行异步操作的 (Action才可以)
    // setTimeout(() => { 
    //   state.info.name = '狗蛋'
    // }, 1000)
  },  
  
}
