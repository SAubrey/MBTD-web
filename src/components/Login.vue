<template>
<v-container fluid>
    <h2>Login</h2>
    <v-layout column>
        <v-flex xs4>
            <v-text-field label="Username" v-model="userName"></v-text-field>
        </v-flex>
        <v-flex xs4>
            <v-text-field label="Password" v-model="password"></v-text-field>
        </v-flex>
        <v-flex xs4>
            <v-btn color="success" @click="login">Login</v-btn>
        </v-flex>
    </v-layout>
</v-container>

</template>

<script>
    export default {
        name: 'Login',
        
        data: function() {
            return {
                userName: null,
                password: null
            }
        },
        
        methods: {
            login() {
                //this.$router.push({path: '/'});
                //this.$store.commit('SET_LOGIN_PROGRESS', true);
                this.$store.dispatch('authenticate', {
                    userName: this.userName,
                    password: this.password
                });
            }
        }
    };
</script>
