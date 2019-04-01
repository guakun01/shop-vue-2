<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="商家头像">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <support-ico :size="1" :type="seller.supports[0].type"></support-ico>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" @click="showDetails" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetails">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="mask">
      <img :src="seller.avatar" alt="头像蒙层" width="100%" height="100%">
    </div>
    <!-- <div v-show="detailsVisible" transition="fade" class="popup-details">
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
            <li v-for="item in seller.supports" class="support-item">
              <span class="icon" :class="classMap[item.type]"></span>
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
      <div class="details-close" @click="hideDetails">
        <i class="icon-close"></i>
      </div>
    </div> -->
  </div>
</template>

<script>
import SupportIco from 'components/support-ico'
// import GStar from '../star/star';

export default {
  name: 'GAppHeader',
  components: {
    // GStar,
    SupportIco,
  },
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    showDetails() {
      this.detailsVisible = true
    },
    hideDetails() {
      this.detailsVisible = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~common/scss/mixin.scss";
@import "~common/scss/var.scss";

.header {
  position: relative;
  overflow: hidden;
  color: $color-white;
  background: $color-background-ss;
  .content-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    padding: 24px 12px 18px 24px;
    .avatar {
      flex: 0 0 64px;
      width: 64px;
      margin-right: 16px;
      img {
        border-radius: 2px;
      }
    }
    .content {
      flex: 1;
      .title {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        .brand {
          width: 30px;
          height: 18px;
          @include bg-image('brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }
        .name {
          margin-left: 6px;
          font-size: $fontsize-large;
          font-weight: bold;
        }
      }
      .description {
        margin-bottom: 8px;
        line-height: 12px;
        font-size: $fontsize-small;
      }
      .support {
        display: flex;
        align-items: center;
        .support-ico {
          margin-right: 4px;
        }
        .text {
          line-height: 12px;
          font-size: $fontsize-small-s;
        }
      }
    }
    .support-count {
      position: absolute;
      right: 12px;
      bottom: 14px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: 14px;
      background: $color-background-sss;
      .count {
        font-size: $fontsize-small-s;
      }
      .icon-keyboard_arrow_right {
        margin-left: 2px;
        line-height: 24px;
        font-size: $fontsize-small-s;
      }
    }
  }
  .bulletin-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    background: $color-background-sss;
    .bulletin-title {
      flex: 0 0 22px;
      width: 22px;
      height: 12px;
      margin-right: 4px;
      @include bg-image('bulletin');
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }
    .bulletin-text {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: $fontsize-small-s;
    }
    .icon-keyboard_arrow_right {
      flex: 0 0 10px;
      width: 10px;
      font-size: $fontsize-small-s;
    }
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }
  // .popup-details {
  //   position: fixed;
  //   z-index: 99;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   overflow: auto;
  //   transition: all .3s;
  //   backdrop-filter: blur(10);
  //   &.fade-transition {
  //     opacity: 1;
  //     background: rgba(7, 17, 27, 0.8);
  //   }
  //   &.fade-enter, &.fade-leave {
  //     opacity: 0;
  //     background: rgba(7, 17, 27, 0);
  //   }
  //   .details-wrapper {
  //     display: inline-block;
  //     min-height: 100%;
  //     width: 100%;
  //     .details-main {
  //       margin-top: 64px;
  //       padding-bottom: 64px;
  //       .name {
  //         line-height: 16px;
  //         text-align: center;
  //         font-size: 16px;
  //         font-weight: 700;
  //       }
  //       .star-wrapper {
  //         margin-top: 18px;
  //         padding: 2px 0;
  //         text-align: center;
  //       }
  //       .title {
  //         display: flex;
  //         width: 80%;
  //         margin: 28px auto 24px auto;
  //         .line {
  //           flex: 1;
  //           position: relative;
  //           top: -6px;
  //           border-bottom: 1px solid rgba(255, 255, 255, .2);
  //         }
  //         .text {
  //           padding: 0 12px;
  //           font-weight: 700;
  //           font-size: 14px;
  //         }
  //       }
  //       .supports {
  //         width: 80%;
  //         margin: 0 auto;
  //         .support-item {
  //           padding: 0 12px;
  //           margin-bottom: 12px;
  //           font-size: 0;
  //           &:last-child {
  //             margin-bottom: 0;
  //           }
  //           .icon {
  //             display: inline-block;
  //             width: 16px;
  //             height: 16px;
  //             vertical-align: top;
  //             margin-right: 6px;
  //             background-size: 16px 16px;
  //             background-repeat: no-repeat;
  //             &.decrease {
  //               @include bg-image('decrease_2');
  //             }
  //             &.discount {
  //               @include bg-image('discount_2');
  //             }
  //             &.guarantee {
  //               @include bg-image('guarantee_2');
  //             }
  //             &.invoice {
  //               @include bg-image('invoice_2');
  //             }
  //             &.special {
  //               @include bg-image('special_2');
  //             }
  //           }
  //           .text {
  //             line-height: 16px;
  //             font-size: 12px;
  //           }
  //         }
  //       }
  //       .bulletin {
  //         width: 80%;
  //         margin: 0 auto;
  //         .content {
  //           padding: 0 12px;
  //           line-height: 24px;
  //           font-size: 12px;
  //         }
  //       }
  //     }
  //   }
  //   .details-close {
  //     position: relative;
  //     width: 32px;
  //     height: 32px;
  //     margin: -64px auto 0 auto;
  //     clear: both;
  //     font-size: 32px;
  //   }
  // }
}
</style>
