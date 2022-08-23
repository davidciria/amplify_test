<template>
    <div id="login">
        <h1>Login</h1>
        <div><input type="text" name="username" v-model="input.username" placeholder="Username" /></div>
        <div><input type="password" name="password" v-model="input.password" placeholder="Password" /></div>
        <div><button type="button" v-on:click="login()">Login</button></div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        props: ["usernamefk", "passwordfk", "response"],
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        emits:['authenticated'],
        watch: {
            response() {
                this.input.username = this.response;
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    console.log(this.usernamefk)
                    if(this.input.username == this.usernamefk && this.input.password ==this.passwordfk) {
                        this.$emit("authenticated", true, "hello");
                        localStorage.setItem("authenticated", true);
                        this.$router.push({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>