<template>
<v-container fluid>
    <h2>High Scores</h2>
    <v-layout column>
        
        <v-flex xs4>
            <v-text-field label="Search for a user"></v-text-field>
        </v-flex>
        <v-flex xs4>
            <v-btn color="success" @click="search">Search</v-btn>
        </v-flex>
    </v-layout>
</v-container>
</template>


<script>
    export default {
        name: 'MainPage',
        data: function() {
            return {
                //
            }
        },
        methods: {
            startLogin() {
                this.$router.push({path: '/Login'});
            },
            search() {
                //
            }
        }
    };
</script>