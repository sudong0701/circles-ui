<template>
    <div ref="sdTabbarItem" :class="`sdTabbarItem`" :style="`color: ${isActive ? activeColor : inactiveColor}`" @click="selectTab">
        <span class="sdTabbarItem_icon">
            <span class="sdTabbarItem_dot" v-if="dot"></span>
            <span class="sdTabbarItem_badge">{{badge}}</span>
            <slot name="icon" :active="isActive">
                <i :class="`iconfont icon${icon}`" :style="`color: ${isActive ? activeColor : inactiveColor}`"></i>
            </slot>
        </span>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'sdTabbarItem',
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
                if(typeof this.$refs.sdTabbarItem.parentNode.__vue__.changeTab === 'function') {
                    this.$refs.sdTabbarItem.parentNode.__vue__.changeTab(this.key)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sdTabbarItem {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.24rem;
    color: #646566;
    transition: color .2s;
    .sdTabbarItem_icon {
        position: relative;
        min-width: 0.38rem;
        min-height: 0.38rem;
        .iconfont {
            font-size: 0.38rem;
            margin-bottom: 0.04rem;
            color: #646566;
            transition: color .2s;
        }
        .sdTabbarItem_dot {
            position: absolute;
            top: 0;
            right: -0.08rem;
            height: 0.12rem;
            width: 0.12rem;
            border-radius: 50%;
            background-color: #ee0a24;
        }
        .sdTabbarItem_badge {
            box-sizing: border-box;
            position: absolute;
            right: 0; top: 0;
            padding: 0 0.06rem;
            min-width: 0.32rem;
            transform: translateX(60%);
            border-radius: 0.32rem;
            font-size: 0.24rem;
            text-align: center;
            line-height: 0.24rem;
            background-color: #ee0a24;
            color: #fff;
        }
    }
}
</style>