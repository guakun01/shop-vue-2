<template>
  <div id="app">
    <g-header :seller="seller"></g-header>
    <g-tab></g-tab>
  </div>
</template>

<script>
import GHeader from 'components/g-header'
import GTab from 'components/tab'
import { getSeller } from 'api'

export default {
  name: 'app',
  components: {
    GHeader,
    GTab,
  },
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller()
        .then(seller => {
          this.seller = seller
        })
    }
  }
}
</script>

<style lang="scss">
</style>
