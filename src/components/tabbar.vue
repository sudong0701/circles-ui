<template>
    <div class="tabbar">
        <div @click="show">显示</div>
        <cs-tabbar fixed v-model="active" @change="changeTab" ref="tabbar">
            <csTabbarItem icon="home" :dot="true">主页</csTabbarItem>
            <csTabbarItem  badge="2">购物车
                <template #icon="props">
                    <i :style="`color: ${props.active ? '#1989fa' : '#7d7e80'}`" class="iconfont iconcart"></i>
                </template>
            </csTabbarItem>
            <csTabbarItem v-if="isShow" icon="apps">菜单</csTabbarItem>
            <csTabbarItem icon="people">我的</csTabbarItem>
        </cs-tabbar>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                active: 0,
                isShow: false
            }
        },
        methods: {
            changeTab(key) {
                console.log(key)
            },
            show() {
                this.isShow = !this.isShow
                this.$refs.tabbar.initComponent()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbar {
    padding-top: 1rem;
    height: 20rem;
    background-color: #f4f4f4;
}
</style>