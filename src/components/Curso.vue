<template>
  <div>
      <h1>Curso</h1>
      <!-- {{api}} -->
     <p> {{aulasCompletas}} {{nome}}</p> 
      <h2>{{nome}}|{{$store.state.usuario.nacionalidade}} {{$store.state.usuario.estadoCivil}}</h2>
     {{$store.state.num}}
    

      <Aulas/>
  </div>
</template>

<script>
// import {api} from "@/services.js"


import Aulas from '@/components/Aulas.vue'
import {mapState} from 'vuex'
// import {fetchData} from '@/services.js'
export default {
name:"Curso",
// mixins:[fetchData],
data(){
  return{
    poemas:null
  }
},
computed:{...mapState(["aulasCompletas","nome"])
},
components:{
    Aulas
},
 //methods:{
//   TakeData(){
//     api.get("/poemas")
//     .then(r =>{
//       this.poemas = r.data
//     })
//   }
// },
// created(){
//   this.TakeData();
 //}
//  created(){
//    this.fetchData("/usuario")
   
//  }
}
</script>

<style>

</style>