<!-- Restaurant Details -->

<template>
  <div class="restaurant-detail">
    <!-- Restaurant Header -->
    <restaurant-header :restaurant="restaurant"></restaurant-header>

    <div class="tab">
      <div class="tab-item">
        <router-link to="./goods">Pictures and Comments</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name: 'Ratings',params:{data:this.restaurant}}">Direction</router-link>
      </div>
    </div>

    <keep-alive>
      <router-view :restaurant="restaurant"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import RestaurantHeader from '@/components/restaurant-header'

export default {
  components: {
    RestaurantHeader
  },
  data () {
    return {
      restaurant: null
    }
  },
  props: [],
  watch: {},
  methods: {
  },
  filters: {},
  computed: {},
  created () {
    // 初始化商家数据
    // this._initData()
  },
  mounted () {
    this.restaurant = this.$route.params.data;
    console.log(this.restaurant)
  },
  destroyed () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.restaurant-detail {
  .tab {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    @include onepx('bottom');
    .tab-item {
      flex: 1;
      background-color: #fff;
      a {
        text-decoration: none;
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.router-link-active {
          color: rgb(240, 20, 20);
        }
      }
    }
  }
}
</style>
