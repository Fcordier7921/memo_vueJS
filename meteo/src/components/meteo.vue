<template>
  <div>
    <div class="container">
      <h1 class="my-4">Appmétéo avec vue.js</h1>
      <div class="form-group">
        <label for="postiton">Entrer le non d'une ville</label>
        <input
          type="text"
          id="position"
          class="form-control"
          v-model="requete"
          v-on:keypress="goMeteo"
        />
        <div class="w-75 m-auto" v-if="temps">
          <h3 class="text-center mb-3 mt-5">Postion: {{ temps.name}}</h3>
          <div class="card text-center p-5">
            <p class="texte-affichage">Température: {{ temps.main.temp.toFixed()}}°</p>
            <p class="texte-affichage">Temps: {{ temps.weather[0].description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "meteo",
  data() {
    return {
      requete: "",
      temps: undefined,
      api_code: "b79e42930e4c5be1b4f1a7981dda1322",
      url_recherche: 'http://api.openweathermap.org/data/2.5/weather?',
    };
  },
  methods: {
    goMeteo(e) {
      if (e.key == "Enter") {
        axios
          .get(
            `${this.url_recherche}q=${this.requete}&units=metric&APPID=${this.api_code}&lang=fr`
          )
          .then((response) => {
            this.temps=response.data;
            this.requete=''
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style></style>
