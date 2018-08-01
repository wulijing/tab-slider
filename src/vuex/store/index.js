import Vue from 'vue'
import vuex from 'vuex'
import dialogStore from '../store/dialog_store.js'
Vue.use(vuex)
export default new vuex.Store({ // store对象
  modules: {
    dialog: dialogStore
  }
})
