<template>
  <div class="wishlist">
    <!-- <div v-for="item in wishlistData" :key="item.name" >
      <wishlist-item :data="item"></wishlist-item>
    </div> -->
    <top-bar></top-bar>
    <b-container>
      <b-row>
    <WishListItem v-for="item in wishlistData"
                    :key="item.name"
                    :data="item"
                    @toRestaurant="toRestaurant()"></WishListItem>
    </b-row>
      </b-container>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tab-bar/tab-bar'
import WishListItem from '@/components/wishlist-item'
import IndexList from '@/mock/index-list.json'
// import TitleBar from '@/components/title-bar'
import TopBar from '@/components/top-bar'
// import axios from 'axios'

export default {
  components: {
    TabBar,
    // TitleBar,
    WishListItem,
    TopBar
  },
  data () {
    return {
      wishlistData: IndexList.data.poilist,
      user: null
    }
  },
  props: {},
  watch: {},
  methods: {
      toRestaurant () {
      this.$router.push({
        path: '/restaurant'
      })
     },
    // 初始化列表数据
//     _initIndexListData () {
//       axios.get('/api/indexList').then(res => {
//         // console.log(res)
//         if (res.data.code === 0) {
//           this.orderData = res.data.data.data.poilist
//         }
//       }).catch(err => {
//         console.log(err)
//       })
//     }
   },
  filters: {},
  computed: {},
  created () {
    // 初始化列表数据
    // this._initIndexListData()
  },
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';


.topbar{
  height: 70px;
  background-color: rgb(219, 207, 38);
}

</style>