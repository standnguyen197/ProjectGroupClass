import Vue from 'vue'
import Router from 'vue-router'
import getMap from '@/components/getMap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'getMap',
      component: getMap
    }
  ]
})
