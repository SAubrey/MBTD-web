import Vue from 'vue'
import Vuex from 'vuex'
import {appRouter} from './main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: null,
    logInProgress: false,
    timeOfLogin: 0
  },
  mutations: {
    SET_LOGIN_PROGRESS(state, flag) {
      state.loginInProgress = flag;
    },
    DO_LOGIN(state, uname) {
      state.loginInProgress = false;
      state.userName = uname;
      state.timeOfLogin = Date.now();
    }
  },
  actions: {
    // obj will have two fields: un & pw
    authenticate(context, obj) {
      // fetch()
      // Invoke mutation function to update loginInProgress
      context.commit('SET_LOGIN_PROGRESS', true);
      setTimeout(() => {
        // simulation of fetch response
        // invoke the mutation func to update un and timeOfLogin
        context.commit('SET_LOGIN_PROGRESS', false);
        context.commit('DO_LOGIN', obj.userName);
        appRouter.push({path: '/'})
      }, 2000);
      
    }
  }
})
