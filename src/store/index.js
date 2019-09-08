import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        goods:[]
    },
    getters:{
        getPrice(state,getters){
            let sum=0;
            state.goods.forEach(item=>{
                sum+=item.foods.reduce((prev,cur)=>prev+cur.count* cur.price,0)
            })
            return sum
        }
    },
    mutations:{
        addShop(state,list){
            state.goods=list
        }
    },
    actions:{
        getData({commit}){
            axios.get('/api/data').then(res=>{
                commit('addShop',res.data.goods)
            })
        }
    }
})
