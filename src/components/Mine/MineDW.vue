<template>
  <div class="MineDW">
    <div class="headTop" v-show="headTop">
      <span>headTopFiexdheadTopFiexd</span>
    </div>
    <div class="times" v-show="headtopOut">
      <span>{{DW}}</span>
      <span>{{DWs}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['DW', 'headTop', 'headtopOut']
}
</script>
<style scoped>
</style>
