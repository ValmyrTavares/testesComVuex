<template>
  <div>
      <h1>Aulas</h1>
      <ul>
          <li v-for="aula in aulas" :key="aula.nome">
              {{aula.nome}} | {{aula.duraco}}
              <button @click="sendClass(aula.nome)">completar</button>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"Aulas",
    data(){
        return{
     aulas:[ {
    nome: "HTML e CSS",
    duracao: 15
  },
  {
    nome: "JavaScript",
    duracao: 30
  },
  {
    nome: "UX Design",
    duracao: 20
  }]
        }
    },
methods:{
sendClass(aula){
    this.$store.commit("SEND_CLASS", aula )

}
}

}
</script>

<style>

</style>