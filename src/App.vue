<template>
  <div id="app">
    <g-header :seller="seller"></g-header>
  </div>
</template>

<script>
import GHeader from 'components/g-header'
import HeaderDetail from 'components/header-detail'
import { getSeller } from 'api'

export default {
  name: 'app',
  components: {
    GHeader,
    HeaderDetail,
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
