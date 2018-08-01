<template>
  <div class="homepage">
    <swiper loop auto :list="swipers" :index="swiperIndex"></swiper>
    <panel :list='list'></panel>
  </div>
</template>

<script>
import { Swiper, Panel, Group, Radio } from 'vux'
import swiperDome from '../../../mock/data/swiper.js'
import homePageList from '../../../mock/data/homePageList.js'
export default {
  name: 'left',
  data () {
    return {
      swipers: swiperDome,
      swiperIndex: 0,
      type: '1',
      list: homePageList
    }
  },
  created () {
  },
  components: {
    Swiper,
    Panel,
    Group,
    Radio
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./HomePage.less' lang='less'></style>
