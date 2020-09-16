<template>
    <div class="picker-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="基础用法" @click="showBasis"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">多列选择</div>
            <div class="button-demo-content">
                <cs-button type="success" text="多列选择" @click="showMulti"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">级联选择</div>
            <div class="button-demo-content">
                <cs-button type="warning" text="级联选择" @click="showCascade"></cs-button>
            </div>
        </div>

        <cs-popup v-model="isShowBasis" :closeOnClickOverlay="false">
            <cs-Picker v-model="valueBasis" :columns="columnsBasis" @change="basisChange" @clickRightBtn="closePicker" @clickLeftBtn="closePicker"></cs-Picker >
        </cs-popup>

        <cs-popup v-model="isShowMulti">
            <cs-Picker v-model="valueMulti" :columns="columnsMulti" @clickRightBtn="isShowMulti = false" @clickLeftBtn="isShowMulti = false"></cs-Picker >
        </cs-popup>

        <cs-popup v-model="isShowCascade">
            <cs-Picker v-model="valueCascade" :isCascade="true" customName="label" customChild="children"  :columns="city" @change="cascadeChange" @clickRightBtn="isShowCascade = false" @clickLeftBtn="isShowCascade = false"></cs-Picker >
        </cs-popup>

    </div>
</template>

<script>
    import city from '../../assets/js/city'
    export default {
        name: '',
        data() {
            return {
                isShowBasis: false,
                valueBasis: [2],
                columnsBasis: [
                    {
                        values: [{name: '苹果', id: 1}, {name: '橘子', id: 2}, {name: '木瓜', id: 3}, {name: '葡萄', id: 4}, {name: '西瓜', id: 5}, {name: '桃子', id: 6}, {name: '梨子', id: 7}, {name: '山竹', id: 8}, {name: '车厘子', id: 9}, {name: '香蕉', id: 10}]
                    }
                ],
                isShowMulti: false,
                valueMulti: [2,6,3],
                columnsMulti: [
                    {
                        values: [{name: '苹果', id: 1}, {name: '橘子', id: 2}, {name: '木瓜', id: 3},
                            {name: '葡萄', id: 4}, {name: '西瓜', id: 5}, {name: '桃子', id: 6},
                            {name: '梨子', id: 7}, {name: '山竹', id: 8}, {name: '车厘子', id: 9},
                            {name: '香蕉', id: 10}]
                    },
                    {
                        values: [{name: '芹菜', id: 1}, {name: '苦菊', id: 2}, {name: '油麦菜', id: 3},
                            {name: '辣椒', id: 4}, {name: '洋葱', id: 5}, {name: '豆角', id: 6},
                            {name: '黄瓜', id: 7}, {name: '胡萝卜', id: 8}, {name: '杏鲍菇', id: 9},
                            {name: '生菜', id: 10}]
                    },
                    {
                        values: [{name: '猪肉', id: 1}, {name: '牛肉', id: 2}, {name: '羊肉', id: 3},
                            {name: '驴肉', id: 4}, {name: '耗牛肉', id: 5}, {name: '鸡肉', id: 6},
                            {name: '鸭肉', id: 7}, {name: '鹅肉', id: 8}]
                    },
                ],
                city: city,
                isShowCascade: false,
                valueCascade: [4,2,3]
            }
        },
        methods: {
            showBasis() {
                this.isShowBasis = true
            },
            basisChange(e) {
                this.Toast({
                    content: `当前选择${e[0].name},索引${e[0].key}`
                })
            },
            closePicker() {
                this.isShowBasis = false
            },
            showMulti() {
                this.isShowMulti = true
            },
            showCascade() {
                this.isShowCascade = true
            },
            cascadeChange(e) {
                this.Toast({
                    content: `${e[0].label}/${e[1].label}/${e[2].label}`
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>