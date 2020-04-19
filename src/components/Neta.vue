<template>
  <div>
    <h2>Neta</h2>
    <div v-if="load">
  <pageLoading/>
    </div>

    <div>{{poemas}}</div>
  </div>
</template>

<script>
import {api} from "@/mixins/fetchData";
export default {
  name: "Neta",
  data(){
    return{
      poemas:null,
      load:false
    }
  },
  mixins: [api],
  methods:{
    fetchData(){
      this.load = true
      api.get("/autores")
      .then(r => { 
        setTimeout(()=> {
          this.poemas = r.data
          this.load=false
          },2500)
        })
    }
  },


  created() {
    this.fetchData();
  }
};
</script>

<style>
</style>