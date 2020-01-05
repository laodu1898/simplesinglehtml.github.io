import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import foot from '@/components/foot.vue'
import head from '@/components/head.vue'
import banner from '@/components/banner.vue'
import options from '@/components/options.vue'
import status from '@/components/status.vue'
import course from '@/components/course.vue'


Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/foot',
      name: 'foot',
      component: foot
    },
    {
      path: '/head',
      name: 'head',
      component: head
    },
    {
      path: '/banner',
      name: 'banner',
      component: banner
    },
    {
      path: '/options',
      name: 'options',
      component: options
    },
    {
      path: '/status',
      name: 'status',
      component: status
    },
    {
      path: '/course',
      name: 'course',
      component: course
    }
  ]
})
