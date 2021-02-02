import Vue from 'vue' //Vue 컴포넌트
import VueRouter from 'vue-router' // Vue 라우터 Library
import Home from '../views/Home.vue' //Home 컴포넌트
import main_page from '../components/main_page.vue'
import sub_page from '../components/sub_page.vue'

Vue.use(VueRouter) // Vue 컴포넌트에 VueRouter를 사용한다는 것을 명시해줍니다.
//routes 는 VueRouter에 routing 할 route 객체로 이루어진 배열입니다.
const routes = [
  {
    path: '/',
    name: 'home',
    component: main_page
  },
  {
    path: '/main',
    name: 'main_page',
    component: main_page
  },
  {
    path: '/sub',
    name: 'sub_page',
    component: sub_page
  }
]
//명시한 routes를 이용하는 VueRouter를 생성합니다.
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//router를 외부에서 사용할 수 있도록 모듈화 합니다.
export default router
