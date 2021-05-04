<template>
  <b-col sm="12" md="6"  >
  <div class="restaurant-list" >
    <div class="left" @click="toRestaurant(data)">
      <img :src="data.image_url">
      <!-- v-lazy -->
    </div>

    <div class="right">
      <div class="name" @click="toRestaurant(data)">{{ data.name }}</div>
      

      <div class="mid clearfix" @click="toRestaurant(data)">
        <star class="fl" :size="24" :score="data.rating"></star>
        
      </div>

      <div class="fee" @click="toRestaurant(data)">
        <span v-for="category in data.categories" :key ="category.name" class="start"> {{ category.title }}</span>
        <!-- <span class="start">{{ data.min_price_tip }}</span>
        <span class="deliver">{{ data.shipping_fee_tip }}</span>
        <span class="average">{{ data.average_price_tip }}</span> -->
      </div>

      <!-- <div class="activity" v-for="sup in data.discounts2">
        <p><img :src="sup.icon_url">{{sup.info}}</p>
      </div> -->
      <div class="bottom">
        <!-- <div class="address">Address: {{ data.location.address1 }}, {{data.location.city}}, {{data.location.state}}, {{data.location.zip_code}}</div> -->
        <span class="distance">Distance: {{ this.distance }} m </span>
        <span v-if="Inwishlist" class="again" >Inwishlist</span>
        <span v-else class="again" @click="addtoWishlist()">Favour</span>
      </div>

    </div>
  </div>
      </b-col>

</template>

<script>
import Star from '@/components/star/star'
import {db} from "../firebaseConfig.js"
import { auth } from "@/firebaseConfig";

export default {
  components: {
    Star
  },
  data () {
    return {
      Inwishlist: null,
      distance: null,
      returndata: null
      }
  },
  props: {
    data: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  watch: {},
  
  methods: {
        toRestaurant () {
      this.$router.push({
        name: 'Goods', params:{data:this.data}
      })
     },

    // toRestaurant (data) {
    //   // console.log(data)
    //   this.$emit('toRestaurant', data)
    // },
    addtoWishlist: function() {
      console.log(auth.currentUser);
      if (auth.currentUser == null) {
      var msg = "You must log in to favour restaurant.";
      var duration = 1600;
      duration = isNaN(duration) ? 1600 : duration;
      var p = document.createElement("div");
      p.style.cssText =
        "width:100vw;height:100vh;position:absolute;display:flex;flex-flow:row nowrap;align-items:flex-start;justify-content: center;top: 0;left: 0;z-index:999999;overflow:hidden";

      document.body.appendChild(p);

      var m = document.createElement("div");
      m.innerHTML = msg;
      m.style.cssText =
        "margin-top:180px;max-width:80vw; min-width:180px; background:#000; opacity:0.7; max-height:fit-content;min-height: 30px; overflow:hidden;color:#fff; line-height:30px; text-align:center; border-radius:4px;padding:10px;box-sizing: border-box;";
      p.innerHTML = m.outerHTML;

      setTimeout(function () {
        var d = 0.5;
        p.style.webkitTransition =
          "-webkit-transform " + d + "s ease-in, opacity " + d + "s ease-in";
        p.style.opacity = "0";
        setTimeout(function () {
          document.body.removeChild(p);
        }, d * 1000);
      }, duration);
      }
      else {
      const newrestaurant = {person_id:auth.currentUser.uid, person_avatar:auth.currentUser.photoURL, 
      restaurant_avatar:this.data.image_url, restaurant_id:this.data.id, restaurant_name:this.data.name, 
      restaurant_latitude:this.data.coordinates.latitude,restaurant_longitude:this.data.coordinates.longitude, 
      restaurant_location:this.data.location, restaurant_rating:this.data.rating};

      db.collection("wishlist").add(newrestaurant);
      this.$router.push({name: 'WishList'})
      }
      // db.collection("tasks").where("owner", "==", auth.currentUser.uid),
    },

  },
  filters: {},
  computed: {},
  created () {},
  mounted () {
    this.distance = Math.round(parseFloat(this.data.distance))
    // this.returndata = db.collection("wishlist").where("person_id", "==", auth.currentUser.uid).where("restaurant_id", "==", this.data.id),
    // if ( !=null) {
      // this.Inwishlist = true;
    // console.log(this.returndata[0].id)
    // }
  },
  destroyed () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.restaurant-list{
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  overflow: hidden;
  @include onepx('bottom');
  &:last-child {
    &:after {
      border-top: 0;
    }
  }
  .left {
    flex: 0 0 90px;
    width: 90px;
    img {
      display: block;
      width: 70px;
      margin: 0 auto;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 15px;
    overflow: hidden;
    .name {
      font-size: 17px;
      color: #333;
      overflow: hidden;
      font-weight: bold;
      margin-right: 15px;
      overflow: hidden;
      @include ellipsis(1);
    }
    .mid {
      flex: 1;
      font-size: 12px;
      color: #666;
      margin-top: 7px;
      .star {}
      .count {
        margin-left: 10px;
      }
      .distance {
        margin-left: 5px;
        margin-top: 2px;
      }
      .time {
        @include right-bar();
      }
    }
    .fee {
      flex: 1;
      font-size: 13px;
      margin-top: 7px;
      span {
        display: inline-block;
        color: #656565;
      }
      .start {
        @include right-bar();
      }
      .deliver {
        @include right-bar();
      }
      .average {}
    }
    .activity {
      flex: 1;
      font-size: 13px;
      color: #b0b0b0;
      margin-top: 7px;
      p {
        @include ellipsis(1)
      }
      img {
        width: 16px;
        height: 16px;
        margin-right: 5px;
        vertical-align: top;
      }
    }
      .bottom {
    flex: 1;
    @include onepx('top');
    padding-top: 5px;
    padding-left: 0px;
    padding-right: 15px;
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
      // margin: 9px 0;
    }
    .address{
    }
    .distance{
    }
  }

  }
}
</style>
