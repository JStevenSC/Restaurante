<template>
    <div class="carta">
        <b-row>
            <b-col md="5" class=" d-flex text-center  flex-column">
              <img alt="tomate" src="../assets/tomate.png" class="img-fluid" >
            </b-col>
            
            <b-col md="5" class="mt-1 d-flex flex-row text-left">
             
            <div class="my-3" >
                <b-card no-body>
                    <b-tabs card>
                        <b-tab title="Pasta" active>                            
                            <b-form-group label="Selecciona el sabor" >
                                <b-form-checkbox-group v-model="pasta" :options="pastas">
                                </b-form-checkbox-group>
                            </b-form-group>
                            <img alt="tomate" src="../assets/pasta.png" class="img-fluid my-3" >                            
                        </b-tab>
                        <b-tab title="Pizza">                        
                            <b-form-group label="Selecciona el sabor"  >
                                <b-form-checkbox-group v-model="pizza" :options="pizzas">
                                </b-form-checkbox-group>
                            </b-form-group>
                            <img alt="pizza" src="../assets/pizza.png" class="img-fluid my-3" >
                        </b-tab>
                        <b-tab title="Al Horno">                            
                            <b-form-group label="Selecciona el sabor"  >
                                <b-form-checkbox-group v-model="horno" :options="hornos">
                                </b-form-checkbox-group>
                            </b-form-group>
                            <img alt="alhorno" src="../assets/alhorno.png" class="img-fluid my-3" >
                        </b-tab>
                        <b-tab title="Bebida" >                            
                            <b-form-group label="Selecciona el sabor"  >
                                <b-form-checkbox-group v-model="bebida" :options="bebidas">
                                </b-form-checkbox-group>
                            </b-form-group>
                            <img alt="bebidas" src="../assets/bebidas.png" class="img-fluid my-3" >
                        </b-tab>
                    </b-tabs>
                    <b-button class="btn btn-danger"  @click="ordenar" >Ordenar</b-button>                                      
                </b-card>
                </div>      
            </b-col>      
            <b-col md="2" class="d-flex flex-row ">
              <img alt="fondo3" src="../assets/fondo3.png" >   
            </b-col> 
          </b-row>
      
    </div>

</template>

<script>
export default {
    data() {
      return {
        confirmar:false,
        pasta: [], 
        pastas: [
          { text: 'Salmon', value: 'orange' },
          { text: 'Al pesto', value: 'apple' },
          { text: 'Vegetales', value: 'pineapple' },
          { text: 'Alfredo', value: 'grape' }
        ],
        pizza: [], 
        pizzas: [
          { text: 'Pollo', value: 'orange' },
          { text: 'Peperoni', value: 'apple' },
          { text: 'Champiñon', value: 'pineapple' },
          { text: 'Queso', value: 'grape' }
        ],
        horno: [], 
        hornos: [
          { text: 'Hojaldre Arequipe', value: 'orange' },
          { text: 'Hojaldre Queso', value: 'apple' },
          { text: 'Cruasán', value: 'pineapple' },
          { text: 'Bruchetas', value: 'grape' }
        ],
        bebida: [], 
        bebidas: [
          { text: 'Fresa', value: 'orange' },
          { text: 'Mango', value: 'apple' },
          { text: 'Manzana', value: 'pineapple' },
          { text: 'Piña', value: 'grape' }
        ]
      }
    },
    methods:{
        ordenar(){
            //alert('Se deben llenar todo los Campos Correctamente');
            this.confirmar= confirm("Esta seguro  de continuar con su Orden");
            if(this.confirmar){
                console.log(this.pasta)
                console.log(this.pizza)
                console.log(this.horno)
                console.log(this.bebida)
                }
        }
    }
  }
</script>



<style>
.carta{
    background-image: url("../assets/fondo2.png");
}


</style>