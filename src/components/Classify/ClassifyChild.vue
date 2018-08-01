<template>
  <li>
    <div v-for="(val, key, ind) in ArrList" :key="ind" class="ListAll">
      <div class="hStatic"><span class="hoffsetTop">{{key}}</span><span>共{{val.length}}条</span></div>
      <div v-for="(v, i) in val" :key="i"  class="matter">
        <p><span>{{v.headline}}</span><span>{{v.times | formatTime}}</span></p>
        <p>{{v.sbuTitle}}</p>
        <p>{{v.threeTitle}}</p>
      </div>
    </div>
  </li>
</template>
<script>
import moment from 'moment'
export default {
  props: ['ArrList'],
  data () {
    return {
    }
  },
  filters: {
    formatTime (time) {
      return moment.unix(time).format('YYYY/MM/DD HH:mm')
    }
  }
}
</script>
<style scoped>

</style>
