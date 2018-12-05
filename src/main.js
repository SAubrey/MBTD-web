import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
//import MainPage from './components/MainPage.vue'
import Account from './components/Account.vue'
import MainTable from './components/MainTable.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const appRoutes = [
  {path: '/', component: MainTable},
  {path: '/Account', component: Account},
  //{path: '/MainTable', component: MainTable},
];

export const appRouter = new VueRouter({
  routes: appRoutes
});

new Vue({
  store,
  router: appRouter,
  render: h => h(App)
}).$mount('#app')