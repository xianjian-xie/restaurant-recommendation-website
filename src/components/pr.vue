<template>
  <div>
    <button class="back" @click="back">Back</button>

    <div class="review">
        <div class="title">Your past review:</div>
        <div v-html="restaurant.comments"></div>

        <span v-if="!editable" @click="edit"><button>click to edit</button></span>
        <div v-else>
            <vue-editor v-model="content"></vue-editor>
            <!--<div v-html="content"></div>-->
            <button @click="addRestaurant">submit</button>
        </div>
    </div>

    <div class="snapshot">
        <div class="title">Your snapshot:</div>
        <img :src=restaurant.restaurant_snapshot width="40%" height="40%">
    </div>
  
    <br />
    <b-container >
        




        <b-row>
            <b-col sm="12" md="6"  >
                <PhotoCapture v-model="imageBase64" id="cam" />
            </b-col>
            <b-col sm="12" md="6" >
                <img :src=imageBase64 />
                <br />
                <button @click="uploadSnapshot">upload</button>
            </b-col>
        </b-row>
        
        <br />
        

    </b-container>

    
    
    
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
            //restaurant: db.collection("historylist").doc("this.id")
              //              .onSnapshot((doc) => {
                //            console.log("Current data: ", doc.data());
                  //          })

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

        back: function() {
            this.$router.push({ name: 'WishList'})
        }



    },


  
}
</script>

<style>

.review{
    color:black;
    border-style: solid;
    border-color: #cecece;
    margin-left:10%;
    margin-right:10%;
    margin-top:2%;
    margin-bottom:2%;
    padding-top:2%;
    padding-bottom:2%;
    background-color:white;
}
.title{
    font-weight: bold;
    font-size: 35px;
}
.snapshot{
    color:black;
    border-style: solid;
    border-color: #cecece;
    margin-left:10%;
    margin-right:10%;
    margin-top:2%;
    margin-bottom:2%;
    padding-top:2%;
    padding-bottom:2%;
    text-allign:center;
}
.snapshot img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
}
.camera{
    color:black;
    border-style: solid;
    border-color: white;
    margin-left:10%;
    margin-right:10%;
    margin-top:2%;
    margin-bottom:2%;
    padding-top:2%;
    padding-bottom:2%;
    display:flex;
    
}
.c-left{
    border-style: solid;
    border-color: #92a8d1;
    width:50%;
    padding-left:auto;
    float:left;
    
    
}
#cam{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    text-align:center;
}
.c-right{
    border-style: solid;
    border-color: #92a8d1;
    width:50%;
    float:left;
    
}
img{
        max-width: 100%;
        max-height: 100%;
        display: block; /* remove extra space below image */
    }

.back{
    display:flex;
    float:left;
}

 

</style>

