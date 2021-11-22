<template>
  <div>
    <h1>le poste numéro {{ id }}</h1>
    <div>
      <h2>{{ artucleUnique.title }}</h2>
      <br />
      <p>{{ artucleUnique.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "post",
  data() {
    return {
      id: this.$route.params.id,
      artucleUnique: [],
    };
  },
  mounted() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then((response) => {
        this.artucleUnique = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
