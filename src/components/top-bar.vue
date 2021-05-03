<template>
  <!-- <div class="title-bar">
    <span>{{ txt }}</span>
  </div> -->
  <div class="topbar">
        <title-bar txt="Dr. Restaurant Seeker"></title-bar>
        <!-- <button @click="login">Login</button>
        <button @click="logout">Logout</button>

        
        <input style="float:right" type="button" value="" /> -->
        
    
        <!-- <title-bar txt="App Name"></title-bar> -->
    <template v-if="!user">
      <button style = "float:right" @click.prevent="signInWithGoogle">Login</button>
    </template>

    <template v-if="user">
      <button style = "float:right" @click.prevent="signOut">Logout</button>
      <img :src="user.photoURL" alt="avatar" style="float:right; width: 30px; height: 30px; border-radius: 50%;">
      
    </template>

    <!-- <pre>{{ user }}</pre> -->
  </div>
</template>



<script>
import TitleBar from '@/components/title-bar'
import { auth, provider } from "@/firebaseConfig";

export default {
  components: {TitleBar},
  data () {
    return {
      user: null
    }
  },
  props: {
    
  },
  watch: {},
  beforeCreate: function() {
    auth.onAuthStateChanged(user => {
      // console.log("user state:", user);
      // uncomment above to check out which user properties are available.
      if (user) {        
        this.user = user;
      }
    });
  },
  beforeUpdate() {
    
      // console.log("user state:", user);
      // uncomment above to check out which user properties are available.
      if (!this.user) {        
        this.$router.push({
        path: '/'
      })
      }
    
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
    },
    // login () {
    //   this.$router.push({
    //     path: '/login'
    //   })
    // },
    // logout () {
    //   this.$router.push({
    //     path: '/logout'
    //   })
    // },
  },
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
.topbar{
    height: 70px;
    background-color: rgb(219, 207, 38);
  }

</style>
