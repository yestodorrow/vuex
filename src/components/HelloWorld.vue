<template>
  <div class="hello" >
   <ul v-if="books.length">
     <li v-for="(msg,index) in books" :key="index">
        <p>{{"第"+index+"个人的欢迎语是： "+msg}}</p>
     </li>
   </ul>
   <button @click="addbook">点击我增加欢迎语</button>
  </div>
</template>

<script>
import store from './../store'

import {Toast} from "mint-ui"
import 'mint-ui/lib/toast/style.css'

export default {
  name: 'HelloWorld',
  data () {
    return {
     data:["hello"]
    }
  },
  store,
  computed:{
    books(){
      return this.$store.state.books
    }
  },
  methods:{
    addbook(){
      this.$store.dispatch("ADDBOOKS",{data:this.data,cb:function(msg){
        Toast({
            message: msg,
            position: 'middle',
            duration:2000
          });
      }})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
