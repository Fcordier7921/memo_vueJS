<template>
    <div class="container">
        <h1>{{ titre }}</h1>
        <p>
            {{ txt }}
        </p>

     <liste v-bind:myArr="myArr" :txtBis="txtBis"  v-on:changetitre="changetitre($event)"></liste><!--l'affichare de la" propriété recu de l'enfant -->
    <liste v-bind:myArr="myArr" :txtBis="txtBis">rajouter par la balise slot</liste><!--l'affichare de la" propriété recu de l'enfant-->
    <liste v-bind:myArr="myArr" :txtBis="txtBis"  v-on:changetitre="changetitre($event)">
        <p>sdkjlfnlsjkfdgvndkf</p>
        <template v-slot:info>

            <h1>le contenu de mon slot nomé</h1>
        </template></liste><!--l'affichare de la" propriété recu de l'enfant-->
    <liste v-bind:myArr="myArr" :txtBis="txtBis"></liste><!--l'affichare de la propriété recu de l'enfant-->

    <modale :revele="revele" :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success">Ouvre la modale</div>
    </div>
</template>
<script>

import liste from './liste/liste.vue'
import Modale from "./madal.vue";

export default {
    name: 'Contenu2',
    data: function(){
        return {
            txt:'Je suis le composant 2',
            prenom:'toto',//la valeur de la propriété recu de l'enfant passer tout on peut itére dans un objet ou un tableau etc
            myArr:[
                {titre:'inception', date: 2010},
                {titre:'Avatar', date: 2009},
                {titre:'seven', date: 1995}
            ],
            txtBis:'Je suis le meilleur',
            titre:"je suis le titre",
            revele: false,
        }
    },
    methods:{
        // changetitre: function(nvTitret){
        //     this.titre=nvTitret;
        // }
        toggleModale: function() {
      this.revele = !this.revele;
    }
    },
    
    components: {
        'liste': liste,
        'modale': Modale
    }
}
</script>
<style  scoped>
h1{
    margin-top: 100px!important;
}

</style>