<template>
  <transition name="fade">
    <div v-show="visible" class="popup-details" @touchmove.stop.prevent>
      <div class="details-wrapper clearfix">
        <div class="details-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <g-star :size="48" :score="seller.score"></g-star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li v-for="item in seller.supports" class="support-item" :key="item.id">
              <support-ico :size="2" :type="item.type"></support-ico>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="details-close" @click="hide">
        <i class="icon-close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import popupMixin from 'common/mixins/popup'
import GStar from '../star/star'
import SupportIco from 'components/support-ico'

export default {
  name: 'HeaderDetail',
  components: {
    GStar,
    SupportIco,
  },
  mixins: [
    popupMixin,
  ],
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~common/scss/mixin.scss";
@import "~common/scss/var.scss";

.popup-details {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    backdrop-filter: blur(10);
    opacity: 1;
    color: $color-white;
    background: $color-background-s;
    &.fade-enter-active, &.fade-leave-active {
      transition: all .5s;
    }
    &.fade-enter, &.fade-leave-active {
      opacity: 0;
      background: $color-background;
    }
    .details-wrapper {
      display: inline-block;
      width: 100%;
      min-height: 100%;
      .details-main {
        margin-top: 64px;
        padding-bottom: 64px;
        .name {
          line-height: 16px;
          text-align: center;
          font-size: $fontsize-large;
          font-weight: 700;
        }
        .star-wrapper {
          margin-top: 18px;
          padding: 2px 0;
          text-align: center;
        }
        .title {
          display: flex;
          width: 80%;
          margin: 28px auto 24px auto;
          .line {
            flex: 1;
            position: relative;
            top: -6px;
            border-bottom: 1px solid rgba(255, 255, 255, .2);
          }
          .text {
            padding: 0 12px;
            font-weight: 700;
            font-size: $fontsize-medium;
          }
        }
        .supports {
          width: 80%;
          margin: 0 auto;
          .support-item {
            display: flex;
            align-items: center;
            padding: 0 12px;
            margin-bottom: 12px;
            &:last-child {
              margin-bottom: 0;
            }
            .support-ico {
              margin-right: 6px;
            }
            .text {
              line-height: 16px;
              font-size: $fontsize-small;
            }
          }
        }
        .bulletin {
          width: 80%;
          margin: 0 auto;
          .content {
            padding: 0 12px;
            line-height: 24px;
            font-size: $fontsize-small;
          }
        }
      }
    }
    .details-close {
      position: relative;
      width: 30px;
      height: 30px;
      margin: -64px auto 0 auto;
      clear: both;
      font-size: $fontsize-large-xxxx;
    }
  }
</style>
