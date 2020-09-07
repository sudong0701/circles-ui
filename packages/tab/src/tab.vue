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
