<template>
  <div>
    <!-- 左右联动 -->
    <div class="goods" v-if="restaurant">
      <!-- 左侧菜单 -->
      <!-- <div class="menu-wrapper" ref="menuRef">
        <ul>
          <li class="menu-item"
              v-for="(item, index) in goods"
              :class="{'current': currentIndex === index}"
              @click="selectMenu(index, $event)">
            <span class="text">
              <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"></span>
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div> -->

      <!-- 右侧食物列表 -->
      <div class="foods-wrapper" ref="foodsRef">
        <!-- <ul> -->
          <!-- <li class="foods-list foods-list-hook"> -->
            <!-- <h1 class="title">{{ item.name }}</h1> -->
            <GoogleMap :cur_address = this.restaurantDetail.coordinates></GoogleMap>
            
          <!-- </li> -->
        <!-- </ul> -->
      </div>

      <!-- 购物车 -->
      <!-- <shopcart ref="shopcartRef"
                :selectFoods="selectFoods"
                :deliveryPrice="seller.deliveryPrice"
                :minPrice="seller.minPrice"></shopcart> -->
    </div>

    <!-- 商品详情页 -->
    <!-- <goods-detail @drop="drop" :food="selectedFood" ref="goodsDetailRef"></goods-detail> -->
  </div>
</template>

<script>
import axios from 'axios'
import GoogleMap from '@/components/GoogleMap'

export default {
  components: {
    GoogleMap
  },
  data () {
    return {
      restaurant: null,
      restaurantDetail: null
    }
  },
  props: {},
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  created () {
    console.log("lalala",this.$route.params.data)
    this.restaurant = this.$route.params.data

    axios.get('https://boiling-waters-50053.herokuapp.com/https://api.yelp.com/v3/businesses/'+this.restaurant.id,{
        headers:{
          'Authorization': 'Bearer x2sEHlXYD2bWhWNBBL6jG8QstSmJNXpjZLVIAzyE6QhPpzKvFxZC7OKWy3b6iFLucFHjchzmJS6YjNEDGa6aXY5ORGdC5ngDHQvv16t719ENUcJ5Vd5CMq0boeiFYHYx',
        }
      }).then(res =>{
        console.log(res)
	if(res){
		this.restaurantDetail = res.data
    console.log("lueluelue",this.restaurantDetail)
	}
      })


  },
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.goods {
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 46px;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f7;
    .menu-item {
      display: table;
      width: 56px;
      height: 54px;
      line-height: 14px;
      padding: 0 12px;
      @include onepx('bottom', true);
      &.current {
        position: relative;
        margin-top: -1px;
        background-color: #fff;
        font-weight: 700;
        z-index: 10;
      }
      .text {
        font-size: 12px;
        display: table-cell;
        vertical-align: middle;
        .icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 2px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          vertical-align: top;
        //   &.decrease {
        //     @include bg-image('./img/decrease_3');
        //   }
        //   &.discount {
        //     @include bg-image('./img/discount_3');
        //   }
        //   &.guarantee {
        //     @include bg-image('./img/guarantee_3');
        //   }
        //   &.invoice {
        //     @include bg-image('./img/invoice_3');
        //   }
        //   &.special {
        //     @include bg-image('./img/special_3');
        //   }
        }
      }
    }
  }
  .foods-wrapper {
    flex: 1;
      .title {
        padding-left: 14px;
        height: 26px;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147, 153, 159);
        background-color: #f3f5f7;
      }
      .foods-item {
        position: relative;
        display: flex;
        margin: 18px;
        padding-bottom: 18px;
        @include onepx('bottom', true);
        .icon {
          flex: 0 0 57px;
          width: 57px;
          height: 57px;
          margin-right: 10px;
          img {
            width: 57px;
            height: 57px;
          }
        }
        .content {
          flex: 1;
          .name {
            font-size: 14px;
            margin: 2px 0 8px 0;
            height: 14px;
            line-height: 14px;
            color: rgb(7, 17, 27);
          }
          .desc {
            margin-bottom: 8px;
            line-height: 14px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
          .extra {
            margin-bottom: 8px;
            line-height: 12px;
            font-size: 0;
            color: rgb(147, 153, 159);
            .count {
              font-size: 10px;
              margin-right: 12px;
            }
            .rating {
              font-size: 10px;
            }
          }
          .price {
            font-weight: 700;
            line-height: 24px;
            .now {
              margin-right: 8px;
              font-size: 14px;
              color: rgb(240, 20, 20);
            }
            .old {
              font-size: 10px;
              color: rgb(147, 153, 159);
              text-decoration: line-through;
            }
          }
          .control {
            position: absolute;
            right: 0;
            bottom: 1px;
          }
        }
      }
  }
}
</style>
