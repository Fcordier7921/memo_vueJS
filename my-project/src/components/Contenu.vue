<template>
  <div class="container">
    {{ txt }}

    <br />
    <div class="contenaire-onglet">
      <div class="container-button">
        <div class="btn btn-outline-primary" v-on:click="toggleOng1">
          onglet 1
        </div>
        <div class="btn btn-outline-primary" v-on:click="toggleOng2">
          onglet 2
        </div>
      </div>
      <div class="card " v-if="toggle1">
        <texte-1 class="p-5" ></texte-1>
      </div>
      <div class="card " v-if="toggle2">
        <texte-2 class="p-5"></texte-2>
      </div>
    </div>
    <br />
    <div class="contenaire-onglet">
      <div class="container-button">
        <div class="btn btn-outline-primary" v-on:click="component='texte1'">
          onglet 1
        </div>
        <div class="btn btn-outline-primary" v-on:click="component='texte2'">
          onglet 2
        </div>
      </div>
      <div class="card">
        <component class="p-5" v-bind:is="component" ></component>
      </div>
    </div>

    
  </div>
</template>

<script>
import txte1 from "./texte1.vue";
import txte2 from "./texte2.vue";


export default {
  name: "Contenu",
  data: function () {
    return {
      txt: "Je suis le composant",
      toggle1: true,
      toggle2: false,
      component: 'texte1',
      
    };
  },
  methods:{
    toggleOng1: function(){
      this.toggle1= true;
    this.toggle2= false;
    },
    toggleOng2: function(){
      this.toggle1= false;
    this.toggle2= true;
    },
    
    
  },
  components: {
    'texte1': txte1,
    'texte2': txte2,
    
  },
};
</script>
<style scoped>
.container {
  margin: 100px;
}
.contenaire-onglet {
    margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-collapse: collapse;
  border: 2px solid black;
  border-top: none;
  border-right: none;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
.container-button {
  flex-direction: row;

  border-collapse: collapse;
  border: none;
}

.btn {
  border: none;
  border-right: 2px solid black;
  border-top: 2px solid black;
  border-radius: 0;
  border-top-right-radius: 5px;
}
.card{
    border:none;
    border-right: 2px solid black;
    border-top: 2px solid black;
    border-top-right-radius: 5px;
    border-top-left-radius: 0;
}
.modale[data-v-4a58341b]{
    z-index: 15!important;
}
</style>
