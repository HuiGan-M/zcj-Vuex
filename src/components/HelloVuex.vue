<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stulength}}</h2>

  </div>
</template>

<script>
export default {
  name: "HelloVuex",
  data() {
    return {
      counter: 0
    };
  }
};
</script>

<style>
</style>
