<template>
<div>

  <h1>voici page 2</h1>
  <div v-on:click="goDebut" class="btn btn-warning">Retour au Début</div>
</div>
</template>

<script>


export default {
  name: 'page2',
  methods: {
    goDebut: function () {
      this.$router.push('/');
    }
  },
  
}
</script>

<style>
