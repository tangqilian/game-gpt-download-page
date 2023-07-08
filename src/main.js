import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './utils/http'
import '@/assets/font/font.css';
import { Popup,Toast,Swipe, SwipeItem, Stepper, Field,Icon,List,Dialog, Popover} from 'vant';
import VueI18n from 'vue-i18n';
Vue.use(Popup).use(VueI18n).use(Swipe).use(SwipeItem).use(Stepper).use(Field).use(Icon).use(List).use(Dialog).use(Popover);
import VueClipBoard from 'vue-clipboard2'
Vue.use(VueClipBoard)
.use(http)
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'zh': require('@/assets/lang/zh.js').lang,
    'en': require('@/assets/lang/en.js').lang
  }
});

Vue.config.productionTip = false
Vue.prototype.$toast = Toast
new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.filter('cutAmount', (num) => {
  if (num=='--') return
  if (num) {
      if (num==0) return '0.00'
      let amount = num.toString()
      return amount.match(/^\d+(?:\.\d{0,2})?/).toString()
  } 
})
