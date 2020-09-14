<template lang="html">
  <div class="header-model">
    <h1 class="info" @click="goDocs">
      文档
    </h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
    methods: {
        goDocs() {
            this.$router.push('/docs/guide/introduce')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>