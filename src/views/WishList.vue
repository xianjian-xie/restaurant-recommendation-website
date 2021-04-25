<template>
  <div class="wishlist">
    <!-- <div v-for="item in wishlistData" :key="item.name" >
      <wishlist-item :data="item"></wishlist-item>
    </div> -->

    <WishListItem v-for="item in wishlistData"
                    :key="item.name"
                    :data="item"
                    @toRestaurant="toRestaurant()"></WishListItem>

    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tab-bar/tab-bar'
import WishListItem from '@/components/wishlist-item'
import IndexList from '@/mock/index-list.json'
// import axios from 'axios'

export default {
  components: {
    TabBar,
    WishListItem
  },
  data () {
    return {
      wishlistData: IndexList.data.poilist
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