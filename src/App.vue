<template>
  <div id="app">
    <h2>========APP内容=======</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addcounter">+</button>
    <button @click="subcounter">-</button>

    <h2>========APP内容:modules(模块A)中内容=======</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="mUpdataName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>========APP内容:mutations=======</h2>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>========APP内容:getters=======</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.moreAgeStu(12)}}</h2>

    <h2>=======info对象是否是响应式的====</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updataInfo">更改名字</button>

    <h2>======HelloVuex内容=====</h2>
    <hello-vuex :counter="counter"/>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";

export default {
  name: "App",
  components: {
    HelloVuex
  },
  data() {
    return {
      message: "我是APP组件",
      counter: 0
    };
  },
  methods: {
    addcounter() {
      this.$store.commit("increment");
    },
    subcounter() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      // this.$store.commit('incrementCount', count)
      this.$store.commit({
        type: "incrementCount",
        count: count
      });
    },
    addStudent() {
      const stu = { id: 115, name: "libai", age: 18 };
      this.$store.commit("addStudent", stu);
    },
    updataInfo(info) {
      // this.$store.commit('updataInfo',info)

      //action方法
      // this.$store.dispatch('aUpdataInfo')

      // this.$store.dispatch('aUpdataInfo', '我是payload')

      // this.$store.dispatch("aUpdataInfo", () => {
      //   console.log("里面已经完成了");
      // });

      // this.$store.dispatch("aUpdataInfo", {
      //   message: "payload中的message",
      //   success: () => {
      //     console.log("里面已经成功了");
      //   }
      // });

      this.$store.dispatch("aUpdataInfo", "我是payload的message").then(res => {
        console.log("里面已经完成了");
        console.log(res);
      });
    },
    mUpdataName() {
      this.$store.commit('updataName', 
      {name:'翠花'}
      );
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdataName')
    }
  },
  computed: {
    // more20stu() {
    //   return this.$store.state.students.filter(stu => {
    //     // console.log(stu);
    //     return stu.age > 30;
    //   }); //不方便复用
  }
};
</script>

<style>
</style> 
