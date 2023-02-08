<template>
  <div class="reserva">
    
    <b-row>
      <b-col md="5" class=" d-flex text-center  flex-column">
        <img alt="tomate" src="../assets/tomate.png" class="img-fluid" >
      </b-col>
      
      <b-col md="5" class="mt-3 d-flex flex-row text-left">
        <div class=" d-flex  flex-column justify-content-center">
          <!-- <img alt="Vue logo" src="../assets/encanto.png" class=" d-flex text-center  flex-column justify-content-center"> -->
          <b-container class="border border-dark   rounded "  fluid="md">
            <h2 class="d-flex  justify-content-center my-2" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Realiza tu Reserva&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
            <form name="form" v-on:submit.prevent="procesar" class="my-4 mx-4">
              
                <p class="text-left">
                  Nombre Completo: <input type="text" name="nombre" placeholder="Nombre" class="form-control" v-model="contacto.nombre" autocomplete="off"/>
                </p>
                <div class="alert alert-danger" v-if="!$v.contacto.nombre.minLength"  >El campo esta incompleto</div>
                <p>
                  Tipo de Documento:
                  <select v-model="contacto.tipodocumento" class=" container-fluid  d-flex flex-row">
                    <option disabled value="">Tipo de Documento:</option>
                    <option>CC</option>
                    <option>TI</option>
                    <option>Pasaporte</option>
                    <option>Otro</option>
                  </select>
                </p>

                <p>
                  Identificacion: <input type="number" name="nombre" placeholder="Identificacion" class="form-control" v-model="contacto.identificacion" autocomplete="off"/>
                </p>
                <div class="alert alert-danger" v-if="!$v.contacto.identificacion.minLength"  >El campo esta incompleto</div>
                <p>
                  E-mail: <input type="email" name="nombre" placeholder="E-mail" class="form-control" v-model="contacto.email" autocomplete="off"/>
                </p>
                <div class="alert alert-danger" v-if="!$v.contacto.email.minLength"  >El campo esta incompleto</div>
                <p>
                  Fecha de Reserva: <input type="date" name="nombre" placeholder="Fecha de Reserva" class="form-control" v-model="contacto.fecha" autocomplete="off"/>
                </p>      
                <p>
                  Cantidad de Personas: <input type="number" name="nombre" placeholder="Cantidad de Personas" class="form-control" v-model="contacto.cantidadpersonas" autocomplete="off"/>
                </p>
                <p>
                  Tipo de Reserva:
                  <select v-model="contacto.tiporeserva" class=" container-fluid  d-flex flex-row">
                    <option disabled value="">Tipo de Reserva:</option>
                    <option>cena</option>
                    <option>Almuerzo</option>
                    <option>Onces</option>
                    <option>Cumpleaños</option>
                    <option>Ocasion Especial</option>
                  </select>
                </p>
                <p>
                  Descripcion y/o observciones: <textarea rows="2" type="text" name="nombre" placeholder="Descripcion" class="form-control" v-model="contacto.descripcion" autocomplete="off"/>
                </p>
                
                <input type="submit" value="Enviar" title="Enviar" class="btn btn-danger" />
            
            </form>
          </b-container>
        </div>        
      </b-col>

      <b-col md="2" class="d-flex flex-row ">
        <img alt="fono3" src="../assets/fondo3.png" >   
      </b-col> 
    </b-row>


    <div>
      <b-row>
        <b-col md="2">          
        </b-col>
        <b-col md="8" >
          <div class="border border-dark my-5 mx-5 rounded d-flex ">
            <h4 class="mx-3 my-4" >Administrador:</h4>

              <form name="form" class="mx-2 my-2">
                <div class="text-left d-flex flex-row">
                  <p >
                    Nombre: <input type="text" name="nombre" placeholder="Nombre" class="form-control " v-model="administrador.nombre" autocomplete="off"/>
                  </p>                   
                  <p class="mx-2">
                    Contraseña: <input type="password" name="nombre" placeholder="Contraseña" class="form-control mx-2" v-model="administrador.contrasena" autocomplete="off"/>
                  </p>
                  <div>
                  <!-- <input type="submit1"  title="Ingresar" value="Ingresar" class="btn btn-danger my-4 mx-3" @click="showModal" /> -->
                  
                  </div>
                </div>

              </form>
              <div>
              <b-button class="btn btn-danger d-flex flex-row  mt-4 mx-2 "  @click="showModal" >Ingresar</b-button>
            </div>
             

            <div>
              <b-modal ref="modal-1" title="Bienvenido" size="xl"  hide-footer >
                <TablaDatos :msg="array" />
              </b-modal>
            </div>
          </div>   
        </b-col>
        <b-col md="2">
          
        </b-col>
    </b-row>
  </div>
</div>

  
</template>

<script>

import TablaDatos from '@/components/TablaDatos.vue'

  import {
    required, 
    minLength
  } from 'vuelidate/lib/validators';

  export default {
    data() {
      return{
        array:[],
        ensayo:"se envia el dato",
        submited:false,
        selected:"",
        contacto:{
          nombre:"",
          tipodocumento:"",
          identificacion:"",
          email:"",
          fecha:"",
          cantidadpersonas:"",
          tiporeserva:"",
          descripcion:""
        },
        administrador:{
          nombre:"",
          contrasena:""
      }
      }
   
    },
    components: {
        TablaDatos,
    
  },

    methods: {
      procesar(){
        this.submited= true;
        if(this.$v.$invalid){
          alert('Se deben llenar todo los Campos Correctamente');
        }
        else {
          alert('Reserva Realizada Exitosamete')
          this.array.push(this.contacto)
          console.log(this.contacto)
          console.log(this.array) 
          this.contacto={        
        }
      }
        
      },

      showModal() {

      if(this.administrador.nombre === "juan"  && this.administrador.contrasena === "123"){
        this.$refs['modal-1'].show()
      }
      else {
          alert('Administrador o Contraseña incorrecta')
        }
        
      },
    
      procesar1(){       
        alert('Se deben llenar todo los Campos Correctamente');
      
      },
    },

    
    validations: {
      contacto: {
        nombre: {
          required,
          minLength : minLength(4),
        },
        tipodocumento:{
          required,
          minLength : minLength(2),
        },
        identificacion:{
          required,
          minLength : minLength(4),
        },
        email:{
          required,
          minLength : minLength(4),
        },
        fecha:{
          required,
          minLength : minLength(4),
        },
        cantidadpersonas:{
          required,
          minLength : minLength(1),
        },
        descripcion:{
          required,
          minLength : minLength(4),
        },
        
      }
    },
     
  
  }
</script>



<style>

#encanto {
  font-family: monospace;
  color: #2e1d61;
}
.reserva{
  background-color: rgba(0, 217, 255, 0.171);

  background-image: linear-gradient(to left,rgba(251, 251, 251),#ffffff);
  background-image: url("../assets/fondo2.png");
 /* background-repeat: no-repeat;
  background-position: right top;*/
  
}

</style>