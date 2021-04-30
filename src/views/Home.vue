<!-- 首页 -->

<template>
  <div class="index">
    <!-- 轮播图 -->
    <!-- <div class="slider">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in swipeData" :key="item.pic">
          <img :src="item.pic">
        </mt-swipe-item>
      </mt-swipe>
    </div> -->

    <!-- 种类 -->
    <!-- <div class="types">
      <types-item v-for="item in types"
                  :key="item.ico"
                  :ico="item.ico"
                  :txt="item.txt" @toList="toList(item)"></types-item>
    </div> -->

    <!-- cross line -->
    <cross-line></cross-line>

    <!-- nearby restaurant -->
    <div class="nearby">
      <title-bar txt="nearby restaurants"></title-bar>
      <restaurant-list v-for="item in indexList" :key="item.name" :data="item"></restaurant-list>
                        <!-- @toRestaurant="toRestaurant()" -->
    </div>

    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tab-bar/tab-bar'
// import TypesItem from '@/components/base/types-item/types-item'
import CrossLine from '@/components/cross-line'
import TitleBar from '@/components/title-bar'
import RestaurantList from '@/components/restaurant-list'
import axios from 'axios'
// import IndexList from '@/mock/index-list.json'

export default {
  components: {
    TabBar,
    // TypesItem,
    CrossLine,
    TitleBar,
    RestaurantList
  },
  data () {
    return {
      indexList: [],
      location: null,
      gettingLocation: false,
    }
  },
  props: {},
  watch: {},
  methods: {
    // toList (item) {
    //   this.$router.push({
    //     path: '/restaurant_list'
    //   })
    // },

    // // 初始化列表数据
    // _initIndexListData () {
    //   axios.get('/api/indexList').then(res => {
    //     // console.log(res)
    //     if (res.data.code === 0) {
    //       this.indexList = res.data.data.data.poilist
    //     }
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // },


 _initIndexListData () {
   console.log(this.location)

axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?'+
      'term=restaurant'+ 
      '&latitude='+ this.location.coords.latitude + '&longitude=' + this.location.coords.longitude +
      '&radius=500'+
      '&limit=40',{
        headers:{
          'Authorization': 'Bearer x2sEHlXYD2bWhWNBBL6jG8QstSmJNXpjZLVIAzyE6QhPpzKvFxZC7OKWy3b6iFLucFHjchzmJS6YjNEDGa6aXY5ORGdC5ngDHQvv16t719ENUcJ5Vd5CMq0boeiFYHYx',
        }
      }).then(res =>{
        console.log(res)
	if(res){
		this.indexList = res.data.businesses
	}
      })
 }



  },
  filters: {},
  computed: {},
  created () {
    //get current location 
    if(!("geolocation" in navigator)) {
      console.log("Don't support geolocation.")
      return;
    }

    this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition(pos => {
      this.gettingLocation = false;
      this.location = pos;
      console.log(this.location)
       // init data
      this._initIndexListData()
    }, err => {
      this.gettingLocation = false;
      console.log(err)
    })

   
  },
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.index {
  .slider {
    height: 170px;
    font-size: 30px;
    text-align: center;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .types {
    overflow: hidden;
    padding-bottom: 20px;
    background-color: #fff;
  }
  .nearby {
    margin-bottom: 50px;
    background-color: #fff;
  }
}
</style>
