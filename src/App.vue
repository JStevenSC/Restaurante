<template>
  <div id="app">
    <nav >
  
      <b-row class="d-flex flex-row" >
        <b-col md="2" >
          <img alt="Vue logo" src="./assets/encanto.png">
        </b-col>
        <b-col md="7" class=" d-flex text-center  flex-column">
          
        </b-col>
        <b-col md="3" class=" d-flex text-center  flex-column justify-content-center">
          <div class="d-flex flex-row justify-content-center">

            <router-link  to="/">Historia</router-link>&nbsp;&nbsp;
            <router-link to="/reserva">Reserva</router-link>&nbsp;&nbsp; 
            <router-link to="/orden">Carta</router-link>
          </div>
        </b-col>
      </b-row>
    </nav>
    <router-view/>
  </div>
</template>

<script>


export default{
  name: 'App',
}



</script>


<style lang="scss">
#app {
  font-family: Avenir, Arial;
  color: #070707;
}

nav {
  padding: 20px;
  background-color: #816474a2;
  background-image: linear-gradient(to left,rgb(3, 63, 71),rgb(6, 113, 128));
  background-image: linear-gradient(to left,rgb(204, 69, 76),rgb(207, 44, 53));

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: rgb(206, 201, 201);
    }
  }
}
</style>
