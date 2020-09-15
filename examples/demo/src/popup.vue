<template>
    <div class="popup-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="展示弹出层" @click="showPopup"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">弹出位置</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="顶部弹出" @click="showPopupPosition('Top')"></cs-button>
                <cs-button type="primary" text="右侧弹出" @click="showPopupPosition('Right')"></cs-button>
                <cs-button type="primary" text="下部弹出" @click="showPopupPosition('Bottom')"></cs-button>
                <cs-button type="primary" text="左侧弹出" @click="showPopupPosition('Left')"></cs-button>
                <cs-button type="primary" text="中部弹出" @click="showPopupPosition('Center')"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">是否点击遮罩层关闭</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="点击关闭" @click="showPopupClose"></cs-button>
                <cs-button type="primary" text="不会关闭" @click="showPopupNoClose"></cs-button>
            </div>
        </div>

        <cs-popup v-model="isShow">
            <div style="height: 2.4rem">内容</div>
        </cs-popup>

        <cs-popup v-model="isShowTop" position="top">
            <div style="height: 2.4rem">顶部弹出</div>
        </cs-popup>

        <cs-popup v-model="isShowRight" position="right">
            <div style="height: 2.4rem">右侧弹出</div>
        </cs-popup>

        <cs-popup v-model="isShowBottom" position="bottom">
            <div style="height: 2.4rem">下部弹出</div>
        </cs-popup>

        <cs-popup v-model="isShowLeft" position="left">
            <div style="height: 2.4rem">左侧弹出</div>
        </cs-popup>

        <cs-popup v-model="isShowCenter" position="center">
            <div style="height: 1.5rem; width: 3rem">中部弹出</div>
        </cs-popup>

        <cs-popup v-model="isShowClose">
            <div style="height: 3rem">点击遮罩层自动关闭</div>
        </cs-popup>

        <cs-popup v-model="isShowNoClose" :closeOnClickOverlay="false">
            <div style="height: 3rem; position: relative">
                <span style="line-height: 3rem">点击遮罩层不会关闭</span>
                <i class="iconfont icon_close_simple" style="font-size: 0.4rem; position: absolute; right: 0.24rem; top: 0.24rem;cursor: pointer" @click="closePopupNoClose"></i>
            </div>
        </cs-popup>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShow: false,
                isShowTop: false,
                isShowRight: false,
                isShowBottom: false,
                isShowLeft: false,
                isShowCenter: false,
                isShowClose: false,
                isShowNoClose: false
            }
        },
        methods: {
            showPopup() {
                this.isShow = true
            },
            showPopupPosition(type) {
                this[`isShow${type}`] = true
            },
            showPopupClose() {
                this.isShowClose = true
            },
            showPopupNoClose() {
                this.isShowNoClose = true
            },
            closePopupNoClose() {
                this.isShowNoClose = false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .popup-demo {
        .button-demo-content {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            >div {
                margin-bottom: 0.3rem;
                margin-right: 0.2rem;
            }
        }
    }
</style>