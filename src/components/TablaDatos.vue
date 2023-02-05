<template>
    <div>
        <b-container fluid>
            <div class="mx-3" >
                <b-card no-body>
                  <b-tabs card>
                    <b-tab title="Reservas" active>
                      <b-card-text>Reservas
                  
                      </b-card-text>
                      <div>
                        <b-table striped hover :items="msg"></b-table>
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
        tabIndex: 0,

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
}
</script>


<style>

</style>