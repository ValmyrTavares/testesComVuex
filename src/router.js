import Vue from 'vue'
import Router from 'vue-router'

import Filha from '@/components/Filha'
import busca from '@/components/busca'

Vue.use(Router)

export default new Router ({
    mode: "history",
    base: process.env.BASE_URL,
    routes:[
        {
            path: "/",
            name:"Filha",
            component:Filha,
            children:[
            {
                path: ":busca",
                name:"busca",
                component:busca
            }
            ]
        }

    ]
})
