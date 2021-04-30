<template>
    <div id="comment">

        <!--<div>{{data.name}}</div>

        
        
        <div v-for="r in restaurant" :key="r.index">{{r.id}}</div>-->

        <div v-for="r in restaurant" :key="r.index"><pr :id="r.id"/></div>

        


        
    </div>

</template>

<script>





import {db} from "../firebaseConfig.js"

import pr from "../components/pr.vue"

export default {

    

    props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    
  },




    data(){
        return {
            
            imageBase64: null,
            videoUrl: null,

            content:  "hello",
        

            historylist:[],

            cameraOpen: true,

            restaurant:[]
     
        }
    },
    
    components:{
        pr,
        
    },

    firestore: function() {
        return {
            restaurant: db.collection("historylist").where("restaurant_id", "==", this.data.id)

        }
    },


     



}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-color: white;
}
body {
  background-color: white;
}
</style>