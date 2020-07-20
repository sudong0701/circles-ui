<template>
    <div class="noticeBar">
        <sd-noticeBar  :scrollable="true" :text="text" mode="close" delay="0.5" speed="50">
        </sd-noticeBar>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                text: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .noticeBar {
        margin-top: 30px;
    }
</style>