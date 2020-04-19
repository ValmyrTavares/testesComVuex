import axios from "axios"

const axiosIntance = axios.create({
    baseURL: "http://localhost:3000"
})

export const api = {
    get(endpoint){
        return axiosIntance.get(endpoint)
    }
}









            
// export default{
//     data(){
//         return{
//             api:null,
//             loading:true
//         }
//     },
//     methods:{
//         fetchData(url){
          
//             fetch(`http://localhost:3000${url}`)
//             .then(r => r.json())
//             .then(r =>{
//               setTimeout(()=>{
//                 this.api = r
//                 this.loading=false;
//               },1500) 
//             })
//         }
//     }
// }