<template>
  <div>
      <label for="nome">Nomes</label>
      <input type="text" name="nome" v-model="formNome">
       <label for="nacionalidade">Nacionalidade</label>
      <input type="text" name="nacionalidade" v-model="formNacionalidade">
       <label for="estadoCivil">Estado Civil</label>
      <input type="text" name="estadoCivil" v-model="formEstadoCivil">
      <button @click="atualizar">Atualiza Formulario</button>
     <p> {{$store.state.usuario.nome}} {{$store.state.usuario.nacionalidade}}{{$store.state.usuario.estadoCivil}} </p>
    
  </div>
</template>



<script>
 import { mapState, mapMutations} from "vuex"
export default {
    name:"Form",
    computed: {
        ...mapState(['nome', 'nacionalidade','estadoCivil' ])
    },
    data(){
        return{
            formNome:"",
            formNacionalidade:"",
            formEstadoCivil:""
        }
    },
     methods: {
         ...mapMutations(["ATUALIZA_OBJETO"]),
     

        atualizar(){
          
           this.ATUALIZA_OBJETO({
               nome: this.formNome,
               nacionalidade: this.formNacionalidade,
               estadoCivil: this.formEstadoCivil
           })
        }
     }

}
</script>

<style>

</style>