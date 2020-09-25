<template>
    <div class="tabbar-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <cs-tabbar v-model="active" @change="changeTab">
                    <csTabbarItem icon="home">主页</csTabbarItem>
                    <csTabbarItem icon="cart">购物车</csTabbarItem>
                    <csTabbarItem icon="apps">菜单</csTabbarItem>
                    <csTabbarItem icon="people">我的</csTabbarItem>
                </cs-tabbar>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">徽标提示</div>
            <div class="button-demo-content">
                <cs-tabbar v-model="activeTip">
                    <csTabbarItem icon="home">主页</csTabbarItem>
                    <csTabbarItem icon="cart" badge="2">购物车</csTabbarItem>
                    <csTabbarItem icon="apps" :dot="true">菜单</csTabbarItem>
                    <csTabbarItem icon="people">我的</csTabbarItem>
                </cs-tabbar>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义图标</div>
            <div class="button-demo-content">
                <cs-tabbar v-model="activeCustom">
                    <csTabbarItem>主页
                        <template #icon="props">
                            <cs-icon name="upstage" :color="props.active ? '#1989fa' : '#7d7e80'"></cs-icon>
                        </template>
                    </csTabbarItem>
                    <csTabbarItem icon="cart">购物车</csTabbarItem>
                    <csTabbarItem icon="apps">设置
                        <template #icon="props">
                            <cs-icon name="repair" :color="props.active ? '#1989fa' : '#7d7e80'"></cs-icon>
                        </template>
                    </csTabbarItem>
                    <csTabbarItem icon="people">我的</csTabbarItem>
                </cs-tabbar>
            </div>
        </div>


        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义颜色</div>
            <div class="button-demo-content">
                <cs-tabbar  v-model="activeColor" activeColor="#67c23a">
                    <csTabbarItem icon="home">主页</csTabbarItem>
                    <csTabbarItem icon="cart">购物车</csTabbarItem>
                    <csTabbarItem icon="apps">菜单</csTabbarItem>
                    <csTabbarItem icon="people">我的</csTabbarItem>
                </cs-tabbar>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                active: 0,
                activeTip: 1,
                activeCustom: 2,
                activeColor: 0
            }
        },
        methods: {
            changeTab(e) {
                this.Toast({
                    content: `当前选中索引${e}`
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabbar-demo {
        height: calc(100% - 0.92rem);
        overflow-y: auto;
        scrollbar-width: none; /* firefox */
        -ms-overflow-style: none; /* IE 10+ */
        overflow-x: hidden;
        .cs-doc-demo-block {
            padding: 0;
            .button-demo-content {

            }
        }
    }
</style>