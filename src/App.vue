<template>
  <div id="app">
    <nav >
  
      <b-row class="d-flex flex-row" >
        <b-col md="1" class=" d-flex text-center  flex-column">
        </b-col>
        <b-col md="2" >
          <img alt="Vue logo" src="./assets/encanto.png">
        </b-col>
        <b-col md="5" class=" d-flex text-center  flex-column">
          
        </b-col>
        <b-col md="3" class=" d-flex text-center  flex-column justify-content-center">
          <div class="d-flex flex-row justify-content-center">
            
            <router-link  to="/">Historia</router-link>&nbsp;&nbsp;&nbsp;
            <router-link to="/reserva">Reserva</router-link>&nbsp;&nbsp;&nbsp;
            <router-link to="/orden">Carta</router-link>&nbsp;&nbsp;&nbsp;
            <router-link  to="/admin">Administrador</router-link>
          </div>
        </b-col>
      </b-row>
    </nav>
    <router-view/>

    <footer>
      <b-row class="d-flex flex-row">
        <b-col md="1"></b-col>
        <b-col  md="3" class="mx-2">
          <p>🌎Ubicados</p>
          <p>🗺️ Medelin: Calle 10 #3-2</p>
          <p>🗺️ Laureles: Calle 34 #3-2</p>
        </b-col>
        <b-col md="4">
          <p>📬 Redes</p>
          <p>📳 <a href="elencanto@pizza.com">elencanto@pizza.com</a> </p>
          <p> 📧 <a href="elencanto.instagram.com ">elencanto.instagram.com </a></p> 
         
        </b-col>
        <b-col   class="d-flex flex-column">          
          <p>🛺 Domicilios </p>
          <p> 📠 Wpp: 3122057069</p>
          <p> 📆 Miércoles-Domingo 1-10pm</p> 
        </b-col>
      </b-row>         
    </footer>

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
  padding: 10px;
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

footer{
  font-family: Avenir, Arial;
  color: #ffffff;
  line-height: 7px;
  padding: 30px;
  text-align: left;
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
