// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Datetime, Group } from 'vux'
import Bus from './bus/bus.js'
import { Loadmore, Spinner } from 'mint-ui'
import 'mint-ui/lib/style.css'
import mock from '../mock/index'
import vuex from 'vuex'
import 'tab-slider/dist/index.css'
import store from './vuex/store/index'
Vue.config.productionTip = false
Vue.component(Datetime.name, Datetime)
Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)
Vue.component(Group.name, Group)
Vue.use(Bus)
mock.newAxios()
Vue.use(vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
