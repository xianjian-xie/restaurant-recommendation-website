<template>
<b-col sm="12" md="6" >
  <div class="wishlist-item">
    <div class="top" >
      
      <img :src="restaurant.restaurant_avatar">
      <!-- v-lazy -->
      <div class="name">{{restaurant.restaurant_name}}</div>
      
      <!-- <div class="status">5 orders complete</div> -->
    </div>

    <!-- <div class="mid">
      <div class="food">Average price: {{data.average_price_tip}}<span></span></div>
      <div class="food">Average deliverry time: {{data.avg_delivery_time}}<span></span></div>
      <div class="food">  </div>
      <div class="cost"><span></span></div>
    </div> -->

    <div class="bottom">
      <span class="again" @click="remove">Remove</span>
      <span class="again" @click="commentPage(restaurant)">Comment</span>
      
      
    </div>
  </div>
  </b-col>
</template>

<script>
import {db} from "../firebaseConfig.js"

import { auth, provider } from "@/firebaseConfig";

export default {
  components: {},
  data () {
    return {
      wishlist:[],
      restaurant:[],
      user:[],  
      
    }
  },
  props: ["id"],
  
  watch: {},

  beforeCreate: function() {
    auth.onAuthStateChanged(user => {
      // console.log("user state:", user);
      // uncomment above to check out which user properties are available.
      if (user) {        
        this.user = user;
      }
    });
  },

  firestore: function() {
        console.log(this.id);
        return {
            restaurant: db.collection("wishlist").doc(this.id),
            
        }
  },
  

  methods: {

    getNotifications() {
                const self = this;
                
                this.restaurant = [];
                db.collection("wishlist").doc(self.id).get()
                    .then(function(snapshot){
                        snapshot(function(doc){
                            self.restaurant.push(doc.data());
                        })
                    })
            },

            //db.collection("cities").doc("SF")
    //.onSnapshot((doc) => {
     //   console.log("Current data: ", doc.data());
    //});


    
    

    
    
    commentPage(restaurant) {
      
           
            
            //db.collection("historylist").where("restaurant_id","==",this.restaurant.restaurant_id).get().then((res) => console.log(res.size))
            //db.collection('historylist').get().then(snapshot => console.log(snapshot.size))
            //console.log(db.collection('historylist').get().then(snapshot => {return snapshot.size}))
            //db.collection('historylist').get().then(snapshot => console.log(snapshot.size))
            //db.collection('historylist').get().then(snapshot => console.log(snapshot.size))
            
            
            
           
            
            var restaurantIsExist = false;
            var wishlistRef = db
              .collection("historylist")
              .where("person_id", "==", auth.currentUser.uid || "")
              .where("restaurant_id", "==", restaurant.restaurant_id || "");

            wishlistRef
              .get()
              .then((querySnapshot) => {
                restaurantIsExist = !querySnapshot.empty;
              })
        .     then(() => {
                if (restaurantIsExist) {
                  console.log("restaurant is exist in historylist");
                  
              } else {
                console.log("add restaurant to wishlist");
                var addRestaurantData = {
                person_id: auth.currentUser.uid,
                person_avatar: auth.currentUser.photoURL,
                restaurant_id: restaurant.restaurant_id,
                restaurant_name: restaurant.restaurant_name,
                restaurant_avatar: restaurant.restaurant_avatar,
                comments:"",
                restaurant_snapshot:"https://www.creativefabrica.com/wp-content/uploads/2019/02/Camera-icon-by-ahlangraphic-8-580x386.jpg",
                };

                db.collection("historylist")
                .add(addRestaurantData)
                .then(() => {
                console.log("add restaurant to wishlist success");
                
                });
                }
            });
    
            //if ( count==0){
            // const newRestaurant = {comments:"", person_avatar:this.user.photoURL, person_id:this.user.uid, restaurant_avatar:this.restaurant.restaurant_avatar, restaurant_id:this.restaurant.restaurant_id, restaurant_name:this.restaurant.restaurant_name, restaurant_snapshot:""};
            // db.collection("historylist").add(newRestaurant)
            //}
            this.$router.push({ name: 'Comment',
            params: {
              rid:this.restaurant.restaurant_id
            }
            })
        },

    remove: function(){
        //this.$firestoreRefs.restaurant.delete();
        //this.getNotifications();
        db.collection("wishlist").doc(this.id).delete().then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
});
db.collection("wishlist").doc(this.id)
    .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
    });


    // this.$router.push({name: 'Fakered'})
    },


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
    },


    //    toRestaurant (data) {
    //   // console.log(data)
    //   this.$emit('toRestaurant', data)
    
    // }

  },
  filters: {},
  computed: {},
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.wishlist-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  padding: 15px 5px;
  color: #333;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 10px;
  .top {
    flex: 1;
    padding: 0 15px;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    img {
      float: left;
      width: 40px;
      height: 40px;
      margin-top: 5px;
      margin-right: 10px;
      border-radius: 50%;
    }
    .name {
      position: relative;
      float: left;
      max-width: 50%;
      color: #333;
      font-size: 16px;
      font-weight: bold;
      @include ellipsis(1);
      // &:after {
      //   position: absolute;
      //   top: 20px;
      //   right: 75px;
      //   content: '';
      //   width: 8px;
      //   height: 8px;
      //   border: 1px solid #999;
      //   border-width: 1px 1px 0 0;
      //   transform: rotate(45deg);
      // }
    }
    .status {
      float: right;
      color: #999;
    }
  }
  .mid {
    flex: 2;
    margin-left: 62px;
    margin-right: 15px;
    padding-top: 10px;
    box-sizing: border-box;
    font-size: 14px;
    color: #666;
    @include onepx('top');
    .food {
      line-height: 25px;
      font-size: 12px;
      span {
        font-size: 14px;
        color: #151515;
        float: right;
      }
    }
    .cost {
      float: right;
      font-size: 12px;
      line-height: 25px;
      span {
        font-size: 14px;
        color: #151515;
      }
    }
  }
  .bottom {
    flex: 1;
    @include onepx('top');
    padding: 0 15px;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    .again {
      float: right;
      width: 76px;
      height: 24px;
      line-height: 24px;
      border: 1px solid #ccc;
      text-align: center;
      font-size: 14px;
      border-radius: 2px;
      margin: 9px 0;
    }
  }
}
</style>
