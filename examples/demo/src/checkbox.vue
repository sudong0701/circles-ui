<template>
    <div class="checkbox-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <csCheckbox v-model="isCheck">基础用法</csCheckbox>    
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">禁用状态</div>
            <div class="button-demo-content">
                <csCheckbox v-model="isCheck" disabled>禁用状态</csCheckbox>
                <csCheckbox v-model="isCheckDisabled" disabled>禁用状态</csCheckbox>  
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义形状</div>
            <div class="button-demo-content">
                <csCheckbox v-model="isCheckShape" shape="square">自定义形状</csCheckbox>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义颜色</div>
            <div class="button-demo-content">
                <csCheckbox v-model="isCheckColor" color="#67c23a">自定义颜色</csCheckbox>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义图标</div>
            <div class="button-demo-content">
                <csCheckbox v-model="isCheckImg" color="#67c23a">
                    <template #activeIcon>
                          <img  src="https://img.yzcdn.cn/vant/user-active.png" alt="">
                    </template>
                    <template #unActiveIcon>
                        <img  src="https://img.yzcdn.cn/vant/user-inactive.png" alt="">
                    </template>
                    自定义图标
                </csCheckbox>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">禁用文本点击</div>
            <div class="button-demo-content">
                <csCheckbox v-model="isCheckLabel" labelDisabled>禁用文本点击</csCheckbox>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">复选框组</div>
            <div class="button-demo-content">
                <csCheckboxGroup v-model="checkValue">
                    <csCheckbox name="0">复选框0</csCheckbox>
                    <csCheckbox name="1">复选框1</csCheckbox>
                    <csCheckbox name="2">复选框2</csCheckbox>
                    <csCheckbox name="3">复选框3</csCheckbox>
                </csCheckboxGroup>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">限制最大可选数</div>
            <div class="button-demo-content">
                <csCheckboxGroup v-model="checkValueMax" :max="2">
                    <csCheckbox name="0">复选框0</csCheckbox>
                    <csCheckbox name="1">复选框1</csCheckbox>
                    <csCheckbox name="2">复选框2</csCheckbox>
                    <csCheckbox name="3">复选框3</csCheckbox>
                </csCheckboxGroup>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">单元格样式</div>
            <div class="button-demo-content">
                <csCheckboxGroup v-model="checkValueCell" type="cell">
                    <csCheckbox name="0">复选框0</csCheckbox>
                    <csCheckbox name="1">复选框1</csCheckbox>
                    <csCheckbox name="2">复选框2</csCheckbox>
                    <csCheckbox name="3">复选框3</csCheckbox>
                </csCheckboxGroup>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isCheck: true,
                isCheckDisabled: false,
                isCheckShape: true,
                isCheckColor: true,
                isCheckImg: true,
                isCheckIcon: true,
                isCheckLabel: true,
                checkValue: ['0', '2'],
                checkValueMax: ['1'],
                checkValueCell: ['0']
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .checkbox-demo {

    }
</style>