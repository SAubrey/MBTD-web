<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>MBTD:</span>
        <span class="font-weight-light">MicroBio Tower Defense</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        @click="startLogin"
      >
        Login
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
//import MainPage from './components/MainPage'
//import Login from './components/Login'

export default {
  name: 'App',
  components: {
    //MainPage,
  },
  data () {
    return {
      //
    }
  },
  methods: {
    startLogin () {
      this.$router.push({path: "/Login"})
    }
  }
}
</script>
