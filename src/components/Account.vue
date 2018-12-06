<template>
<v-container fluid>
    <h2 class="centered">Account</h2>
    <v-layout column>
        <h3>Add a run</h3>
        <v-flex>
            <v-text-field label="Score" v-model="score"></v-text-field>
        </v-flex>
        <v-flex>
            <v-btn @click='add'>Add</v-btn>
        </v-flex>

        <v-spacer></v-spacer>       
        
        <v-flex xs4>
            <v-btn class="centered" @click="goHome"> Return</v-btn>
        </v-flex>
    </v-layout>
</v-container>
</template>


<script>
import { mapState, mapActions } from 'vuex';

    export default {
        name: 'Account',
        data: function() {
            return {
                score: 0,
            }
        },

        computed: {
            ...mapState(['scores', 'userID'])
        },

        methods: {
            ...mapActions(['addScore']),

            goHome() {
                this.$router.push({path: '/'});
            },

            add() {
                if (this.validateInput()) {
                    this.addScore(this.score);
					this.score = 0;
                }
            },

            validateInput() {
                //https://stackoverflow.com/questions/1303646/check-whether-variable-is-number-or-string-in-javascript
                if (this.score < 1 || this.score > 10000 || !(/^-?[\d.]+(?:e-?\d+)?$/.test(this.score))) {
                    alert("Oops! Score must be a number between 1 - 10,000");
                    return false;
                } else {
                    return true;
                }
            },

            checkLoggedOut() {
            if (this.userID == null) {
                this.goHome();
            }
            }
        },

        updated() {
            this.checkLoggedOut();
        }
    };
</script>