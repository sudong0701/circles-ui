<template>
    <div class="radio-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <csRadioGroup v-model="radio">
                    <csRadio name="1">单选框1</csRadio>
                    <csRadio name="2">单选框2</csRadio>
                </csRadioGroup>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">禁用状态</div>
            <div class="button-demo-content">
                <csRadioGroup v-model="radioDisabled" disabled>
                    <csRadio name="1">禁用单选框1</csRadio>
                    <csRadio name="2">禁用单选框2</csRadio>
                </csRadioGroup>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">单个禁用</div>
            <div class="button-demo-content">
                <csRadioGroup v-model="radioDisabled">
                    <csRadio name="1" disabled >禁用单选框1</csRadio>
                    <csRadio name="2">禁用单选框2</csRadio>
                </csRadioGroup>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义形状</div>
            <div class="button-demo-content">
                <csRadioGroup v-model="radioSquare" shape="square">
                    <csRadio name="1">方形单选框1</csRadio>
                    <csRadio name="2">方形单选框2</csRadio>
                </csRadioGroup>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义颜色</div>
            <div class="button-demo-content">
                <csRadioGroup v-model="radioColor" color="#67c23a">
                    <csRadio name="1">单选框1</csRadio>
                    <csRadio name="2">单选框2</csRadio>
                </csRadioGroup>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义图标</div>
            <div class="button-demo-content">
                <csRadioGroup v-model="radioIcon" color="#67c23a">
                    <csRadio name="1">
                        <!--未选中时的图标-->
                        <template #unActiveIcon>
                            <img src="https://img.yzcdn.cn/vant/user-inactive.png" alt="">
                        </template>
                        <template #activeIcon>
                            <img src="https://img.yzcdn.cn/vant/user-active.png" alt="">
                        </template>
                        单选框1
                    </csRadio>
                    <csRadio name="2">
                        <!--选中时的图标-->
                        <template #unActiveIcon>
                            <img src="https://img.yzcdn.cn/vant/user-inactive.png" alt="">
                        </template>
                        <template #activeIcon>
                            <img src="https://img.yzcdn.cn/vant/user-active.png" alt="">
                        </template>
                        单选框2
                    </csRadio>
                </csRadioGroup>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">禁用文本点击</div>
            <div class="button-demo-content">
                <csRadioGroup v-model="radioLabel" :labelDisabled="true" >
                    <csRadio name="1">单选框1</csRadio>
                    <csRadio name="2">单选框2</csRadio>
                </csRadioGroup>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">单元格样式</div>
            <div class="button-demo-content">
                <csRadioGroup v-model="radioCell" type="cell">
                    <csRadio name="1">单选框1</csRadio>
                    <csRadio name="2">单选框2</csRadio>
                </csRadioGroup>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                radio: '1',
                radioDisabled: '1',
                radioSquare: '2',
                radioColor: '1',
                radioIcon: '1',
                radioLabel: '2',
                radioCell: '1'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .radio-demo {
        background-color: #fff;
        padding-bottom: 0.4rem;
    }
</style>