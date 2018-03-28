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
                context.commit("addbooks",data.data)//`${data}`如果是传递过来多个参数
                console.log(this.state);
                if(data.cb){
                    data.cb("成功添加第"+(this.state.books.length-1)+"个问候语")
                }
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