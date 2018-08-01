<template>
    <div class="page-loadmore">
      <MineDW :DW="content" :head-top="headTopFiexd" :headtop-out="headTopOut"></MineDW>
      <div class="page-loadmore-wrapper" ref="wrapper">
        <mt-loadmore :top-method="loadTop" @translate-change="translateChange" :bottom-method="loadBottom"  :auto-fill="false" ref="loadmore" @bottom-status-change="handleBottomChange" @top-status-change="handleTopChange">
          <div class="loadingDiv">
            <div class="headTops">
              <span @click="$store.dispatch('switch_dialog')">{{$store.state.dialog.headH}}</span>
            </div>
            <ul class="page-loadmore-list page-loadmore-listMargin" ref="ulBottom">
              <div class="page-loadmore-listitem loadingP" v-for="(item, index) in 15" :key="index"></div>
            </ul>
          </div>
          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">Loading...</span>
            <span v-show="topStatus === 'drop'">释放更新</span>
          </div>
          <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
            <span v-show="bottomStatus === 'loading'">Loading...</span>
            <span v-show="bottomStatus === 'drop'">释放加载</span>
          </div>
        </mt-loadmore>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import MineDW from './MineDW'
export default {
  data () {
    return {
      content: '',
      topStatus: '',
      bottomStatus: '',
      arr: [], // 局顶部距离
      arrs: [], // 最后总数据
      bigTime: [],
      timesArr: [],
      smallTime: {},
      allLoaded: false,
      headTopFiexd: false,
      headTopOut: false,
      page: 0,
      total: 0, // 总页数
      pageSize: 0,
      scrollTop: 0
    }
  },
  created () {
    this.getDataList()
  },
  components: {
    MineDW
  },
  methods: {
    scrolls (event) {
    },
    handleTopChange (status) {
      this.topStatus = status
    },
    handleBottomChange (status) {
      this.bottomStatus = status
    },
    loadBottom () {
      this.getMoreDataList()
    },
    loadTop () {
      setTimeout(() => {
        this.allLoaded = false
        this.getDataList()
        this.$refs.loadmore.onTopLoaded()
      }, 1500)
    },
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  watch: {
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style>
  /* .page-loadmore{
    -webkit-overflow-scrolling: touch
  } */
  .headTops{
    width: 100%;
    height: 3rem;
    background: #333;
    color: #fff;
  }
  .page-loadmore {
    position: relative;
  }
  .page-loadmore .mint-spinner {
    font-size: .28rem;
    display: inline-block;
    vertical-align: middle;
  }
  .page-loadmore-listitem {
    font-size: .28rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .loadingP{
    width: 100%;
    /* height: 2.3rem; */
    line-height: .5rem;
    text-align: center;
    background: #eee;
  }
  .matter{
    width: 80%;
    line-height: .5rem;
    text-align: center;
    background: #eee;
    margin-left: 10%;
  }
  .ListAll{
    width: 100%;
  }
  .matter p:nth-child(1){
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .matter p:nth-child(1) span:nth-child(1){
    font-size: .36rem;
  }
  .matter p:nth-child(1) span:nth-child(2){
    font-size: .3rem;
  }
  .matter p:nth-child(2){
    display: flex;
    width: 100%;
    font-size: .28rem;
    align-items: center;
  }
  .matter p:nth-child(3){
    display: flex;
    width: 100%;
    font-size: .26rem;
    align-items: center;
  }
  .hspan{
    margin-left: .5rem;
  }
  .page-loadmore-wrapper {
    overflow: auto;
    margin-top: .96rem;
    margin-bottom: .96rem;
    -webkit-overflow-scrolling: touch;
  }
  .mint-loadmore-top span {
    display: inline-block;
    vertical-align: middle;
    font-size: .28rem;
  }
  .mint-loadmore-top span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    font-size: .28rem;
  }
  .mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    font-size: .28rem;
  }
  .mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    font-size: .28rem;
  }
  .hStatic{
    width: 100%;
    height: 1rem;
    top: 1.96rem;
    left: 0;
    display: flex;
    justify-content: space-around;
    font-size: .28rem;
    line-height: 1rem;
    font-weight: bold;
    background: #ccc;
  }
  .MineDW{
    width: 100%;
    position: fixed !important;
    z-index: 555;
  }
  .headTop {
    width: 100%;
    height: 1rem;
    position: absolute;
    top: .96rem;
    z-index: 999;
    font-size: .4rem;
    background: red;
    color: #fff;
  }
  .times{
    width: 100%;
    height: 1rem;
    z-index: 344;
    top: 1.96rem;
    position: absolute;
    font-size: .28rem;
    line-height: 1rem;
    font-weight: bold;
    background: yellow;
    /* background: #ccc; */
  }
</style>
