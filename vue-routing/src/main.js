import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router' //on importe le composent vueRouteur (npm install vue-route)
import Routes from './Routes' //importer les route qu'on a créer

Vue.config.productionTip = false

Vue.use(VueRouter) //cela permet d'utiliser des outil de l'environement vue, et en plus de les utiliser qu'un seul fois (si on en cree plusieur)

const router = new VueRouter({
    routes: Routes, //on relier les route au routeru qu'on a créer
    mode: 'history'
})

new Vue({
    render: h => h(App),
    router: router //on l'utilise dans l'instance qui gére toute l'aplication
}).$mount('#app')