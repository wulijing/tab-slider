<template>
  <div class="header">
    <div @click="back" v-if="flag === true">
      <x-icon type="ios-arrow-left" size="20"></x-icon>
    </div>
    <div v-else></div>
    <div>{{title}}</div>
    <div></div>
  </div>
</template>
<script>
import { Icon } from 'vux'
export default {
  name: '',
  props: {
  },
  created () {
    // Bus.$on('title', (newTitle) => {
    //   this.title = newTitle
    // })
    // Bus.$on('flag', (newTitleFlag) => {
    //   this.flag = newTitleFlag
    // })
  },
  data () {
    return {
      newTitle: false,
      newTitleFlag: false
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  computed: {
    title: {
      set (newTitle) {
        this.newTitle = newTitle
      },
      get () {
        return this.newTitle
      }
    },
    flag: {
      set (newTitleFlag) {
        this.newTitleFlag = newTitleFlag
      },
      get () {
        return this.newTitleFlag
      }
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="less" src='./header.less' scoped></style>
