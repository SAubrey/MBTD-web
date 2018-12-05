<template>
<v-container fluid>
    <h2>High Scores</h2>
    <v-layout column>
      
      <table>
        <tr>
          <th>Rank</th><th>User</th><th>Score</th>
        </tr>
        <template v-for="score in this.scores">
        <tr>
          <td> 0 </td>
          <td> {{ score.userName }} </td>
          <td> {{ score.score }} </td>
        </tr>
        </template>
      </table>

    </v-layout>
</v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

/*
  // What I had for v-data-table...
<v-data-table
          :items="this.scores"
          item-key="userName"
      >
          <template slot="headers" slot-scope="props">
            <th> Rank </th>
            <th> User </th>
            <th> Score </th>
            
          </template>
          <template slot="items" slot-scope="">

          </template>
        </v-data-table>
*/

 export default {
  name: 'mainTable',
  data: function() {
    return {
      pagination: {
      sortBy: 'score'
    },

    selected: [],

    headers: [
      {
        text: 'string',
        align: 'left',
        value: 'string'
      },
      { text: 'Rank', value: 'userName' },
      { text: 'User', value: 'userName' },
      { text: 'Score', value: 'score' },
    ],

    //theseScores: this.scores
    }
  },    

    computed: {
      ...mapState(['scores']),
    },

    methods: {
      ...mapActions(['createListeners']),
    },
    beforeMount() { // Called immediately
      this.createListeners();
    }
}
</script>