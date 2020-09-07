<template>
    <div :class="`sdTab`" @click="selectTab" ref="sdTab" :style="`background-color: ${tabBackGround}`">
        <p :class="`${disabled ? 'sdTab-disabled' : ''} ${active ? 'sdTab-active' : ''}`" :style="`color: ${active ? titleActiveColor : titleInactiveColor}`">
            <slot name="title">{{title}}</slot>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'sdTab',
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
                if(!this.disabled && this.$refs.sdTab.parentNode.parentNode.parentNode.__vue__) {
                    this.$refs.sdTab.parentNode.parentNode.parentNode.__vue__.changeTab(this.index)
                }

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
