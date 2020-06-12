<template>
    <div class="sd-numberKeyboard">
        <div class="sd-numberKeyboard-list">
            <div class="sd-numberKeyboard-item" v-for="(item, key) in keyboardData">
                <div @click="selectItem(item)" class="sd-numberKeyboardContent">
                    {{item | filterItem}}
                    <i v-if="item === 'collapse'" class="iconfont iconnumberKeyboard_collapse"></i>
                    <i v-if="item === 'delete'" class="iconfont iconnumberKeyboard_delete"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sdNumberKeyboard',
        data() {
            return {
                keyboardData: [

                ]
            }
        },
        props: {
            extraKey: {
                type: String,
                default: ''
            }
        },
        mounted() {
            if(this.extraKey === '') {
                this.keyboardData = [1,2,3,4,5,6,7,8,9,'collapse', 0, 'delete']
            }
        },
        methods: {
            /**
             点击选项时触发
             @param {Number} index 索引
             @return
             */
            selectItem(index) {
                this.$emit('change', index)
            }
        },
        filters: {
            filterItem(item) {
                if(/^[0-9]*$/.test(item)) {
                    return item
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .sd-numberKeyboard {
        padding: 0.12rem 0 0 0.12rem;
        background-color: #f2f3f5;
        .sd-numberKeyboard-list {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .sd-numberKeyboard-item {
                box-sizing: border-box;
                flex: 1;
                flex-basis: 33%;
                padding: 0 0.12rem 0.12rem 0;
                .sd-numberKeyboardContent {
                    height: 1.05rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0.16rem;
                    font-size: 0.56rem;
                    background-color: #fff;
                    i {
                        font-size: 0.56rem;
                    }
                }
                .sd-numberKeyboardContent:active {
                    background-color: #ebedf0;
                }
            }
        }
    }
</style>