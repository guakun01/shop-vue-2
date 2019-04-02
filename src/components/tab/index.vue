<template>
  <div class="g-tab">
    <cube-tab-bar
      :showSlider=true
      v-model=selectedLabel
      :data=tabs
      ref=tabBar></cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
        :loop=false
        :auto-play=false
        :show-dots=false
        :initial-index=index
        ref=slide
        >
        <cube-slide-item>
          <goods></goods>
        </cube-slide-item>
        <cube-slide-item>
          <ratings></ratings>
        </cube-slide-item>
        <cube-slide-item>
          <seller></seller>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
import Goods from '../goods'
import Seller from '../seller'
import Ratings from '../ratings'

export default {
  name: 'GTab',
  components: {
    Goods,
    Seller,
    Ratings,
  },
  data() {
    return {
      index: 0,
      tabs: [
        { label: '商品' },
        { label: '评价' },
        { label: '商家' },
      ],
    }
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label
      },
      set(newVal) {
        this.index = this.tabs.findIndex((value) => {
          return value.label === newVal
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/var.scss";
.g-tab {
  ::v-deep .cube-tab {
    padding: 10px 0;
  } 
  display: flex;
  flex-direction: column;
  height: 100px;
  .slide-wrapper {
    flex: 1;
    overflow: hidden;
  }
}

</style>
