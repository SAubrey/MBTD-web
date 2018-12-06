<template>
<v-container fluid>
    <h2 class="centered">High Scores</h2>
    <v-layout column>

      <table id="mainTable">
        <tr class="header">
          <th>Rank</th><th>User</th><th>Score</th><th>Delete</th>
        </tr>
        <template v-for="(score, key) in this.scores">
        <tr class="rows">
          <td> {{ i }} </td>
          <td> {{ users[key].userName }} </td>
          <td> {{ score }} </td>
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
      i: 0
    }
  },    
    computed: {
      ...mapState(['scores', 'users', 'userID']),
    },
    methods: {
      ...mapActions(['createListeners', 'deleteScore']),    
        order() {
          /*
          var arr = [];
         // var unsArr = [];
         //console.log()
          for (score in this.scores) {
            console.log(score);
            arr.push(score.val());
          }

          // Selection Sort
          arr[0] = 0;
          var n = this.scores.length;
          var i = 0;
            for (var i = 0; i < n - 1; i++) {

              var minIndex = i;
              for (var j = i + 1; j < n; j++) {
                if (arr[j] > arr[minIndex]) {
                  minIndex = j;
                }
              }

              var t = arr[minIndex];
              arr[minIndex] = arr[i];
              arr[i] = t;
          }
          return arr;
          */
        }
    },

    beforeMount() { // Called immediately
      this.createListeners();
    },
}
</script>
