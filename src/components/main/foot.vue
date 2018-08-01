<template>
  <div class="filter">
    <tab-slider
      class="sharing-content-wrapper"
      :comp="compData"
    ></tab-slider>
    <div class="routerto">
      <router-link :to="{name: 'HomePage'}">首页</router-link>
      <router-link :to="'Classify'">分类</router-link>
      <router-link :to="'Mine'">我的</router-link>
    </div>
  </div>
</template>

<script>
import tabSlider from 'tab-slider'
import { fillTheScreen } from '../../common/util.js'
import HomePage from '../HomePage/HomePage'
import Classify from '../Classify/Classify'
import Mine from '../Mine/Mine'
export default {
  name: 'foot',
  data () {
    return {
      compData: [
        {
          name: 'HomePage',
          component: HomePage
        },
        {
          name: 'Classify',
          component: Classify
        },
        {
          name: 'Mine',
          component: Mine
        }
      ]
    }
  },
  mounted () {
    const target = document.querySelector('.sharing-content-wrapper')
    const height = 116
    fillTheScreen({target, height})
  },
  components: {
    tabSlider
  }
}
</script>

<style src='./foot.less' lang="less" scoped></style>
