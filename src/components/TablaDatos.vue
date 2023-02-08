<template>
    <div>
        <b-container fluid>
            <div class="mx-3" >
                <b-card no-body>
                  <b-tabs card>
                    <b-tab title="Reservas" active>
                      <b-card-text> 
                        
                   

                       
                      
                      <b-input v-model="filter" placeholder="Filtrar Tabla"></b-input>

                      
                                        
                      </b-card-text>
                      <div>
                        <b-table striped small  :items="msg" :fields="fields" :filter="filter" ></b-table>
                      </div>
                    </b-tab>

                    



                    <b-tab title="Pedidos" >
                      <b-card-text>Pedidos</b-card-text>
                      <h1>{{ msg }}</h1>
                    </b-tab>
                  </b-tabs>
                </b-card>
              </div>
        </b-container>
      </div>
      
</template>

<script>

import { BTabs } from 'bootstrap-vue'
import { BIcon, } from "bootstrap-vue";

export default {
  name: 'TablaDatos',
  props: {
    msg: []
  },
  data(){
    return {
        filter: '',
        tabIndex: 0,
        fields: [
          {
            key: 'nombre',
            sortable: true
          },
          {
            key: 'tipodocumento',
            sortable: false
          },
          {
            key: 'identificacion',
            sortable: false
          },
          {
            key: 'email',
            sortable: false
          },
          {
            key: 'fecha',
            sortable: true
          },
          {
            key: 'cantidadpersonas',
            sortable: true
          },
          {
            key: 'tiporeserva',
            sortable: false
          },
          {
            key: 'descripcion',
            sortable: true
          },          
    
        ],
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
    }
  },
  components: {
		BIcon,
  },

  computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
}
</script>


<style>

</style>