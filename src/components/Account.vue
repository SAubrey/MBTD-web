<template>
<v-container fluid>
    <h2>Account</h2>
    <v-layout column>
        <v-flex xs4>
            <h3>Your accumulated run data</h3>
        </v-flex>
        <v-flex xs4>
            <v-btn @click="goHome"> Return</v-btn>
        </v-flex>
    </v-layout>
</v-container>
</template>


<script>
    export default {
        name: 'Account',
        data: function() {
            return {
                //
            }
        },
        methods: {
            goHome() {
                this.$router.push({path: '/'})
            }
            
        }
    };
</script>