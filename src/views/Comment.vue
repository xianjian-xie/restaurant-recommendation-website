<template>
    <div id="comment">
       

        
        <top-bar></top-bar>

        
        <div v-for="r in restaurant" :key="r.index"><pr :id="r.id"/></div>

        


        
    </div>

</template>

<script>
import TopBar from '@/components/top-bar'

import {db} from "../firebaseConfig.js"

import pr from "../components/pr.vue"

import { auth, provider } from "@/firebaseConfig";

export default {

    

    props: ["rid"], 




    data(){
        return {
            
            imageBase64: null,
            videoUrl: null,

            content:  "hello",
        

            historylist:[],

            cameraOpen: true,

            restaurant:[],

            user: [],
     
        }
    },

    beforeCreate: function() {
    auth.onAuthStateChanged(user => {
      // console.log("user state:", user);
      // uncomment above to check out which user properties are available.
      if (user) {        
        this.user = user;
      }
    });
  },
    
    components:{
        pr,
        TopBar,
        
    },

    firestore: function() {
        return {
            restaurant: db.collection("historylist").where("restaurant_id", "==", this.rid).where("person_id","==",auth.currentUser.uid)

        }
    },

    methods: {
    signInWithGoogle: function() {
      auth.signInWithRedirect(provider)
        .then(result => {
          this.user = result.user;
        })
        .catch(err => console.log(err));
    },
    signOut: function() {
      auth.signOut()
        .then(() => {
          this.user = null;
        })
        .catch(err => console.log(err));
    }
  }


     



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