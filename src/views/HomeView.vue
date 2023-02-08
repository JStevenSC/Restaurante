<template>
  <div class="carta">
      <b-row>
          <b-col md="5" class=" d-flex text-center  flex-column">
            <img alt="tomate" src="../assets/tomate.png" class="img-fluid" >
          </b-col>
          
          <b-col md="5" class="mt-1 d-flex flex-column text-left">
           
            <h1 class="mx-1 my-1">¿Quiénes Somos?</h1>
            <img alt="Quienes somos" src="../assets/quienessomos.png" > 
            <p class="mx-1 my-2 texto">
              Somos una Familia apasionada por la gastronomía y el buen servicio, que nos gusta rodearnos 
              con gente de los mismos gustos para disfrutar de atenderle de la mejor manera.
              Como restaurante nacimos el primero de Julio del 2013, después de haber 
              disfrutado todos  las recetas  familiares y decidido mostrarlos al mundo. 
            </p>
            <h4 class="my-1" >Misión</h4>
            <p class=" texto my-1">
            Superar las expectativas de nuestros clientes de forma tal que nuestro nombre sea conocido como una experiencia memorable
            Ser opción destacable y diferente.
            Mantener una excelente calidad en nuestros platos.
            </p>
            <h4 class="my-1">Visión</h4>
            <p class=" texto my-1">
            Ser reconocidos entre los mejores restaurantes a nivel local y nacional por nuestra oferta gastronómica, ambiente y atención.
            </p>
                       
          </b-col>
    
          <b-col md="2" class="d-flex flex-row ">
            <img alt="Vue logo" src="../assets/fondo3.png" >   
          </b-col> 
        </b-row>
    
  </div>

</template>

<script>
export default {

}
</script>

<style>
.carta{
  background-image: url("../assets/fondo2.png");
}
.texto{
  text-align: justify;
}


</style>