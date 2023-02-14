<template>

    <div>
        <b-row>
                      
            <b-col md="5" class=" d-flex text-center  flex-column">
                <img alt="tomate" src="../assets/tomate.png" class="img-fluid" >
                
              </b-col>
              
            <b-col md="5" >
              <div class="border border-dark my-5 mx-5 rounded d-flex flex-column">
                <h4 class="mx-3 my-4" >Administrador:</h4>
    
                  <form name="form" class="mx-2 my-2">
                    <div class="text-left d-flex flex-column">
                      <p >
                        Nombre: <input type="text" name="nombre" placeholder="Nombre" class="form-control " v-model="administrador.nombre" autocomplete="off"/>
                      </p>                   
                      <p >
                        Contraseña: <input type="password" name="nombre" placeholder="Contraseña" class="form-control " v-model="administrador.contrasena" autocomplete="off"/>
                      </p>
                      <div>
                      <!-- <input type="submit1"  title="Ingresar" value="Ingresar" class="btn btn-danger my-4 mx-3" @click="showModal" /> -->
                      </div>
                    </div>
    
                  </form>
                  <div>
                  <b-button class="btn btn-danger d-flex flex-row my-2 mx-2 "  @click="showModal" >Ingresar</b-button>
                </div>              
    
                <div>
                  <b-modal ref="modal-1" title="Bienvenido" size="xl"  hide-footer >
                    <!-- <TablaDatos :msg="array" /> -->
                    <TablaDatos :msg=entrada />
                  </b-modal>
                </div>
              </div>   
            </b-col>          
           
            <b-col md="2" class="d-flex flex-row ">
                <img alt="fono3" src="../assets/fondo3.png" >   
            </b-col> 
        </b-row>
    </div>
  
</template>

<script>

import TablaDatos from '@/components/TablaDatos.vue'

export default {
    data() {
      return{
        array:[],
        entrada:[ { "nombre": "Juan", "tipodocumento": "TI", "identificacion": "1233", "email": "carlos.jssc@gmail.com", "fecha": "2023-02-14", "cantidadpersonas": "2", "tiporeserva": "Onces", "descripcion": "Reunion" }, 
                  { "nombre": "Carlos", "tipodocumento": "CC", "identificacion": "7896", "email": "steven.jssc@gmail.com", "fecha": "2023-02-15", "cantidadpersonas": "12", "tiporeserva": "Almuerzo", "descripcion": "cita" },
                  { "nombre": "Pedro", "tipodocumento": "Pasaporte", "identificacion": "7896", "email": "steven.jssc@gmail.com", "fecha": "2023-02-15", "cantidadpersonas": "12", "tiporeserva": "Almuerzo", "descripcion": "Amigos" },
                  { "nombre": "Camila", "tipodocumento": "Otro", "identificacion": "7896", "email": "steven.jssc@gmail.com", "fecha": "2023-02-15", "cantidadpersonas": "12", "tiporeserva": "Cena", "descripcion": "cita" },
                  { "nombre": "Andre", "tipodocumento": "TI", "identificacion": "7896", "email": "steven.jssc@gmail.com", "fecha": "2023-02-15", "cantidadpersonas": "12", "tiporeserva": "Almuerzo", "descripcion": "otros" },
                  { "nombre": "Julian", "tipodocumento": "CC", "identificacion": "7896", "email": "steven.jssc@gmail.com", "fecha": "2023-02-15", "cantidadpersonas": "12", "tiporeserva": "Onces", "descripcion": "cita" },
                  { "nombre": "Steven", "tipodocumento": "CC", "identificacion": "7896", "email": "steven.jssc@gmail.com", "fecha": "2023-02-15", "cantidadpersonas": "12", "tiporeserva": "Cena", "descripcion": "Fiesta" } ],
        ensayo:"se envia el dato",
        submited:false,
        selected:"",
       
        administrador:{
          nombre:"",
          contrasena:""
      }
      }
    },
    components: {
        TablaDatos,
      },
    methods:{        
      showModal() {
        if(this.administrador.nombre === "juan"  && this.administrador.contrasena === "123"){
        this.$refs['modal-1'].show()
        }
        else {
            alert('Administrador o Contraseña incorrecta')
        }
        },
    }


}
</script>

<style>

</style>