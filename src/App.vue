<template>
  <div id="app">
 <Curso/>
 <Aluno/>
 <Form/>
 {{$store.state.usuario.nome}}
 {{$store.state.usuario.nacionalidade}}
 {{$store.state.usuario.estadoCivil}}

  </div>
</template>

<script>
import Aluno from '@/components/Aluno.vue'
import Curso from '@/components/Curso.vue'
import Form from '@/components/form.vue'


export default {
  name: 'App',
  components: {
  Aluno,
  Curso,
  Form
  }
}
</script>

<style>

</style>
