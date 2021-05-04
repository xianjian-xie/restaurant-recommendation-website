<template>
  <div class="ratings" ref="ratingsRef">
    <div class="foods-wrapper" ref="foodsRef">
            <ul>
              <li class="foods-item" v-for="photo in restaurantDetail.photos" :key="photo.name">
                <div class="icon">
                  <img :src="photo">
                  <!-- v-lazy -->
                </div>
              </li>
            </ul>
      </div>

    <div class="ratings-content">
      <cross-line></cross-line>

      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="review in ratings" :key="review.name" @click="toReview(review)">
            <div class="avatar">
              <img :src="review.user.image_url">
            </div>

            <div class="content">
              <h1 class="name">{{review.user.name}}</h1>

              <div class="star-wrapper">
                <star :size="24" :score="review.rating"></star>
              </div>

              <p class="text">{{review.text}}</p>

              <!-- <div class="recommend" v-show="rating.recommend && rating.recommend.length"> -->
                <!-- <i class="icon-thumb_up"></i> -->
                <!-- <span class="item" v-for="item in rating.recommend">{{item}}</span> -->
              <!-- </div> -->


              <div class="time">
                {{review.time_created}}
                <!-- | moment -->
              </div>
            </div>
          </li>
        </ul>

        <!-- 无评价时的样式 -->
        <div class="no-rating" v-show="!ratings || !ratings.length">No Comments</div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '@/components/star/star'
import CrossLine from '@/components/cross-line'
import axios from 'axios'

