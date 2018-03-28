import Vue from 'vue'

import http from 'axios'

import Vuex from 'vuex'

Vue.use(Vuex)


const store =new Vuex.Store(
    {
        state:{
            books:[]
        },
        actions:{
            ADDBOOKS(context,data){
                context.commit("addbooks",`${data}`)
            }
        },
        mutations:{
            addbooks(state,data){
                console.log(data);
                state.books.push(data)
            }
        },
        getters:{
    
        },
        modules:{
    
        }
    }
)
export default store