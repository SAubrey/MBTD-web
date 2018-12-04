import Vue from 'vue'
import Vuex, { mapState } from 'vuex'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
//import {appRouter} from './main';

Vue.use(Vuex)

const config ={
  apiKey: "AIzaSyDJX8KvKzv5RtA8aqIAcCiYu0MXPGNXS4M",
  authDomain: "mbtd-e3ffc.firebaseapp.com",
  databaseURL: "https://mbtd-e3ffc.firebaseio.com",
  projectId: "mbtd-e3ffc",
  storageBucket: "mbtd-e3ffc.appspot.com",
  messagingSenderId: "304422916874"
};
firebase.initializeApp(config);

export default new Vuex.Store({
  state: {
    userID: null,
    userName: null,
    loggedIn: false,
    ui: new firebaseui.auth.AuthUI(firebase.auth()),
    db: firebase.database()
  },
  mutations: {
    LOGIN(state, profile) {
      state.loggedIn = true;
      state.userName = profile.displayName;
      state.userID = profile.uid;

      // Add to firebase
      state.db.ref('users/' + profile.uid).set({
        userName: state.userName,
        uid: profile.uid
      });
    },
    LOGOUT(state) {
      state.loggedIn = false;
      state.userName = null;
      state.userID = null;
    }
  },
  actions: {
    async login({commit}) {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        const result = await firebase.auth().signInWithPopup(provider);
        console.log(result);
        commit('LOGIN', result.user);
      } catch (error) {
        console.log(error);
      }
    },
    async logout({commit}) {
      firebase.auth().signOut();
      commit('LOGOUT');
    }

  },
  computed: mapState({
    loggedIn: state => state.loggedIn,
    userName: state => state.userName,
  }),

  getters: {
    getUser: (state) => {
      return state.user;
    }
  }
})
