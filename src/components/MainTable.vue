<template>
<v-container fluid>
    <h2>High Scores</h2>
    <v-layout column>

      <table id="mainTable">
        <tr class="header">
          <th>Rank</th><th>User</th><th>Score</th><th>Delete</th>
        </tr>
        <template v-for="score in this.scores">
        <tr class="rows">
          <td> {{ index }} </td>
          <td> {{ score.userName }} </td>
          <td> {{ score.score }} </td>
	<td><v-flex xs4>
            <v-btn color="red" @click="deleteScore">Delete</v-btn>
        </v-flex></td>
        </tr>
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
      ...mapActions(['createListeners', 'delete']),
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
