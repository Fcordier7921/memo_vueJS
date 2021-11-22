<template>
  <div class="container-fluid">
   
    <h1 class="text-center">{{ txt }}</h1>
    <form  class="form-group m-5">
      <label for="action">Action</label>
      <input v-model="formData.tache" type="text" id="action" class="form-control">
    <button v-on:click.prevent="craetItem" class="btn btn-primary mt-3">Créer Un tache</button>
    </form>
    <ul>
      <li v-bind:key="index" v-for="(tache, index) in tableau" ><itemTode v-bind:id="index" :tache="tache" :suppression="suppression"></itemTode></li>
    </ul>

  </div>
</template>

<script>
import Item from './imtem.vue'

export default {
  name: "Contenu",
  data: function () {
    return {
      txt: "Rentrez des choses a faire.",
      formData: {
        tache: ""
      },
      tableau: [ "JavaScript", "Vue.js", "html" ]
  }
  },
  methods:{
   craetItem: function(){
     this.tableau.push(this.formData.tache);
     this.formData.tache = "";
   },
   suppression: function(e){
     this.tableau.splice(e.target.parentNode.id, 1);
     console.log(e.target.parentNode.id);
   }
   
    
  },
  components: {
    'itemTode': Item
  },
  

};
</script>
<style scoped>
h1{
  margin-top: 120px;
  width: 100%;
}
.container{
  width: 100vw;
}
ul{
  list-style: none;
  padding: 0;
}

</style>
