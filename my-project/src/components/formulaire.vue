<template>
  <div class="container">
    <h2>{{ titre }}</h2>
    <form>
      <div class="form-group">
        <label for="prenom">Prenom</label>
        <input v-on:input="ToggleResult"
          type="text"
          id="prenom"
          class="form-control mb-3"
          v-model.lazy="formdata.prenom"
        />
      </div>
      <div class="form-group">
        <label for="txt">Ton texte</label>
        <textarea v-on:input="ToggleResult" id="txt" class="form-control" v-model="formdata.txt" />
      </div>
      <div class="form-group">
        <label for="number">Ton age</label>
        <input
          v-model.number="formdata.number"
          type="number"
          id="number"
          class="form-control"
        />
      </div>
      <h3>selectBox</h3>

      <select v-on:change="ToggleResult" v-model="formdata.select">
        <option v-bind:key="index" v-for="(pays, index) in formdata.listePays">
          {{ pays }}
        </option>
      </select>
      <h3 class="mt-3">checkBoxs</h3>
      <div class="form-check">
        <input
        v-on:input="ToggleResult"
          v-model="formdata.checkFruti"
          value="fraise"
          id="fraise"
          type="checkbox"
          class="form-check-input"
        />
        <label for="fraise">Fraise</label>
      </div>
      <div class="form-check">
        <input
        v-on:input="ToggleResult"
          v-model="formdata.checkFruti"
          value="Pomme"
          id="Pomme"
          type="checkbox"
          class="form-check-input"
        />
        <label for="Pomme">Pomme</label>
      </div>
      <div class="form-check">
        <input
        v-on:input="ToggleResult"
          v-model="formdata.checkFruti"
          value="Banane"
          id="Banane"
          type="checkbox"
          class="form-check-input"
        />
        <label for="Banane">Banane</label>
      </div>

      <button v-on:click.prevent="envoieForm" class="btn btn-primary mt-3">Emvoyer les donner</button>
    </form>
    <div v-if="infoSubmit">

      <h2 class="mt-3">resultat</h2>
      <div class="card p-3">
        <p>Prénom: {{ formdata.prenom }}</p>
        <p style="white-space: pre">Texte: {{ formdata.txt }}</p>
        <p>Age: {{ formdata.number }}</p>
        <p>Résultas checkBoxs</p>
        <ul>
          <li v-bind:key="index" v-for="(fruit, index) in formdata.checkFruti">
            {{ fruit }}
          </li>
        </ul>
        <p>choix du select: {{ formdata.select }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContenuAPI",
  data: function () {
    return {
      titre: "Notre formulaire de contact",
      formdata: {
        prenom: "",
        txt: "",
        number: 0,
        checkFruti: [],
        select: "",
        listePays: ["france", "espagne", "italie"
        ],
      },
        infoSubmit: false
    };
  },
  methods: {
    envoieForm: function () {
      this.infoSubmit = true;
    },
    ToggleResult: function () {
      this.infoSubmit = false;
    }
  },
};
</script>
<style scoped>
.container {
  margin-top: 120px;
}
</style>
