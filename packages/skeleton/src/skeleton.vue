<template>
    <div class="csSkeleton">
        <div class="csSkeleton-avatar" v-if="avatar && isLoad">
            <div :class="animate ? 'csSkeleton-flashing' : ''" :style="`width: ${computedAvatarSize}; height: ${computedAvatarSize}; border-radius: ${avatarShape === 'square' ? '0.1rem' : '50%'}`"></div>
        </div>
        <div class="csSkeleton-content" :style="avatar ? 'padding-top: 0.16rem' : ''" v-if="isLoad">
            <div  :class="`csSkeleton-title ${animate ? 'csSkeleton-flashing' : ''}`" v-if="title"></div>
            <div :style="`width: ${computedRowWidth[key] ? computedRowWidth[key] : '100%'}`" :class="`csSkeleton-row ${animate ? 'csSkeleton-flashing' : ''}`" v-for="(item, key) in row" :key="key"></div>
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
                default: true
            },
            avatar: {    //是否展示头像占位图
                type: Boolean,
                default: true
            },
            row: {   //配置占位段落行数
                type: Number | String,
                default: 3
            },
            rowWidth: {
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
                        return `${item}px`
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csSkeleton {
        display: flex;
        flex-direction: row;
        .csSkeleton-avatar {
            margin-right: 0.32rem;
            >div {
                background-color: #f2f3f5;
            }
        }
        .csSkeleton-content {
            flex: 1;
            .csSkeleton-title {
                width: 40%;
                margin-bottom: 0.4rem;
            }
            .csSkeleton-row {
                margin-bottom: 0.24rem;
            }
            .csSkeleton-row:nth-last-child(1) {
                margin-bottom: 0;
            }
            >div {
                height: 0.32rem;
                background-color: #f2f3f5;
            }
        }
        //旋转动画
        .csSkeleton-flashing {
            animation-name: flashing; /*动画的名称 */
            animation-duration: 1400ms; /*动画从开始到结束的时间*/
            animation-iteration-count: infinite; /*动画执行多少次的参数*//*以下是兼容ios所需，参数意义与上相同*/
            -webkit-animation-name: flashing;
            -webkit-animation-duration: 1400ms;
            -webkit-animation-iteration-count: infinite;
        }
        @keyframes flashing {
            0% {
                opacity: 1;
            }
            60% {
                opacity: 0.6;
            }
            100% {
                opacity: 1;
            }
        }
    }
</style>