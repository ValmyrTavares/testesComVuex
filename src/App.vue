<template>
  <div id="app">
<h2>nome{{$store.state.usuario.nome}}</h2> 
<h2>Nacionalidade: {{$store.state.usuario.nacionalidade}}</h2>
<h2>cor: {{$store.state.usuario.cor}}</h2>

<router-view></router-view>

  </div>
</template>

<script>
 
//  import Neta from '@/components/Neta.vue'
  //import Sobrinha from '@/components/Sobrinha'

export default {
  name: 'App',
  components: {
//Filha, 
//Neta,
//Sobrinha

  }
}
</script>

<style>

</style>
