import Vue from 'vue'
import Router from 'vue-router'
import FAQ from './views/FAQ.vue'
import Portfolio from './views/Portfolio.vue'
import Calc from './views/Calc.vue'
import Paslaugos from './views/Paslaugos.vue'

Vue.use(Router);

export default new Router ({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'home',
        component: Portfolio,
    },
    {
        path: '/faq',
        name: 'faq',
        component: FAQ,
    },
    {
        path: '/calc',
        name: 'calc',
        component: Calc,
    },
    {
        path: '/paslaugos',
        name: 'paslaugos',
        component: Paslaugos,
    },
]
})
