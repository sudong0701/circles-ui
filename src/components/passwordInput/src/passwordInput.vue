<template>
    <div class="csPasswordInput">
        <div class="csPasswordInput-list" :style="`border: ${gutter ? '' : '0.02rem solid #f2f3f5'}; height: ${height ? (typeof height === 'string' ? height : height + 'px') : ''}`" @click.stop="passwordInputFocus">
            <div class="csPasswordInput-item" v-for="(item, key) in initData" :key="key" :style="`border-left: ${gutter ? '' : '0.02rem solid #f2f3f5'}; margin-left: ${gutter ? (typeof gutter === 'string' ? gutter : gutter + 'px') : ''}; background-color: ${bgColor}`">
                <span class="csPasswordInput-item-notMask" v-if="!isMask">{{item.content}}</span>
                <i class="csPasswordInput-item-mask" v-if="isMask && item.content"></i>
                <i class="csPasswordInput-item-typing" v-if="!item.content && (key === 0 || initData[key - 1].content) && isFocus"></i>
            </div>
        </div>
        <div class="csPasswordInput-bottom"></div>
    </div>
</template>

<script>
    export default {
        name: 'csPasswordInput',
        data() {
            return {}
        },
        props: {
            value: {
                type: String | Number,
                default: ''
            },
            length: {
                type: Number,
                default: 6
            },
            gutter: {
                type: Number | String,
                default: 0
            },
            bgColor: {
                type: String,
                default: '#fff'
            },
            isMask: {
                type: Boolean,
                default: true
            },
            isFocus: {
                type: Boolean,
                default: false
            },
            height: {
                type: String | Number,
                default: ''
            }
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        methods: {
            /**
             点击密码框事件
             @param
             @return
             */
            passwordInputFocus() {
                this.$emit('focus')
            }
        },
        computed: {
            /**
             设置initData
             @param
             @return {Array} 数据数组
             */
            initData() {
                let initData = []
                for(let i=0; i < this.length; i++) {
                    initData.push({
                        content: this.value[i] ? this.value[i] : ''
                    })
                }
                return initData
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csPasswordInput {
        padding: 0 0.32rem;
        .csPasswordInput-list {
            display: flex;
            flex-direction: row;
            height: 1rem;
            .csPasswordInput-item {
                position: relative;
                flex: 1;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                background-color: #fff;
                .csPasswordInput-item-notMask {
                    font-size: 0.4rem;
                }
                .csPasswordInput-item-mask {
                    width: 0.2rem;
                    height: 0.2rem;
                    border-radius: 0.1rem;
                    background-color: #000;
                }
                .csPasswordInput-item-typing {
                    position: absolute;
                    height: 40%;
                    width: 0.02rem;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    -webkit-transform: translate(-20%, -50%);
                    background-color: #323233;
                    animation: 1s van-cursor-flicker infinite ease;
                }
                @keyframes van-cursor-flicker {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            }
            .csPasswordInput-item:nth-child(1) {
                border: none !important;
                margin-left: 0 !important;
            }
        }
    }
</style>