<template>
  <div class="wishlist">
    <!-- <div v-for="item in wishlist" :key="item.name" >
      <wishlist-item :data="item"></wishlist-item>
    </div> -->
    
    <top-bar></top-bar>
    <div class="loading" v-if="loading"></div>
    <template v-else-if="wishlist.length == 0">
      <div class="wishlist-empty">
        <img :src="EmptyImg" />
        <div class="empty-text">Wishlist is empty</div>
      </div>
    </template>
    <b-container v-else>
      <b-row>
    <WishListItem v-for="item in wishlist"
                    :key="item.id"
                    :id="item.id"></WishListItem>
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
import EmptyImg from "@/assets/img/empty.svg";

import {db} from "../firebaseConfig.js"

import { auth, provider } from "@/firebaseConfig";

export default {
  components: {
    TabBar,
    // TitleBar,
    WishListItem,
    TopBar
  },
  data () {
    return {
      EmptyImg,
      loading: true,
      wishlistData: IndexList.data.poilist,
      user: [],
      wishlist: [],
    }
  },
  props: {},
  watch: {},

  firestore: function() {
        this.loading = false;
        return {
            wishlist: db.collection("wishlist").where("person_id","==",auth.currentUser.uid)
            

        }
  },

  beforeCreate: function() {
    auth.onAuthStateChanged(user => {
      // console.log("user state:", user);
      // uncomment above to check out which user properties are available.
      if (user) {        
        this.user = user;
      }
    });
  },



  methods: {

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
    }

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
.wishlist-empty {
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

</style>