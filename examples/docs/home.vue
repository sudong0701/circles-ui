<template lang="html">
  <div class="header-model">
    <h1 class="info">
      主页还未设计，点击 <span @click="goDocs" style="color: #5a96ec; cursor: pointer;">这里</span>查看文档
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