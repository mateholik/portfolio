import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './assets/scss/style.scss'


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');


// gtag('set', 'page', router.currentRoute.path);
// gtag('send', 'pageview');
//
// router.afterEach(( to, from ) => {
//     gtag('set', 'page', to.path);
//     gtag('send', 'pageview');
// });
