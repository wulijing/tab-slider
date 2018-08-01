import Vue from 'vue'
import Router from 'vue-router'
import foots from '@/components/main/foot'
import Mine from '@/components/Mine/Mine'
import Classify from '@/components/Classify/Classify'
import HomePage from '@/components/HomePage/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/foot',
      name: 'foot',
      component: foots,
      redirect: '/foot/HomePage',
      children: [
        {
          path: 'HomePage',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: 'Classify',
          name: 'Classify',
          component: Classify
        },
        {
          path: 'Mine',
          name: 'Mine',
          component: Mine
        }
      ]
    }
  ]
})
