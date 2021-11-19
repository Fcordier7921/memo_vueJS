<template>
  <div id="app">
    <header-top></header-top>
    <contenu></contenu><!--afficher le composant globale-->
    <contenu2></contenu2>
  </div>
</template>

<script>

import Contenu2 from './components/excontenu.vue'
import Header from './components/Header.vue'


export default {
  name: 'App',
  components: {
    'contenu2': Contenu2,
    'header-top': Header
    
  }
}
</script>

<style>

</style>
