import Vue from 'vue'
import Vuex, { mapState } from 'vuex'
import firebase from 'firebase'
import firebaseui from 'firebaseui'

Vue.use(Vuex)

const config = {
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
    //profile: [],
    ui: new firebaseui.auth.AuthUI(firebase.auth()),
    db: firebase.database(),
    leaderboardObj: null,
    usersRef: firebase.database().ref().child("users"),
    scoresRef: firebase.database().ref().child("scores"),
    scores: firebase.database().ref(),
  },
  mutations: {
    LOGIN(state, profile) {
      state.loggedIn = true;
      state.userName = profile.displayName;
      state.userID = profile.uid;
      //state.profile = profile;

      // Add user to firebase
      state.db.ref('users/' + profile.uid).set({
        userName: state.userName,
        uid: profile.uid
      });
    },
    LOGOUT(state) {
      state.loggedIn = false;
      state.userName = null;
      state.userID = null;
    },
    INSERT_SCORE(state, score) {
      state.db.ref('scores/' + state.userID).push({
        score: score,
        userName: state.userName
      });
    },

    CREATE_LISTENERS(state) {
      console.log("HEYYYYY");
      state.scoresRef.on("value", snapshot => {
        state.scores = snapshot.toJSON();
        console.log(snapshot.toJSON());
      });
    },
    DELETESCORE(state){
    
    },
  },
  actions: {
    async login({commit}) {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        const result = await firebase.auth().signInWithPopup(provider);
        //console.log(result);
        commit('LOGIN', result.user);
      } catch (error) {
        console.log(error);
      }
    },

    async logout({commit}) {
      firebase.auth().signOut();
      commit('LOGOUT');
    },

    createListeners({commit}) {
      commit('CREATE_LISTENERS');
    },

    addScore({commit}, score) {
      commit('INSERT_SCORE', score);
    },
    deleteScore({commit}, score){
    	commit('INSERT_SCORE', score);	
    },
   },
  computed: mapState({
    loggedIn: state => state.loggedIn,
    userName: state => state.userName,
    scores: state => state.scores,
  }),

})
