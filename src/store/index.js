import Vue from 'vue'
import Vuex from 'vuex'
//import { api } from '../services';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aulasCompletas:[] ,
    nome:"Valmyr",
    num:0,
    acao:"null",
    usuario:{
      nome:null,
      nacionalidade:null,
      estadoCivil:null
    }
  },
  mutations: {
    ATUALIZA_OBJETO(state, payload){
      state.usuario.nome = payload.nome;
      state.usuario.nacionalidade = payload.nacionalidade;
      state.usuario.estadoCivil = payload.estadoCivil;
     
    },
    SEND_CLASS(state, payload){
      state.aulasCompletas.push(payload)
    },
    CHANGE_NAME(state, payload){
      state.nome = payload.nome
    },
    INCREASE_NUMBER(state){
      state.num++
    },
    RECEBE_FETCH(state, payload){
      state.acao = payload
    }
  },
  actions:{
    // criaUsuario( payload){
    //   api.post("/usuario", payload)
    // },

    changeUsers(context, payload){
      context.commit("INCREASE_NUMBER")
      context.commit("CHANGE_NAME", payload)
    },

  // data(context){
  //   fetch("http://localhost:3000/poemas")
  //   .then(r => r.json())
  //   .then(response => {{
  //     context.commit("RECEBE_FETCH", response)
  //   }})
  //},
 
}
   
 
})
