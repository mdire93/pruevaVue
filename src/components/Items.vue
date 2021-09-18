<template>
  <div class="people app">

    <h1>{{ page.charAt(0).toUpperCase()+page.slice(1)}} </h1>
    
    <div v-if="!load">
    <img  class="spinner" src="@/assets/loading.gif">
    </div>
    <div v-if="load">
        
        <input type="search" name="filter" placeholder="Filter...." v-model="myfilter">
      
      <ul>
          <li v-for="(person,index) of filteredPeople" :key="person.name">
         <router-link :to="{name: 'details', params: { page: page, id : index+1 }}"> {{person.name}} 
           </router-link>
          </li>
      </ul>

    </div>
  <router-link to="/"><button class="back">Go Back </button></router-link>
 
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  data: () => ({
    people: [],
    filteredPeople: [],
    page: '',
    id: '',
    myfilter: '',
    load: false
  }),
  created() {
    axios.get(`https://swapi.dev/api/${this.$route.name}`).then((result) => {
      this.page=this.$route.name;
      this.people = result.data.results;
      this.filteredPeople = [...this.people];
     setTimeout(() => this.load = true, 1000);

    })
  },
  watch: {
    myfilter: function(){
      const filter= this.people.filter( person =>
      person.name.toLowerCase().includes(this.myfilter.toLowerCase()))
      this.filteredPeople = [...filter]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
    text-decoration: none;
    cursor:pointer;
}

a:hover {
  color: #2c3e50;
}
ul {
  list-style-type: none;
  padding: 0;
  
}
li {
  margin: 1rem;
}

</style>
