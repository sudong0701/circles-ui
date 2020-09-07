<template>
    <div class="sdPasswordInput">
        <div class="sdPasswordInput-list" :style="`border: ${gutter ? '' : '0.02rem solid #f2f3f5'}; height: ${height ? (typeof height === 'string' ? height : height + 'px') : ''}`" @click.stop="passwordInputFocus">
            <div class="sdPasswordInput-item" v-for="(item, key) in initData" :key="key" :style="`border-left: ${gutter ? '' : '0.02rem solid #f2f3f5'}; margin-left: ${gutter ? (typeof gutter === 'string' ? gutter : gutter + 'px') : ''}; background-color: ${bgColor}`">
                <span class="sdPasswordInput-item-notMask" v-if="!isMask">{{item.content}}</span>
                <i class="sdPasswordInput-item-mask" v-if="isMask && item.content"></i>
                <i class="sdPasswordInput-item-typing" v-if="!item.content && (key === 0 || initData[key - 1].content) && isFocus"></i>
            </div>
        </div>
        <div class="sdPasswordInput-bottom"></div>
    </div>
</template>

<script>
    export default {
        name: 'sdPasswordInput',
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