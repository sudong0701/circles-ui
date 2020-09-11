<template>
    <div :class="`csTab`" @click="selectTab" ref="csTab" :style="`background-color: ${tabBackGround}`">
        <p :class="`${disabled ? 'csTab-disabled' : ''} ${active ? 'csTab-active' : ''}`" :style="`color: ${active ? titleActiveColor : titleInactiveColor}`">
            <slot name="title">{{title}}</slot>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'csTab',
        data() {
            return {
                active: false,
                titleActiveColor: '',
                titleInactiveColor: '',
                index: 0,
                tabBackGround: ''
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            /**
             * 点击radio时触发
             * @param
             * @return
             */
            selectTab() {
                if(!this.disabled && this.$refs.csTab.parentNode.parentNode.parentNode.__vue__) {
                    this.$refs.csTab.parentNode.parentNode.parentNode.__vue__.changeTab(this.index)
                }

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csTab {
        min-width: 21%;
        flex: 1;
        padding: 0 0.1rem;
        border-bottom: 0.02rem solid #f4f4f4;
        >p {
            transition: color 0.3s;
            -webkit-transition: color 0.3s;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-align: center;
            font-size: 0.28rem;
            line-height: 0.88rem;
            color: #646566;
        }
        >.csTab-disabled {
            color: #c8c9cc;
            cursor: not-allowed;
        }
        >.csTab-active {
            color: var(--color);
        }
    }
</style>
