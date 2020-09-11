<template>
    <div class="csActionSheet">
        <csPopup :isNested="true" v-model="isShow" @clickOverlay="changePopup" :isRound="isRound" :isOverlay="isOverlay" :closeOnClickOverlay="closeOnClickOverlay" :lockScroll="lockScroll" @open="open" @opened="opened" @close="close" @closed="closed">
            <div class="csActionSheet-top">{{description}}</div>

            <div class="csActionSheet-list">
                <div v-for="(item, key) in actions" :key="key" :class="`csActionSheet-item ${item.disabled ? 'csActionSheet-item-disabled' : 'csActionSheet-item-default'}`" :style="`border-bottom: ${isBorder ? '0.02rem solid #f3f3f3' : ''}`"  @click="selectItem(item, key)">
                    <span :style="`color: ${item.disabled ? '#c8c9cc' : (item.color ? item.color : '')}`">{{item.name}}</span>
                    <span class="csActionSheet-remake" v-if="item.remake">{{item.remake}}</span>
                </div>
            </div>

            <div class="csActionSheet-bottom" v-if="cancelText" @click="cancel">
                <p>{{cancelText}}</p>
            </div>
        </csPopup>
    </div>
</template>

<script>
    import csPopup from '../../popup/src/popup.vue'
    export default {
        name: 'csActionSheet',
        data() {
            return {}
        },
        props: {
            isShow: {
                type: Boolean,
                default: false
            },
            actions: {
                type: Array,
                default: ()=> {
                    return []
                }
            },
            cancelText: {
                type: String,
                default: ''
            },
            description: {
                type: String,
                default: ''
            },
            isBorder: {   //选项是否展示分割线
                type: Boolean,
                default: false
            },
            isRound: {   //是否展示圆角
                type: Boolean,
                default: true
            },
            closeOnClickOverlay: {
                type: Boolean,
                default: true
            },
            lockScroll: {
                type: Boolean,
                default: true
            },
            isOverlay: {
                type: Boolean,
                default: true
            }
        },
        model: {
            prop: 'isShow',
            event: 'clickOverlay'
        },
        components: {
            csPopup
        },
        methods: {
            /**
             更改展开或收起状态
             @param
             @return
             */
            changePopup() {
                this.$emit('clickOverlay', false)
            },
            /**
             选择项目
             @param {Object} item 选项
             @param {Number} key 下标
             @return
             */
            selectItem(item, key) {
                if(!item.disabled) {
                    this.$emit('select', {action: item, key})
                }
            },
            /**
             点击取消按钮
             @param
             @return
             */
            cancel() {
               this.$emit('cancel')
            },
            /**
             打开面板时触发
             @param
             @return
             */
            open() {
                this.$emit('open')
            },
            /**
             打开面板切动画结束时触发
             @param
             @return
             */
            opened() {
                this.$emit('opened')
            },
            /**
             打开面板切动画结束时触发
             @param
             @return
             */
            close() {
                this.$emit('close')
            },
            /**
             打开面板切动画结束时触发
             @param
             @return
             */
            closed() {
                this.$emit('closed')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csActionSheet {
        position: relative;
        .csActionSheet-top {
            position: relative;
            height: 1rem;
            color: #646566;
            font-size: 0.28rem;
            line-height: 1rem;
            text-align: center;
            border-bottom: 0.02rem solid #f3f3f3;
        }
        .csActionSheet-list {
            .csActionSheet-item {
                width: 100%;
                height: 1rem;
                padding: 0;
                font-size: 0.32rem;
                text-align: center;
                background-color: #fff;
                >span {
                    line-height: 1rem;
                }
                >.csActionSheet-remake {
                    margin-left: 0.02rem;
                    color: #969799;
                    font-size: 0.24rem;
                }
            }
            .csActionSheet-item-default:active {
                background-color: #efefef;
            }
            .csActionSheet-item:nth-last-child(1) {
                border: none;
            }
        }
        .csActionSheet-bottom {
            padding-top: 0.12rem;
            background-color: #f7f7f7;
            >p {
                height: 1rem;
                font-size: 0.32rem;
                text-align: center;
                line-height: 1rem;
                background-color: #fff;
            }
            >p:active {
                background-color: #efefef;
            }
        }
    }
</style>