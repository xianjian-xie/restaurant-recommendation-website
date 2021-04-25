<template>
  <div class="cross-item">
    <span class="ico"><slot></slot></span>
    <span class="name">{{name}}</span>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: {
    name: {
      type: String,
      default: 'My'
    }
  },
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.cross-item {
  color: #333;
  height: 44px;
  line-height: 46px;
  background: #fff;
  border-bottom: 1px solid #E4E4E4;
  margin: 0 15px;
  padding: 0 10px;
  .ico {
    display: inline-block;
    width: 30px;
    i {
      font-size: 20px;
      color: #fe970f;
    }
  }
  .name {
    font-size: 15px;
  }
}
</style>
