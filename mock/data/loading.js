let MockArray = []
function loadingMore (page, size, touch, loadTime) {
  let loadings = [
    {
      times: '1530840283',
      headline: '核心系统',
      sbuTitle: '综合前置--核心',
      threeTitle: '5分钟内，成功率<90%,交易量>10000笔'
    },
    {
      times: '1530085473',
      headline: '核心系统',
      sbuTitle: '综合前置--核心',
      threeTitle: '5分钟内，成功率<90%,交易量>10000笔'
    },
    {
      times: '1530078499',
      headline: '核心系统',
      sbuTitle: '综合前置--核心',
      threeTitle: '5分钟内，成功率<90%,交易量>10000笔'
    },
    {
      times: '1530078493',
      headline: '核心系统',
      sbuTitle: '综合前置--核心',
      threeTitle: '5分钟内，成功率<90%,交易量>10000笔'
    },
    {
      times: '1530078488',
      headline: '核心系统',
      sbuTitle: '综合前置--核心',
      threeTitle: '5分钟内，成功率<90%,交易量>10000笔'
    },
    {
      times: '1530067493',
      headline: '核心系统',
      sbuTitle: '综合前置--核心',
      threeTitle: '5分钟内，成功率<90%,交易量>10000笔'
    },
    {
      times: '1530062493',
      headline: '核心系统',
      sbuTitle: '综合前置--核心',
      threeTitle: '5分钟内，成功率<90%,交易量>10000笔'
    }
  ]
  // setTimeout(() => {
  // if (touch === 1) {
  //   for (var i = 0; i < size; i++) {
  //     let timeRound = Math.round(new Date().getTime() / 1000).toString()
  //     let event = {
  //       times: '',
  //       headline: '核心系统',
  //       sbuTitle: '综合前置--核心',
  //       threeTitle: '5分钟内，成功率<90%,交易量>10000笔'
  //     }
  //     event.times = timeRound
  //     loadings.unshift(event)
  //   }
  //   console.log(loadings, '下啦完了')
  // }
  if (touch === 2) {
    var loadTimes = loadTime
    var readRound = loadTimes.substring(5)
    for (var j = 0; j < size; j++) {
      var timeRound = Math.floor(Math.random() * (Number(readRound) - 1000 + 1) + 1000)
      var event = {
        times: '',
        headline: '核心系统',
        sbuTitle: '综合前置--核心',
        threeTitle: '5分钟内，成功率<90%,交易量>10000笔'
      }
      event.times = '15300' + timeRound
      readRound = timeRound
      loadings.push(event)
    }
  }
  MockArray = loadings
  // }, 1000)
  // console.log(MockArray, 'loadingszuihou')
}
export { loadingMore, MockArray }
