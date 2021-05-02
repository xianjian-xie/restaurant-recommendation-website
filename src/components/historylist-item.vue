<template>
<b-col sm="12" md="6"  >
  <div class="historylist-item">
    <div class="restaurant-info" @click="toRestaurant">
        <div class="avatar">
            <img :src="data.restaurantAvatar">
        </div>
        <div class="infos">
            <div class="name">{{ data.restaurantName }}</div>
            <div class="score">
                <Star :size="24" :score="Number(data.score)"></Star>
                <div class="score-text">{{ data.score }}</div>
            </div>
            <div class="comment-count">{{ data.commentCount }} comments</div>
        </div>
    </div>
    <div class="comments" v-if="data.comments.trim().length">
        <div class="title">Your comment</div>
        <div class="comment-text">{{ data.comments.trim() }}</div>
    </div>
    <div class="actions">
        <div class="action-btn" v-if="data.comments.trim().length" @click="editComment">Edit Comment</div>
        <div class="action-btn" v-else @click="addComment">Add Comment</div>
        <div class="action-btn" @click="addToWishlist">Add to Wishlist</div>
    </div>
  </div>
  </b-col>
</template>

<script>
import Star from '@/components/star/star'

export default {
  name: 'HistoryListItem',
  components: {
      Star
  },
  data () {
    return {}
  },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {},
  methods: {
    toRestaurant () {
        console.log('to restaurant detail')
    },
    editComment () {
        console.log('to edit comment')
    },
    addComment () {
        console.log('to add comment')
    },
    addToWishlist () {
        console.log('add restaurant to wishlist')
        this.$emit('onAddRestaurantToWishlist', { data: this.data })
    }
  },
  filters: {},
  computed: {},
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
.historylist-item {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding: 12px;
    // margin-top: 12px;
    background: #ffffff;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    .restaurant-info {
        width: 100%;
        height: 80px;
        display: flex;
        cursor: pointer;
        .avatar {
            flex-shrink: 0;
            width: 80px;
            height: 80px;
            border-radius: 6px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .infos {
            flex: 1;
            height: 80px;
            margin-left: 12px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            .name {
                width: 100%;
                font-size: 18px;
                color: rgba(0, 0, 0, 0.85);
                font-weight: 700;
                line-height: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .score {
                margin-top: 8px;
                display: flex;
                align-items: center;
                .score-text {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.55);
                    margin-left: 4px;
                }
            }
            .comment-count {
                margin-top: 8px;
                font-size: 12px;
                color: rgba(0, 0, 0, 0.65);
            }
        }
    }
    .comments {
        position: relative;
        margin-top: 8px;
        width: 100%;
        .title {
            font-size: 14px;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 700;
            line-height: 1;
        }
        .comment-text {
            font-size: 14px;
            color: rgba(0, 0, 0, 0.65);
            margin-top: 4px;
            line-height: 1.4;
            text-align: justify;
            word-break: break-all;
        }
    }
    .actions {
        position: relative;
        margin-top: 8px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        .action-btn {
            margin: 12px 0 0 8px;
            padding: 8px 16px;
            border-radius: 6px;
            background: rgb(253, 199, 88);
            border: 1px solid rgb(253, 199, 88);
            font-size: 13px;
            color: rgba(0, 0, 0, 0.85);
            cursor: pointer;
            &:nth-last-of-type(1) {
                background: transparent;
                border: 1px solid rgba(0, 0, 0, 0.1);
            }
        }
    }
}
</style>
