<template>
    <div ref="csTabbarItem" :class="`csTabbarItem ${isActive ? 'csTabbarItem-active' : ''}`" :style="`color: ${isActive ? activeColor : inactiveColor}`" @click="selectTab">
        <span class="csTabbarItem_icon">
            <span class="csTabbarItem_dot" v-if="dot"></span>
            <span class="csTabbarItem_badge">{{badge}}</span>
            <slot name="icon" :active="isActive">
                <i :class="`iconfont icon${icon} ${isActive ? 'iconfont-active' : ''}`" :style="`color: ${isActive ? activeColor : inactiveColor}`"></i>
            </slot>
        </span>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csTabbarItem',
        data() {
            return {
                isActive: false,
                activeColor: '',
                inactiveColor: '',
                key: 0
            }
        },
        props: {
            icon: {
                type: String,
                default: ''
            },
            dot: {
                type: Boolean,
                default: false
            },
            badge: {
                type: String,
                default: ''
            }
        },
        methods: {
            selectTab() {
                this.$emit('select')
                if(typeof this.$refs.csTabbarItem.parentNode.__vue__.changeTab === 'function') {
                    this.$refs.csTabbarItem.parentNode.__vue__.changeTab(this.key)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->