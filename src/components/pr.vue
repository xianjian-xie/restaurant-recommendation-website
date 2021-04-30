<template>
  <div>

    <div>Your past review:</div>
    <div v-html="restaurant.comments"></div>

    <span v-if="!editable" @click="edit"><button>click to edit</button></span>
    <div v-else>
        <vue-editor v-model="content"></vue-editor>
        <div v-html="content"></div>
        <button @click="addRestaurant">submit</button>
    </div>

    

    <div>Your snapshot:</div>
    <img :src=restaurant.restaurant_snapshot width="200" height="200">


  
    <br />

    
    
    

    <PhotoCapture v-model="imageBase64" />

    <button @click="uploadSnapshot">upload</button>
    <br />
    <img :src=imageBase64 >
    

    
    
    
  </div>
</template>

<script>
import {db} from "../firebaseConfig.js";

import { VueEditor } from 'vue2-editor'

import 'vue-media-recorder/src/assets/scss/main.scss'
import {PhotoCapture} from 'vue-media-recorder'




export default {
  name: "pr",

  components:{
        VueEditor,
        PhotoCapture,
        
    },

  props: ["id"],

  
  data: function() {
      return {

          imageBase64: null,
          videoUrl: null,

          content:  "",
        

          historylist:[],

          cameraOpen: true,

          restaurant: [],

          editable: false

          
          
          
          
      }
  },

  firestore: function() {
        return {
            restaurant: db.collection("historylist").doc(this.id),
            //comments: db.collection("historylist").doc(this.id).get("comments")

        }
  },

  methods: {
        addRestaurant: function() {
            if (this.restaurant==null){
                const newRestaurant = {comments:this.content, person_avatar:"1", person_id:"1", restaurant_avatar:"", restaurant_id:this.restaurant.restaurant_id, restaurant_name:this.restaurant.restaurant_name, restaurant_snapshot:""};
                db.collection("historylist").add(newRestaurant)
                this.editable=false
            }
            else{
                this.restaurant.comments = this.content;
                this.$firestoreRefs.restaurant.set(this.restaurant)
                this.editable=false
            }
            
        },

        uploadSnapshot: function() {
            this.restaurant.restaurant_snapshot = this.imageBase64;
            this.$firestoreRefs.restaurant.set(this.restaurant)
            
        },

        edit: function() {
            this.content=this.restaurant.comments
            this.editable=true;
        },



    },


  
}
</script>
