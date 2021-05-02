<template>
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
        <div class="address">Address: {{ data.location.address1 }}, {{data.location.city}}, {{data.location.state}}, {{data.location.zip_code}}</div>
        <span class="distance">Distance: {{ this.distance }} m </span>
        <span class="again">Favour</span>
      </div>

    </div>
  </div>
</template>

<script>
import Star from '@/components/star/star'

export default {
  components: {
    Star
  },
  data () {
    return {distance: null}
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

  },
  filters: {},
  computed: {},
  created () {},
  mounted () {
    this.distance = Math.round(parseFloat(this.data.distance))
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
