<template>
    <div class="page-loadmore">
      <div class="headTop" v-show="headTopFiexd">
        <span>headTopFiexdheadTopFiexd</span>
      </div>
      <div class="times" v-show="headTopOut">
        <span>{{content}}</span>
      </div>
      <div class="page-loadmore-wrapper" ref="wrapper" >
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  :auto-fill="false" ref="loadmore" @bottom-status-change="handleBottomChange" @top-status-change="handleTopChange">
          <div class="loadingDiv">
            <div class="headTops">
              <span @click="$store.dispatch('switch_dialog')">{{$store.state.dialog.headH}}</span>
            </div>
            <ul class="page-loadmore-list page-loadmore-listMargin">
              <MineList class="page-loadmore-listitem loadingP" v-for="(item, index) in arrs" :ArrList="item" :key="index"></MineList>
            </ul>
          </div>
          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
            <!-- <span v-show="topStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span> -->
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
import MineList from './ClassifyChild.vue'
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
    MineList
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
    dedupe (array) {
      return Array.from(new Set(array))
    },
    sort (ele) {
      for (var i = 0; i < ele.length - 1; i++) {
        for (var j = 0; j < ele.length - i - 1; j++) {
          if (ele[j] > ele[j + 1]) {
            var teep = ele[j]
            ele[j] = ele[j + 1]
            ele[j + 1] = teep
          }
        }
      }
    },
    getDataList () {
      const url = 'loading'
      axios.post(url, {'page': this.page, 'size': this.pageSize})
        .then((res) => {
          let len = res.data.length
          let start = ''
          let end = ''
          let smallTime = {}
          console.log(res.data, 'res.data')
          // let last = res.data[len - 1].times
          for (var i = 0; i < len - 1; i++) {
            console.log(res.data[i].times, moment.unix(res.data[i].times).format('MM/DD hh:mm:ss'), i)
            start = res.data[i].times
            end = res.data[i + 1].times
            // console.log(start, 'start', end, 'end')
            console.log(start - end, '差值')
            if (start - end > 3600) {
              smallTime[start] = []
              // smallTime[last] = []
            }
            smallTime[start].push(res.data[i])
            // smallTime[last].push(res.data[len - 1])
            // console.log(smallTime[start].push(res.data[i]))
            // console.log(smallTime[start], 'start')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    loadBottom () {
      setTimeout(() => {
        this.getMoreDataList()
        this.$refs.loadmore.onBottomLoaded()
      }, 1500)
    },
    loadTop () {
      setTimeout(() => {
        // this.page = 0
        this.allLoaded = false
        this.getDataList()
        this.$refs.loadmore.onTopLoaded()
      }, 1500)
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop = scrollTop
      if (scrollTop >= 70) {
        this.headTopFiexd = true
      }
      if (scrollTop < 20) {
        this.headTopFiexd = false
      }
      for (var j = 0; j < this.arr.length; j++) {
        if (scrollTop > this.arr[j]) {
          this.headTopOut = true
          this.content = document.querySelectorAll('.hoffsetTop')[j].innerHTML // 内容
        } else if (scrollTop < this.arr[0]) {
          this.headTopOut = false
        }
      }
    },
    getMoreDataList () {
      const url = 'loading'
      const loadTime = '1530062493'
      const touchdown = 2
      const pageSize = Math.floor(Math.random() * 10 + 1)
      axios.post(url, {'page': this.page, 'size': pageSize, 'touch': touchdown, 'loadTime': loadTime})
        .then((res) => {
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  watch: {
    scrollTop () {
      this.arr = []
      let ulen = document.querySelectorAll('.ListAll')
      for (var i = 0; i < ulen.length; i++) {
        this.arr.push(ulen[i].offsetTop - 96)
      }
    }
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
  .headTop {
    width: 100%;
    height: 1rem;
    position: fixed;
    top: .96rem;
    z-index: 999;
    font-size: .4rem;
    background: red;
    color: #fff;
  }
  .page-loadmore .mint-spinner {
    font-size: .28rem;
    display: inline-block;
    vertical-align: middle
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
    overflow: scroll;
    margin-top: .96rem;
    margin-bottom: .96rem;
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
  .times{
    width: 100%;
    height: 1rem;
    z-index: 344;
    margin-top: 1.96rem;
    position: fixed;
    font-size: .28rem;
    line-height: 1rem;
    font-weight: bold;
    background: yellow;
    /* background: #ccc; */
  }
</style>
