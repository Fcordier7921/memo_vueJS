<template>
  <div id="app">
    <meteo></meteo>
  </div>
</template>

<script>
import meteo from './components/meteo'

export default {
  name: 'App',
  components: {
    'meteo': meteo
  }
}
</script>

<style>
body{
  background-color: #43c6ac;
  background: linear-gradient(to right, #f8ffae, #43c6ac)
}

</style>
