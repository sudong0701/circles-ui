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
                <cs-button type="primary" text="顶部弹出" @click="showPopupTop"></cs-button>
                <cs-button type="primary" text="右侧弹出" @click="showPopupRight"></cs-button>
                <cs-button type="primary" text="下部弹出" @click="showPopupBottom"></cs-button>
                <cs-button type="primary" text="左侧弹出" @click="showPopupLeft"></cs-button>
                <cs-button type="primary" text="中部弹出" @click="showPopupCenter"></cs-button>
            </div>
        </div>

        <cs-popup v-model="isShow">
            <div style="height: 2.4rem">内容</div>
        </cs-popup>

        <cs-popup v-model="isShowTop">
            <div style="height: 2.4rem">顶部弹出</div>
        </cs-popup>

        <cs-popup v-model="isShowRight">
            <div style="height: 2.4rem">右侧弹出</div>
        </cs-popup>

        <cs-popup v-model="isShowBottom">
            <div style="height: 2.4rem">下部弹出</div>
        </cs-popup>

        <cs-popup v-model="isShowLeft">
            <div style="height: 2.4rem">左侧弹出</div>
        </cs-popup>

        <cs-popup v-model="isShowCenter">
            <div style="height: 2.4rem">中部弹出</div>
        </cs-popup>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            showPopup() {
                this.isShow = true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .popup-demo {

    }
</style>