import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './stores/index'

import axios from 'axios'
Vue.prototype.axios = axios

Vue.filter('setWH', (url, arg) => {
    return url.replace(/w\.h/, arg);
});
import Scroller from '@/components/Scroller/index'
Vue.component('Scroller', Scroller);


import Loading from '@/components/Loading/index'
Vue.component('Loading', Loading);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')