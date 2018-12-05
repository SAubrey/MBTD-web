<template>
<v-container fluid>
    <h2>High Scores</h2>
    <v-layout column>
      
      <table id="mainTable">
        <tr>
          <th>Rank</th><th>User</th><th>Score</th>
        </tr>
        <template v-for="user in this.scores">
          <template v-for="score in user">
        <tr>
          
          <td> {{ i }} </td>
          <td> {{ score.userName }} </td>
          <td> {{ score.score }} </td>
        </tr>
        </template>
        </template>
      </table>

    </v-layout>
</v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

 export default {
  name: 'mainTable',
  data: function() {
    return {
      i: 0
    }
  },    

    computed: {
      ...mapState(['scores']),
    },

    methods: {
      ...mapActions(['createListeners']),
      iterate() {
       this.i += 1;
        return this.i;
      },
      
    },
    beforeMount() { // Called immediately
      this.createListeners();
    },

    getters: {

    }

   
}
</script>