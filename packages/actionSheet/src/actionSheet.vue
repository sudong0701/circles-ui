<template>
    <div class="sdActionSheet">
        <sdPopup :isNested="true" v-model="isShow" @clickOverlay="changePopup" :isRound="isRound" :isOverlay="isOverlay" :closeOnClickOverlay="closeOnClickOverlay" :lockScroll="lockScroll" @open="open" @opened="opened" @close="close" @closed="closed">
            <div class="sdActionSheet-top">{{description}}</div>

            <div class="sdActionSheet-list">
                <div v-for="(item, key) in actions" :key="key" :class="`sdActionSheet-item ${item.disabled ? 'sdActionSheet-item-disabled' : 'sdActionSheet-item-default'}`" :style="`border-bottom: ${isBorder ? '0.02rem solid #f3f3f3' : ''}`"  @click="selectItem(item, key)">
                    <span :style="`color: ${item.disabled ? '#c8c9cc' : (item.color ? item.color : '')}`">{{item.name}}</span>
                    <span class="sdActionSheet-remake" v-if="item.remake">{{item.remake}}</span>
                </div>
            </div>

            <div class="sdActionSheet-bottom" v-if="cancelText" @click="cancel">
                <p>{{cancelText}}</p>
            </div>
        </sdPopup>
    </div>
</template>

<script>
    import sdPopup from '../../popup/src/popup.vue'
    export default {
        name: 'sdActionSheet',
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
            sdPopup
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