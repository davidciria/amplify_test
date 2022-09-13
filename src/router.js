import { createWebHistory, createRouter } from 'vue-router';
import LoginComponent from "./views/login.vue"
import SecureComponent from "./views/secure.vue"

const routes = [
    {
        path: '/',
        redirect: {
            name: "secure"
        }
    },
    {
        path: "/login",
        name: "login",
        component: LoginComponent
    },
    {
        path: "/secure",
        name: "secure",
        component: SecureComponent,
        children: [
            {
                path: "/login/login",
                component: LoginComponent
            }
        ]
    }
]

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;