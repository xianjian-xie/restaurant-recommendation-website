<template>
<div class="auth">

    <top-bar></top-bar>
    <button style = "float:right" @click="Backtomain">Back to Main Page</button>
    <h1>404Page. Please Login.</h1>
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
  </div>
</template>

<script>
import { auth, provider } from "@/firebaseConfig";
import TopBar from '@/components/top-bar'

export default {
    components: {
      TopBar,
    },
    name: "Auth",
  data() {
    return {
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