<template>
  <!-- <div class="title-bar">
    <span>{{ txt }}</span>
  </div> -->
  <div class="topbar">
        <title-bar txt="Dr. Restaurant Seeker"></title-bar>
        <button @click="login">Login</button>
        <button @click="logout">Logout</button>
    </div>
</template>



<script>
import TitleBar from '@/components/title-bar'
export default {
  components: {TitleBar},
  data () {
    return {}
  },
  props: {
    
  },
  watch: {},
  methods: {
    login () {
      this.$router.push({
        path: '/login'
      })
    },
    logout () {
      this.$router.push({
        path: '/logout'
      })
    },
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
