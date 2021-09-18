<template>

  <div class="app">

    
    <h1>STAR WARS API</h1>
      <section class="listitems">
        <router-link to="/people"> <button class="btn-list">People</button> </router-link>
        <router-link to="/starships"> <button class="btn-list">Starships</button></router-link>
        <router-link to="/planets"> <button class="btn-list">Planets</button></router-link>
      </section>

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}

</script>

<style scoped>

.listitems{
  display: flex;
  flex-direction: column;
}

.btn-list:hover {
  background: #212020;
  color: #f1f1f1;

}
.btn-list{
  cursor:pointer;
  width: 10rem;
  padding:2rem;
  margin-bottom: 1rem;
}

</style>
