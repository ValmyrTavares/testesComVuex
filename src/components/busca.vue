<template>
    <div>
        <form>
        <input name="busca" id="busca" type =text v-model="autor">
        <input type="submit" @click.prevent="buscarAutor" value="Buscar">
        {{autor}}
       
        </form>
    </div>


</template>

<script>
export default {
    name:"busca",
    data(){
        return{
            autor:""
        }
    },
    methods:{
        buscarAutor(){
            this.$router.push({query:{q:this.autor}})
        }

    }

}
</script>

<style >

</style>