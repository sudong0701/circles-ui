<template>
    <div :class="`sdSwitch ${disabled ? 'van-switch--disabled': ''}`" :style="`font-size: ${circleSize}; background-color: ${isActive ? activeParentsNodeColor : unActiveParentsNodeColor}; `" @click="changeActive">
        <div :class="`sdSwitch-circle ${isActive ? 'sdSwitch-active' : ''}`" :style="`width: ${circleSize}; height: ${circleSize}; background-color: ${isActive ? activeNodeColor : unActiveNodeColor}; transform: translateX(${isActive ? '100%' : '0%'})`" @webkitTransitionEnd="animationEnd($event)" @transitionend="animationEnd($event)">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'sdSwitch',
        data() {
            return {}
        },
        props: {
            isActive: {
                type: Boolean,
                default: false
            },
            size: {
                type: String | Number,
                default: '0.6rem'
            },
            activeParentsNodeColor: {
                type: String,
                default: '#1989fa'
            },
            activeNodeColor: {
                type: String,
                default: '#fff'
            },
            unActiveParentsNodeColor: {
                type: String,
                default: '#fff'
            },
            unActiveNodeColor: {
                type: String,
                default: '#fff'
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        model: {
            prop: 'isActive',
            event: 'change'
        },
        computed: {
            circleSize() {
                return typeof this.size === 'string' ? this.size : (typeof this.size === 'number' ? `${this.size}px` : '0.6rem')
            }
        },
        methods: {
            /**
             点击改变switch状态
             @param
             @return
             */
            changeActive() {
                if(!this.disabled) {
                    this.$emit('change', !this.isActive)
                }
            },
            /**
             动画结束时触发
             @param
             @return
             */
            animationEnd() {
                if(this.isActive) {
                    this.$emit('opened')
                } else {
                    this.$emit('closed')
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->