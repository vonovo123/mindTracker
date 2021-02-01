import Vue from 'vue'
import App from './App.vue'
//선언한 vueRouter를 불러옵니다.
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  //생성할 Vue 인스턴스에서 우리가 선언한 router 사용을 명시합니다.
  router,

  store,
  vuetify,

  //App.vue의 #app 엘리먼트에 Vue instance를 mount합니다.
  render: h => h(App)
}).$mount('#app')
