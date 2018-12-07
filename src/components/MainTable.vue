<template>
<v-container fluid d-block>
    <h2 class="centered">High Scores</h2>
    <v-layout column>

      <table class="centered">
        <tr class="header">
          <th>Rank</th><th>User</th><th>Score</th><th>Delete</th>
        </tr>
        <template v-for="(score, key) in sort()">
        <tr class="rows">
          <td class="centeredText"> {{ indices[key] + 1 }} </td>
          <td> {{ users[key].userName }} </td>
          <td class="centeredText"> {{ score }} </td>
	        <td><v-flex xs4>
            <v-btn v-if="userID.toString() == key.toString()" color="red" @click="deleteScore(key)">
              Delete
            </v-btn>
            <p v-else></p>
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
      i: 0,
      indices: {}
    }
  },    
    computed: {
      ...mapState(['scores', 'users', 'userID']),
    },
    methods: {
      ...mapActions(['createListeners', 'deleteScore']),    
        sort() {
          
          // Put Obj into array
          var ordered = [];
          for (var score in this.scores) {
            if (this.scores.hasOwnProperty(score)){ // JS safety net
              ordered.push(parseInt(this.scores[score]));
            }
          }
 
            // Selection Sort the array
          var n = ordered.length;
          var i = 0;
            for (var i = 0; i < n - 1; i++) {
              var minIndex = i;
              for (var j = i + 1; j < n; j++) {
                if (ordered[j] > ordered[minIndex]) {
                  minIndex = j;
                }
              }
              var t = ordered[minIndex];
              ordered[minIndex] = ordered[i];
              ordered[i] = t;
          }

          // Put ordered array into a new object
          // Set indices obj, which can look up the index from the uID key. 
          var orderedObj = {};
          for (var k = 0; k < n; k++) {
            for (score in this.scores) {
              if (parseInt(this.scores[score]) == ordered[k]) {
                orderedObj[score] = ordered[k];
                this.indices[score] = k;
              }
            }
          }
          return orderedObj;
        }
    },

    beforeMount() { // Called immediately
      this.createListeners();
    },
}
</script>
