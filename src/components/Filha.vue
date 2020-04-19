<template>
  <div>
      <h2>Filha</h2>
      <router-view></router-view>
      {{url}}
        {{testeFetch}}
          </div>
</template>

<script>
import {api} from "@/mixins/fetchData.js"


export default {
name:"Filha",
mixins:[api],

data(){
    return{
        testeFetch:null
    }
},
computed:{
    url(){
        let queryString = ""
        for(let key in this.$route.query){
            queryString += `&${key}=${this.$route.query[key]}`
        }

        console.log(queryString)
        return "/poemas?_limit=10" + queryString;
    }
},

methods:{
    trazerDados(){
        api.get(this.url)
        .then(r => {this.testeFetch = r.data})
    }
},
watch:{
    url(){
        this.trazerDados();
    }
},
created(){
    this.trazerDados();
}


}
</script>

<style>

</style>