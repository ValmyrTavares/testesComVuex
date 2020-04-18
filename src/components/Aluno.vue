<template>
  <div>
      <h1>Aluno</h1>
      <input type="text" v-model="novoNome">
  <button @click="INCREASE_NUMBER">Clique</button>
  <button @click="mut">Mude o texto</button>
  <button @click="data"> Puxa fetch</button>
  <button @click="mudaTudo"> Muda Tudo</button>
  <!-- <button @click="criaUsuario">Envia BD</button> -->
   <!-- <button @click="trazDados">Traz BD</button> -->
      {{nome}}
      {{num}}
      {{acao}}
      <p>Usuario Funciona:{{trazApi}}</p>

  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
//import {api} from "../services.js"

export default {
  computed:{
    ...mapState(["nome","num","acao"])
  },
  data(){
    return{
       usuarios:{
      nome:"a",
      nacionalidade:"d",
      estadoCivil:"d"
    },
      novoNome:"",
      trazApi:"Vou escrever bastante para poder ver nemos nemos"

    }
  },
  methods:{
    ...mapMutations(["INCREASE_NUMBER", "CHANGE_NAME"]),
    ...mapActions(["changeUsers", "data",]),
    mut(){
     
      this.CHANGE_NAME({nome: this.novoNome})
    },
    mudaTudo(){
      console.log("Funciona Vai")
        this.changeUsers({
          nome: this.novoNome
        })
    },
    // criaUsuario(){
    // api.post("/usuario", this.usuarios)
    // console.log(this.usuarios)
    //   // this.$store.dispatch("criaUsuario", this.$store.state.usuario)

    // },
    // trazDados(){
    //   api.get("/usuario")
    //   .then(r=> {this.trazApi = r.data
    //   console.log(this.trazApi)})
    // }
  }

}
</script>

<style>

</style>

