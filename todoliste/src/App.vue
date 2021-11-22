<template>
  <div id="app">
     <headerTodo></headerTodo>
    <contenu></contenu>
  </div>
</template>

<script>
import HelloWorld from './components/Contenu.vue'
import headerTodo from './components/header.vue'

export default {
  name: 'App',
  components: {
    'contenu':HelloWorld,
    'headerTodo': headerTodo
  
  }
}
</script>

<style>
#app{
  width: 100vw;
  
}
</style>
