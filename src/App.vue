<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click="logout()" replace>Logout</router-link>
        </div>
        <router-view :usernamefk="mockAccount.username" :response="data" :passwordfk="mockAccount.password" @authenticated="setAuthenticated" />
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "nraboy",
                    password: "password"
                },
                data: "null"
            }
        },
        mounted() {
            axios.get("https://api.genderize.io/?name=cristina").then(resp => {
                console.log(resp['data']['gender'])
                this.data = resp['data']['gender']
            });
            console.log("mounted");
            var auth = localStorage.getItem("authenticated");
            if(!auth){
                auth = false;
            }

            console.log(auth);
            if(auth == "false") {
                this.$router.push({ name: "login" });
            }else{
                this.authenticated = true;
                this.$router.push({ name: "secure"});
            }
        },
        methods: {
            setAuthenticated(status, message) {
                console.log("Set auth executed", message);
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
                localStorage.setItem("authenticated", false);
            }
        }
    }
</script>

<style>
    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 1024px;
        margin: auto;
    }
</style>