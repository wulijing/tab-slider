<template>
  <div id="app">
    <Header class="header"></Header>
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- <Foot></Foot> -->
  </div>
</template>

<script>
import Header from './components/main/header'
// import Foot from './components/main/foot'
export default {
  name: 'App',
  components: {
    Header
    // Foot
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  #app{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .header{
    width: 100%;
    position: fixed;
    top: 0;
  }
</style>
