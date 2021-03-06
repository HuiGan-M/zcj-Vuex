export default {
  powerCounter(state) {
    return state.counter * state.counter
  },
  more20stu(state) {
    return state.students.filter(stu => {
      return stu.age > 30
    })
  },
  more20stulength(state, getters) {
    return getters.more20stu.length
  },
  moreAgeStu(state) {
    // return function (age) {
    //   return state.students.filter(stu => {
    //     return stu.age > age
    //   })
    // }
    return function (age) {
      return state.students.filter(stu => stu.age > age)
    }
  },
}
