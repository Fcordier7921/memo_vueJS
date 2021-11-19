<template>
<div>
    <ul class="liste mt-5">
        <li v-for="(film, index) in myArr" v-bind:key="index">
        <div class="card">
            <div class="card-body">

            titre: {{ film.titre }} 
            <br>
            Date: {{ film.date }}
            </div>
            </div>
        </li>
    </ul>

    <p>{{ txtBis }}</p>
    <p>{{ prenom }}</p><!--ce que l'on veux envoyer au parent -->
    <div v-on:click="deleteFilm" class="btn btn-danger m-2"> Suprimer le film</div>
    <div v-on:click="deletetxt" class="btn btn-danger m-2"> Suprimer le film</div>
    <div v-on:click="ChangeTitre" class="btn btn-danger m-2"> modifier le tite</div>
    <!--le valaeur contenue dans un tableau ou un objet quand on fait une action elle se répercutre sur tout les compoent qui on été créet , tandi que les autre valeur reste atache a un componet -->
    <br>
<slot>envoyer</slot><!--si le parent veux rajouter du contenu entre les balise liste qui est dans le compenents liste-->
<slot name="info"></slot>
</div>
</template>
<script>
import {bus} from '../../main'

export default {
    name:'liste',
    data(){
        return {
            fruits:['orange', 'papaye', 'pomme', 'fraise']
        }
    },
    methods:{
        deleteFilm(){
            this.myArr.pop();
        },
        deletetxt(){
            this.txtBis="";
        },
        ChangeTitre(){
            this.$emit('changetitre', 'Mon nouveau titre');
            bus.$emit('changetitre', 'titre changer avec le bus');
        }
    },
     props:['myArr', 'txtBis']
    // {
    //     prenom:{
    //         type:String,//on peut passe un fonction ou un objet ou un tableau ou un string etc
    //         required:true
    //     }//les propriété qu'on veux envoyer au parent
    // }, 
    //
    
}
</script>
<style scoped src="./liste.css">

</style>