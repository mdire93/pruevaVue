<template>

  <div class="app">
    
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  
}

</script>

<style>

@font-face {
  font-family: "starjout";
  src: url('/assets/font/starjout/Starjout.ttf') format("truetype");
}
h1{
     font-family: "starjout";
     font-size:40px;
     background: #2c3e50;
     color:#f1f1f1;
  } 
@media  (max-width: 600px) {
  h1 {
     font-size:30px;
  }
}
button{
  background:#f1f1f1;
  border-radius:4px;
}
.app {
  text-align: center;
  font-weight: bold;
  margin-left: 1rem;
  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
