import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage.vue'
import Login from './components/Login.vue'
import Account from './components/Account.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const appRoutes = [
  {path: '/', component: MainPage},
  {path: '/Login', component: Login},
  {path: '/Account', component: Account},
];

export const appRouter = new VueRouter({
  routes: appRoutes
});

new Vue({
  store,
  router: appRouter,
  render: h => h(App)
}).$mount('#app')
