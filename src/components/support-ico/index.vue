<template>
  <span class="supports-ico" :class="iconCls"></span>
</template>

<script>
export default {
  name: 'SupportIco',
  props: {
    size: {
      type: Number,
    },
    type: {
      type: Number,
    },
  },
  computed: {
    iconCls() {
      const classMap = [
        'decrease',
        'discount',
        'special',
        'invoice',
        'guarantee',
      ]
      return `icon-${this.size} ${classMap[this.type]}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/mixin.scss";

.support-ico {
  display: inline-block;
  background-repeat: no-repeat;
  .icon-4 {
    width: 16px;
    height: 16px;
    background-size: 16px 16px;
    &.decrease {
      @include bg-image('decrease_4');
    }
    &.discount {
      @include bg-image('discount_4');
    }
    &.gurantee {
      @include bg-image('gurantee_4');
    }
    &.invoice {
      @include bg-image('invoice_4');
    }
    &.special {
      @include bg-image('special_4');
    }
  }
  .icon-3 {
    width: 12px;
    height: 12px;
    background-size: 12px 12px;
    &.decrease {
      @include bg-image('decrease_3');
    }
    &.discount {
      @include bg-image('discount_3');
    }
    &.gurantee {
      @include bg-image('gurantee_3');
    }
    &.invoice {
      @include bg-image('invoice_3');
    }
    &.special {
      @include bg-image('special_3');
    }
  }
  .icon-2 {
    width: 16px;
    height: 16px;
    background-size: 16px 16px;
    &.decrease {
      @include bg-image('decrease_2');
    }
    &.discount {
      @include bg-image('discount_2');
    }
    &.gurantee {
      @include bg-image('gurantee_2');
    }
    &.invoice {
      @include bg-image('invoice_2');
    }
    &.special {
      @include bg-image('special_2');
    }
  }
  .icon-1 {
    width: 12px;
    height: 12px;
    background-size: 12px 12px;
    &.decrease {
      @include bg-image('decrease_1');
    }
    &.discount {
      @include bg-image('discount_1');
    }
    &.gurantee {
      @include bg-image('gurantee_1');
    }
    &.invoice {
      @include bg-image('invoice_1');
    }
    &.special {
      @include bg-image('special_1');
    }
  }
}
</style>
