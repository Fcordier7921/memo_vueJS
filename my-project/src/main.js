import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//bis a évenement
export const bus = new Vue();
import Contenu from './components/Contenu.vue' //on importe notre component

Vue.component('contenu', Contenu); //on permet de 

Vue.config.productionTip = false

new Vue({
        render: h => h(App),
    }).$mount('#app')
    //per met de créer des élément a partire de l'app.vue