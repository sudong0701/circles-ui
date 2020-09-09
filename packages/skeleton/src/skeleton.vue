<template>
    <div class="csSkeleton">
        <div class="csSkeleton-avatar" v-if="avatar && isLoad">
            <div :class="animate ? 'csSkeleton-flashing' : ''" :style="`width: ${computedAvatarSize}; height: ${computedAvatarSize}; border-radius: ${avatarShape === 'square' ? '0.1rem' : '50%'}`"></div>
        </div>
        <div class="csSkeleton-content" :style="avatar ? 'padding-top: 0.16rem' : ''" v-if="isLoad">
            <div  :class="`csSkeleton-title ${animate ? 'csSkeleton-flashing' : ''}`" v-if="title"></div>
            <div :style="`width: ${computedRowWidth[key] ? computedRowWidth[key] : '100%'}`" :class="`csSkeleton-row ${animate ? 'csSkeleton-flashing' : ''}`" v-for="(item, key) in Number(row)" :key="key"></div>
        </div>
        <slot v-if="!isLoad"></slot>
    </div>
</template>

<script>
    export default {
        name: 'csSkeleton',
        data() {
            return {}
        },
        props: {
            isLoad: {   //是否显示骨架屏 false展示实际内容
                type: Boolean,
                default: true
            },
            title: {    //是否展示标题占位图
                type: Boolean,
                default: false
            },
            avatar: {    //是否展示头像占位图
                type: Boolean,
                default: false
            },
            row: {   //配置占位段落行数
                type: Number | String,
                default: 0
            },
            rowWidth: {   //配置占位段落宽度
                type: Array,
                default: ()=> {
                    return []
                }
            },
            avatarSize: {
                type: Number | String,
                default: '0.64rem'
            },
            avatarShape: {
                type: String,
                default: 'round'
            },
            animate: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            computedAvatarSize() {
                if(typeof this.avatarSize === 'number') {
                    return `${this.avatarSize}px`
                } else {
                    return this.avatarSize
                }
            },
            computedRowWidth() {
                return this.rowWidth.map((item)=> {
                    if(typeof item === 'number') {
                        return `${item}%`
                    } else if(typeof item === 'string') {
                        return item
                    } else {
                        return '100%'
                    }
                })
            }
        }
    }
</script>