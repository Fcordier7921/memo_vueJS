<template>
  <div id="app">
<header-top></header-top>
     <router-view></router-view><!--router-view permet de faire un switch entre les differentes routes-->
  </div>
</template>

<script>
import Header from './components/header.vue'

export default {
  name: 'App',
  components: {
    'header-top': Header
}
}
</script>

<style>

</style>
