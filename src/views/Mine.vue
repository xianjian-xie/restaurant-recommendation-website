<!-- 我的 -->
<template>
  <div class="mine">
    <!-- loading -->
    <div class="loading" v-if="isLoading">
      <img :src="LoadingImg" />
    </div>
    <!-- history is empty -->
    <template v-else-if="historyList.length == 0">
      <div class="history-empty">
        <img :src="EmptyImg" />
        <div class="empty-text">Have gone restaurant is empty</div>
      </div>
    </template>
    <!-- history list -->
    <template v-else>
      <HistoryListItem
        v-for="item in historyList"
        :key="item.id"
        :data="item"
        @onAddRestaurantToWishlist="handleAddRestaurantToWishlist"></HistoryListItem>
    </template>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tab-bar/tab-bar'
import HistoryListItem from '@/components/historylist-item'
import LoadingImg from '@/assets/img/loading-spinning-bubbles.svg'
import EmptyImg from '@/assets/img/empty.svg'
import { auth, db } from '@/firebaseConfig'

export default {
  components: {
    TabBar,
    HistoryListItem
  },
  data () {
    return {
      LoadingImg,
      EmptyImg,
      isLoading: true,
      historyList: [],
      mockData: [
        {
          id: '10000',
          restaurantId: '10000',
          restaurantName: 'restaurantName',
          restaurantAvatar: 'http://p0.meituan.net/xianfu/2920fc37b810c63d12b1f6eb678e199015072.jpg',
          personId: '123456',
          personAvatar: '',
          score: '0.6',
          commentCount: 100,
          comments: 'this is a comment! this is a comment! this is a comment! this is a comment! this is a comment!'
        },
        {
          id: '10001',
          restaurantId: '10000',
          restaurantName: 'restaurantName',
          restaurantAvatar: 'http://p1.meituan.net/xianfu/0567a050846552c293191f36434fa415240132.jpg',
          personId: '123456',
          personAvatar: '',
          score: '1.8',
          commentCount: 12,
          comments: ''
        },
        {
          id: '10002',
          restaurantId: '10000',
          restaurantName: 'restaurantName',
          restaurantAvatar: 'http://p0.meituan.net/xianfu/e4437a3c18e48106b88a19ccb544cc1f35460.jpg',
          personId: '123456',
          personAvatar: '',
          score: '2.4',
          commentCount: 34,
          comments: 'this is a comment! this is a comment! this is a comment! this is a comment! this is a comment!'
        },
        {
          id: '10003',
          restaurantId: '10000',
          restaurantName: 'restaurantName',
          restaurantAvatar: 'http://p0.meituan.net/xianfu/829ddf0c82683c1311c29444646818be46396.jpg',
          personId: '123456',
          personAvatar: '',
          score: '3.6',
          commentCount: 280,
          comments: 'this is a comment! this is a comment! this is a comment! this is a comment! this is a comment!'
        },
        {
          id: '10004',
          restaurantId: '10000',
          restaurantName: 'restaurantName',
          restaurantAvatar: 'http://p1.meituan.net/xianfu/d3a267d8418c66850c3a7b8358aa8c408360.jpeg',
          personId: '123456',
          personAvatar: '',
          score: '4.4',
          commentCount: 376,
          comments: ''
        },
        {
          id: '10005',
          restaurantId: '10000',
          restaurantName: 'restaurantName',
          restaurantAvatar: 'http://p1.meituan.net/xianfu/e5ab74eff5bb2393510805675a12a70410240.jpg',
          personId: '123456',
          personAvatar: '',
          score: '5.0',
          commentCount: 2509,
          comments: 'this is a comment! this is a comment! this is a comment! this is a comment! this is a comment!'
        }
      ]
    }
  },
  props: {},
  watch: {},
  filters: {},
  computed: {
    currentUser () {
      return auth.currentUser || {}
    },
    auth () {
      return auth
    },
    uid () {
      if (auth && auth.currentUser) {
        return auth.currentUser.uid
      }

      return ''
    }
  },
  created () {
    this._getHistoryList(this.uid || '123')
  },
  mounted () {},
  destroyed () {},
  methods: {
    /**
     * @description get history list
     * @param uid - current user id
     */
    _getHistoryList (uid) {
      const self = this
      self.isLoading = true
      var historyListRef = db.collection('historylist').where('person_id', '==', uid)

      historyListRef.get().then((querySnapshot) => {
        var historyList = []

        querySnapshot.forEach((doc) => {
            var data = doc.data()
            data.id = doc.id

            historyList.push(data)
        })

        // mock data
        historyList.push(...self.mockData)
        self.historyList = historyList
      }).then(() => {
        self.isLoading = false
      }).catch((error) => {
        console.error('get history list error: ', error)
      })
    },
    /**
     * @description add restaurant to wishlist
     * @param currentUser - current user
     * @param restaurantModel - restaurant info
     */
    _addWishlistBy (currentUser, restaurantModel) {
      var restaurantIsExist = false
      var wishlistRef = db.collection('wishlist')
                          .where('person_id', '==', currentUser.uid || '')
                          .where('restaurant_id', '==', restaurantModel.id || '')

      wishlistRef.get().then((querySnapshot) => {
        restaurantIsExist = querySnapshot.empty
      }).then(() => {
        if (restaurantIsExist) {
          console.log('restaurant is exist in wishlist')
        } else {
          console.log('add restaurant to wishlist')
        }
      })
    },
    handleAddRestaurantToWishlist (params) {
      const data = params.data || {}

      this._addWishlistBy(this.currentUser, data)
    },
    login () {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mine {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  background: #ebebeb;
  padding-bottom: 82px;
  .loading {
    width: 100vw;
    height: 100vh;
    display: flex;
    // align-items: center;
    justify-content: center;
    img {
      width: 48px;
      height: 48px;
      margin-top: 60px;
    }
  }
  .history-empty {
    width: 100vw;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 40%;
      height: auto;
    }
    .empty-text {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
    }
  }
}
</style>