export default {
  components: {
    Star,
    CrossLine
  },
  data () {
    return {
      ratings: null,
      restaurantDetail: null
    }
  },
  props: {},
  watch: {},
  methods: {
    toReview (nowreview) {
      window.open(nowreview.url)
     },
  },
  filters: {
  },
  computed: {},
  created () {
  },
  mounted () {
    console.log(this.$route.params.data)

    axios.get('https://boiling-waters-50053.herokuapp.com/https://api.yelp.com/v3/businesses/'+this.$route.params.data.id+'/reviews',{
        headers:{
          'Authorization': 'Bearer x2sEHlXYD2bWhWNBBL6jG8QstSmJNXpjZLVIAzyE6QhPpzKvFxZC7OKWy3b6iFLucFHjchzmJS6YjNEDGa6aXY5ORGdC5ngDHQvv16t719ENUcJ5Vd5CMq0boeiFYHYx',
        }
      }).then(res =>{
        console.log(res)
	if(res){
		this.ratings = res.data.reviews
    console.log(res.data.reviews)
	}
      })


        axios.get('https://boiling-waters-50053.herokuapp.com/https://api.yelp.com/v3/businesses/'+this.$route.params.data.id,{
        headers:{
          'Authorization': 'Bearer x2sEHlXYD2bWhWNBBL6jG8QstSmJNXpjZLVIAzyE6QhPpzKvFxZC7OKWy3b6iFLucFHjchzmJS6YjNEDGa6aXY5ORGdC5ngDHQvv16t719ENUcJ5Vd5CMq0boeiFYHYx',
        }
      }).then(res =>{
        console.log(res)
	if(res){
		this.restaurantDetail = res.data
    console.log("lueluelue",this.restaurantDetail)
	}
      })



  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.ratings {
  position: absolute;
  top: 174px;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  // overflow: hidden;
  .ratings-content {
    .overview {
      display: flex;
      padding: 18px 0;
      .left {
        flex: 0 0 137px;
        width: 137px;
        border-right: 1px solid rgba(7, 17, 27, 0.1);
        text-align: center;
        padding: 6px 0;
        .score {
          line-height: 24px;
          font-size: 24px;
          color: rgb(255, 153, 0);
          margin-bottom: 6px;
        }
        .title {
          line-height: 12px;
          font-size: 12px;
          color: rgb(7, 17, 27);
          margin-bottom: 8px;
        }
        .rank {
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
      }
      .right {
        flex: 1;
        padding: 6px 0 6px 24px;
        .service, .goods {
          margin-bottom: 8px;
          line-height: 18px;
          font-size: 0;
          .title {
            font-size: 12px;
            color: rgb(7, 17, 27);
          }
          .star {
            display: inline-block;
            vertical-align: top;
            margin: 0 12px;
          }
          .score {
            font-size: 12px;
            color: rgb(255, 153, 0);
          }
        }
        .delivery {
          line-height: 18px;
          font-size: 0;
          .title {
            font-size: 12px;
            color: rgb(7, 17, 27);
          }
          .time {
            font-size: 12px;
            margin: 0 12px;
            color: rgb(147, 153, 159);
          }
        }
      }
      @media screen and (max-width: 320px) {
        .left {
          flex: 0 0 120px;
          width: 120px;
        }
        .right {
          padding: 5px;
        }
      }
    }
    .rating-wrapper {
      padding: 0 18px;
      .rating-item {
        display: flex;
        padding: 18px 0;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        .avatar {
          flex: 0 0 28px;
          width: 28px;
          margin-right: 12px;
          img {
            width: 28px;
            height: 28px;
            border-radius: 50%;
          }
        }
        .content {
          position: relative;
          flex: 1;
          .name {
            font-size: 10px;
            line-height: 12px;
            color: rgb(7, 17, 27);
            margin-bottom: 4px;
          }
          .star-wrapper {
            margin-bottom: 4px;
            font-size: 0;
            .star {
              display: inline-block;
              vertical-align: top;
              margin-right: 6px;
            }
            .deliveryTime {
              display: inline-block;
              vertical-align: top;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
          }
          .text {
            line-height: 18px;
            font-size: 14px;
            color: rgb(7, 17, 27);
            margin-bottom: 8px;
          }
          .recommend {
            line-height: 16px;
            i {
              display: inline-block;
              margin: 0 8px 4px 0;
              font-size: 9px;
              color: rgb(0, 160, 220);
            }
            .item {
              // display: inline-block;
              margin-right: 5px;
              padding: 0 6px;
              font-size: 10px;
              border: 1px solid rgba(7, 17, 27, 0.1);
              border-radius: 5px;
              color: rgb(147, 153,159);
              background-color: #fff;
            }
          }
          .time {
            position: absolute;
            top: 0;
            right: 0;
            line-height: 12px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
      }
      .no-rating {
        padding: 16px 0;
        font-size: 14px;
        color: rgb(147, 153, 159);
      }
    }
  }


  .foods-wrapper {
    flex: 1;
    height: 230px;
    .ul {
      display: inline;
    }
        .foods-item {
          position: relative;
          display: inline;
          margin: 0px;
          // padding-bottom: 18px;
          @include onepx('bottom', true);
          .icon {
            float:left;
            // flex: 0 0 25%;
            width: 25%;
            height: 25%;
            margin-right: 20px;
            max-width:150px;
            max-height:150px;
            img {
              float:left;
              width: 100%;
              height: 100%;
            }
          }
          .content {
            flex: 1;
            .name {
              font-size: 14px;
              margin: 2px 0 8px 0;
              height: 14px;
              line-height: 14px;
              color: rgb(7, 17, 27);
            }
            .desc {
              margin-bottom: 8px;
              line-height: 14px;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
            .extra {
              margin-bottom: 8px;
              line-height: 12px;
              font-size: 0;
              color: rgb(147, 153, 159);
              .count {
                font-size: 10px;
                margin-right: 12px;
              }
              .rating {
                font-size: 10px;
              }
            }
            .price {
              font-weight: 700;
              line-height: 24px;
              .now {
                margin-right: 8px;
                font-size: 14px;
                color: rgb(240, 20, 20);
              }
              .old {
                font-size: 10px;
                color: rgb(147, 153, 159);
                text-decoration: line-through;
              }
            }
            .control {
              position: absolute;
              right: 0;
              bottom: 1px;
            }
          }
        }
    }

  

}
</style>