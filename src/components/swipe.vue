<template>
    <div class="swipe">
        <div style="text-align: center; line-height: 1.2rem">轮播图组件</div>
        <sd-swipe>
            <sd-swipe-item>
                <img src="../../static/img/1.jpg" alt="">
            </sd-swipe-item>
            <sd-swipe-item>
                <img src="../../static/img/2.jpg" alt="">
            </sd-swipe-item>
            <sd-swipe-item>
                <img src="../../static/img/3.jpg" alt="">
            </sd-swipe-item>
            <sd-swipe-item>
                <img src="../../static/img/4.jpg" alt="">
            </sd-swipe-item>
        </sd-swipe>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    width: 100%;
    height: 3.6rem;
}
</style>