<template>
  <div class="restaurant-header" v-if="restaurant">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="restaurant.image_url">
      </div>

      <div class="content">
        <div class="title">
          <span class="name">{{ restaurant.name }}</span>
        </div>

        <div class="description">
          <span v-for="category in restaurant.categories" :key ="category.name" class="start"> {{ category.title }} |</span>      
        </div>

        <!-- star -->
        <div class="supports">
          <div class="star-wrapper">
              <star :size="36" :score="restaurant.rating"></star>
            </div>
        </div>
      </div>
    </div>

    <!-- background -->
    <div class="background">
      <img :src="restaurant.image_url">
    </div>

    <!-- return icon -->
    <div class="back" @click="back">
      <i class="fa fa-arrow-left"></i>
    </div>
  </div>
</template>

<script>
import Star from '@/components/star/star'

export default {
  components: {
    Star
  },
  data () {
    return {
    }
  },
  props: {
    restaurant: {
      type: Object
    }
  },
  watch: {},
  methods: {
    back () {
      this.$router.push({path: '/search'})
    }
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

.restaurant-header {
  position: relative;
  color: #fff;
  line-height: 1;
  font-size: 13px;
  font-weight: 200;
  overflow: hidden;
  background-color: rgba(7, 17, 27, 0.5);
  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;
    .avatar {
      display: inline-block;
      font-size: 14px;
      vertical-align: top;
      img {
        width: 64px;
        height: 64px;
        border-radius: 2px;
      }
    }
    .content {
      display: inline-block;
      margin-left: 16px;
      .title {
        margin: 2px 0 8px 0;
        .brand {
          width: 30px;
          height: 18px;
          display: inline-block;
          vertical-align: top;
          background-size: 30px 18px;
          background-repeat: no-repeat;
          // @include bg-image('./img/brand');
        }
        .name {
          margin-left: 0px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
        }
      }
      .description {
        margin-bottom: 10px;
        font-size: 13px;
        line-height: 13px;
      }
      .supports {
        .icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          vertical-align: top;
        }
        .text {
          font-size: 10px;
          line-height: 12px;
        }
      }
    }
    .supports-count {
      position: absolute;
      right: 12px;
      bottom: 18px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: 14px;
      background-color: rgba(0, 0, 0, 0.2);
      span {
        font-size: 10px;
        line-height: 24px;
      }
      i {
        position: relative;
        top: 1px;
        font-size: 10px;
        margin-left: 2px;
        line-height: 24px;
      }
    }
  }
  .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    background-color: rgba(7, 17, 27, 0.2);
    @include ellipsis(1);
    .brand {
      display: inline-block;
      width: 22px;
      height: 12px;
      // @include bg-image('./img/bulletin');
      background-size: 22px 12px;
      background-repeat: no-repeat;
      vertical-align: top;
      margin-top: 7px;
    }
    .text {
      font-size: 10px;
      margin: 0 4px;
      vertical-align: top;
    }
    i {
      position: absolute;
      top: 8px;
      right: 12px;
      font-size: 10px;
    }
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      filter: blur(10px);
    }
  }
  .detail {
    @include over-screen();
    z-index: 100;
    overflow: auto;
    background-color: rgba(7, 17, 27, 0.8);
    backdrop-filter: blur(10px);
    .detail-wrapper {
      min-height: 100%;
      .detail-main {
        padding-top: 64px;
        padding-bottom: 64px;
        .name {
          text-align: center;
          font-weight: 700;
          font-size: 16px;
          line-height: 16px;
        }
        .star-wrapper {
          margin-top: 18px;
          padding: 2px 0;
          text-align: center;
        }
        .title {
          display: flex;
          width: 80%;
          margin: 28px auto;
          .line {
            flex: 1;
            position: relative;
            top: -6px;
            left: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2)
          }
          .text {
            text-align: center;
            padding: 0 12px;
            font-size: 14px;
            font-weight: 600;
          }
        }
        .detail-supports {
          width: 80%;
          margin: 0 auto;
          .supports-item {
            padding: 0 12px;
            margin-bottom: 12px;
            font-size: 0;
            &:last-child {
              margin-bottom: 0;
            }
            .icon {
              width: 16px;
              height: 16px;
              vertical-align: top;
              margin-right: 6px;
              background-size: 16px 16px;
              background-repeat: no-repeat;
              display: inline-block;
            }
            .text {
              display: inline-block;
              line-height: 16px;
              font-size: 12px;
              font-weight: normal;
            }
          }
        }
        .detail-text {
          width: 80%;
          margin: 0 auto;
          .text {
            font-weight: normal;
            text-align: left;
            text-indent: 2em;
            font-size: 12px;
            line-height: 24px;
            padding: 0 12px;
          }
        }
        @media screen and (max-width: 320px) {
          .detail-supports {
            width: 90%;
          }
          .detail-text {
            width: 90%;
          }
        }
      }
    }
    .detail-close {
      position: relative;
      clear: both;
      width: 32px;
      height: 32px;
      font-size: 32px;
      margin: -50px auto 0;
    }
  }
  // return
  .back {
    position: fixed;
    top: 25px;
    right: 19px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
    i {
      display: block;
      padding: 7px;
      font-size: 20px;
      color: #fff;
    }
  }
}

// fade
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
