<template>
  <div class="container">
   
    <h1>{{ titre }}</h1>
    <img v-bind:src="urlImg" v-bind:style="nonStyle" alt="image de chat">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ContenuAPI",
  data: function () {
    return {
      titre: "Appel à une API",
      urlImg:null,
      height:null,
    };
  },
  methods:{
    
    
  },
  mounted() {
    axios.get('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        this.urlImg = response.data[0].url
        this.height = response.data[0].height
        console.log(response.data[0])
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {
                nonStyle: function() {
                    return {
                        
                        height: (this.height/2) + "px"
                    }; // on retourn un objet avec les propriété css qu'on a renseigne dans les data
                },

            }
  }
 

</script>
<style scoped>
.container{
  margin-top: 120px;
}

</style>
