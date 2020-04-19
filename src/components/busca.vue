<template>
  <div>
    <form>
      <input name="id" id="busca" type="text" v-model="novoUsuario.id" placeholder="id" />
      <input name="nome" id="busca" type="text" v-model="novoUsuario.nome" placeholder="nome" />
      <input
        name="nacionalidade"
        id="busca"
        type="text"
        v-model="novoUsuario.nacionalidade"
        placeholder="nacionalidade"
      />
      <input name="cor" id="busca" type="text" v-model="novoUsuario.cor" placeholder="Cor" />

      <input type="submit" @click.prevent="buscarAutor" value="Buscar" />
      <input type="submit" @click.prevent="fazerNovoUsuario" value="Novo usuario" />
      <button @click.prevent="mandarParaOCeu">Salvação da Patria</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "busca",
  data() {
    return {
      novoUsuario: {
        id: "",
        nome: "",
        nacionalidade: "",
        cor: ""
      }
    };
  },
  methods: {
    buscarAutor() {
      this.$store.dispatch("getUsuario", this.novoUsuario.id);
    },
    fazerNovoUsuario() {
      this.$store.commit("UPDATE_USUARIO", this.novoUsuario);
    },
    mandarParaOCeu(){
        this.$store.dispatch("fazerPost", this.$store.state.usuario)
    }
  }
};
</script>
<style>

</style>
            
         
      

     
      
       



           

           
           


