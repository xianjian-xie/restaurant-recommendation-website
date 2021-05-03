<template>
<div class="auth">

    <top-bar></top-bar>
    <div class="wrapper-404">
      <img :src="Img404" class="img-404" />
      <p class="tips">404 Page. Please Login.</p>
      <button @click="Backtomain">Back to Main Page</button>
    </div>
    <!-- <button style = "float:right" @click="Backtomain">Back to Main Page</button>
    <h1>404Page. Please Login.</h1> -->
    <!-- <template v-if="!user">
      <h2> See the Content after Signing in</h2>
      <a href @click.prevent="signInWithGoogle">Sign in with Google</a>
      <h1>Find Nearby Restaurant</h1>
    </template>

    <template v-if="user">
      
      <img :src="user.photoURL" alt="avatar" style="width: 30px; height: 30px; border-radius: 50%;">
      <a href @click.prevent="signOut">Sign Out</a>
    </template> -->

    <!-- <pre>{{ user }}</pre> -->
    <tab-bar></tab-bar>

  </div>
</template>

<script>
import { auth, provider } from "@/firebaseConfig";
import TopBar from '@/components/top-bar'
import TabBar from '@/components/tab-bar/tab-bar'
import Img404 from '@/assets/img/404.svg'

export default {
    components: {
      TabBar,
      TopBar,
    },
    name: "Auth",
  data() {
    return {
      Img404,
      user: null
    };
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
    Backtomain(){
      this.$router.push({
        path: '/'
      })
    },
    signInWithGoogle: function() {
      auth.signInWithRedirect(provider)
        .then(result => {
          this.user = result.user;
        })
        .catch(err => console.log(err));
    },
    
  }
};
</script>

<style lang="scss" scoped>
.wrapper-404 {
  width: 100vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 340px;
    height: 340px;
  }
  .tips {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    margin-top: -24px;
  }
}
</style>
