<template>
  <div class="details app">
 
     
    <div v-if="!load">
    <img  class="spinner" src="@/assets/loading.gif">
    </div>

    <div v-if="details.name && load">
      

    <h1> {{details.name}} </h1>
      <ul v-if="this.$route.params.page =='people' ">
        <li>
          Birth Year: {{details.birth_year}}
        </li>
        <li >
        Height: {{details.height}}
        </li>
        <li >
        Eye Color: {{details.eye_color}}
        </li>
        <li >
        Hair Color: {{details.hair_color}}
        </li>
        <li >
        Gender: {{details.gender}}
        </li>
      </ul>
         <ul v-if="this.$route.params.page =='planets' ">
           <li >
        Climate: {{details.climate}}
        </li>
        <li>
          Terrain: {{details.terrain}}
        </li>
        <li >
        Gravity: {{details.gravity}}
        </li>
        <li >
        Diameter: {{details.diameter}}
        </li>
        
      </ul>
      <ul v-if="this.$route.params.page =='starships' ">
           <li >
        Model: {{details.model}}
        </li>
        <li>
          Manufacturer: {{details.manufacturer}}
        </li>
        <li >
        Length: {{details.length}}
        </li>
        <li >
        Passengers: {{details.passengers}}
        </li>
        
      </ul>

    </div>
    <div v-if="!details.name && load">
        <h1>This data don't exist!</h1>
    </div>
  <router-link :to="{name : this.$route.params.page}"><button class="back">Go Back </button></router-link>
 
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  data: () => ({
    details: [],
    load :false
  }),
  created() {
    axios.get(`https://swapi.dev/api/${this.$route.params.page}/${this.$route.params.id}`).then((result) => {
      this.details = result.data;
      console.log(this.details);
      setTimeout (() => this.load=true , 1000);
    }).catch(() => {
      this.$router.push('/404');
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 1rem;
}
</style>
