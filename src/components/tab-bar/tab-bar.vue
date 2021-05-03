
<template>
  <ul class="tab-bar">
    <router-link class="search" tag="li" to="/search">
      <i class="ico-search"></i>
      <span>Nearby Restaurants</span>
    </router-link>

    <router-link class="wishlist" tag="li" to="/wishlist">
      <i class="ico-wishlist"></i>
      <span>My Favourite Restaurants</span>
    </router-link>

    <router-link class="mine" tag="li" to="/mine">
      <i class="ico-mine"></i>
      <span>History</span>
    </router-link>
  </ul>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: {},
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  created () {},
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.tab-bar {
  @include onepx();
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  display: flex;
  flex-direction: row;
  background-color: #fcfcfc;
  margin-bottom: 0px;
  li {
    flex: 1;
    color: #999;
    display: block;
    i {
      display: block;
      width: 25px;
      height: 25px;
      margin: 3px auto;
      background: url('./tab-icons.png') no-repeat;
      background-size: 25px auto;
    }
    span {
      display: block;
      font-size: 12px;
    }
  }

  li.router-link-active {
    color: #333;
  }

  .ico-search {
    background-position: 0 -75px;
  }
  .search.router-link-active .ico-search {
    background-position: 0 -50px;
  }

  .ico-wishlist {
    background-position: 0 -25px;
  }
  .wishlist.router-link-active .ico-wishlist {
    background-position: 0 0;
  }

  .ico-mine {
    background-position: 0 -125px;
  }
  .mine.router-link-active .ico-mine {
    background-position: 0 -100px;
  }
}
</style>
