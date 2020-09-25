<template>
    <transition name="ani-popup-bottom">
        <div class="cs-numberKeyboard" v-if="show" :style="`animation-duration: ${(duration) / 1000}s; border-radius: ${isRound ? '0.4rem 0.4rem 0 0' : ''}`" @animationend="animationend">
            <div class="cs-numberKeyboard-header" v-if="title" @click.stop :style="`border-radius: ${isRound ? '0.4rem 0.4rem 0 0' : ''}`">
                <div class="cs-numberKeyboard-title">{{title}}</div>
                <div v-if="closeButtonText" class="cs-numberKeyboard-close" @click.stop="blur">{{closeButtonText}}</div>
            </div>
            <div class="cs-numberKeyboard-list">
                <div class="cs-numberKeyboard-default">
                    <div :class="`cs-numberKeyboard-item ${((extraKey === '.' && key === 9) || isKeyArray && extraKey.length === 1 && key === 9) ? 'cs-numberKeyboard-item-wider' : ''}`" v-for="(item, key) in keyboardData" :key="key">
                        <div @click.stop="selectItem(item)" class="cs-numberKeyboardContent">
                            <span v-if="item.isShow">{{item.value}}</span>
                            <i @click.stop="blur" v-if="item.value === 'collapse'" class="iconfont iconnumberKeyboard_collapse"></i>
                            <i v-if="item.value === 'delete'" class="iconfont iconnumberKeyboard_delete" @click.stop="deleteNumber"></i>
                        </div>
                    </div>
                </div>
                <div class="cs-numberKeyboard-right" v-if="extraKey === '.' || isKeyArray">
                    <div @click.stop="deleteNumber">
                        <i class="iconfont iconnumberKeyboard_delete"></i>
                    </div>
                    <div @click.stop="blur">{{closeButtonText}}</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'csNumberKeyboard',
        data() {
            return {
                keyboardData: [],
                isKeyArray: false,
                maxlengthComponent: 0
            }
        },
        props: {
            show: {
              type: Boolean,
              default: false
            },
            extraKey: {
                type: String | Array ,
                default: ''
            },
            duration: {
                type: Number,
                default: 300
            },
            closeButtonText: {
                type: String,
                default: '完成'
            },
            maxlength: {
                type: Number | String,
                default: 0
            },
            value: {
                type: String,
                default: ''
            },
            hideOnclickOutside: {   //点击外部时是否收起键盘
                type: Boolean,
                default: true
            },
            title: {
                type: String,
                default: ''
            },
            isRound: {   //是否展示圆角
                type: Boolean,
                default: true
            },
            isShuffle: {   //是否打乱数组
                type: Boolean,
                default: false
            }
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        mounted() {
            this.maxlengthComponent = parseInt(this.maxlength)
            let defaultKeyboardData = [1,2,3,4,5,6,7,8,9,0]
            if(!this.isShuffle) {
                this.producedKeyboardData(defaultKeyboardData)
            }
            this.isKeyArray = this.extraKey instanceof Array
        },
        methods: {
            /**
             点击选项时触发
             @param {string} item 值
             @return
             */
            selectItem(item) {
                if(item.isShow) {
                    if(!this.maxlengthComponent || this.value.length < this.maxlengthComponent) {
                        this.$emit('change', `${this.value}${item.value}`)     //内容改变时触发
                        this.$emit('input', item.value)    //点击输入内容时触发
                    }
                }
            },
            /**
             隐藏密码键盘
             @param
             @return
             */
            blur() {
                this.$emit('blur')    //点击隐藏密码时触发
            },
            /**
             生成键盘的数据
             @param {Array} defaultKeyboardData 1-9的数组数据
             @return
             */
            producedKeyboardData(defaultKeyboardData) {
                let keyboardData = []
                if(this.extraKey === '') {   //普通键盘
                    defaultKeyboardData.map((item, key)=> {
                        keyboardData.push({
                            isShow: true,
                            value: item
                        })
                        if(key === 8) {
                            keyboardData.push({isShow: false, value: 'collapse'})
                        } else if(key === 9) {
                            keyboardData.push({isShow: false, value: 'delete'})
                        }
                    })
                    this.keyboardData = keyboardData
                } else if(this.extraKey === '.') {   //带有右侧栏的键盘
                    defaultKeyboardData.map((item, key)=> {
                        keyboardData.push({
                            isShow: true,
                            value: item
                        })
                        if(key === 9) {
                            keyboardData.push({isShow: true, value: '.'})
                        }
                    })
                    this.keyboardData = keyboardData
                } else if(this.extraKey === 'X') {   //配置带有身份证号的键盘
                    defaultKeyboardData.map((item, key)=> {
                        keyboardData.push({
                            isShow: true,
                            value: item
                        })
                        if(key === 8) {
                            keyboardData.push({isShow: true, value: 'X'})
                        } else if(key === 9) {
                            keyboardData.push({isShow: false, value: 'delete'})
                        }
                    })
                    this.keyboardData = keyboardData
                } else if(this.extraKey instanceof Array) {
                    defaultKeyboardData.map((item, key)=> {
                        keyboardData.push({
                            isShow: true,
                            value: item
                        })
                        if(key === 8) {
                            keyboardData.push({isShow: true, value: this.extraKey[0]})
                        } else if(key === 9 && this.extraKey.length === 2) {
                            keyboardData.push({isShow: true, value: this.extraKey[1]})
                        }
                    })
                    this.keyboardData = keyboardData
                }
            },
            /**
             点击删除按钮触发的事件
             @param
             @return
             */
            deleteNumber() {
                if(this.value !== '') {
                    this.$emit('change', `${this.value.substring(0, this.value.length -1)}`)   //内容改变时触发
                    this.$emit('delete', this.value)   //删除输入内容时出发
                }
            },
            /**
             点击删除按钮触发的事件
             @param
             @return
             */
            animationend() {
                if(this.show) {
                    this.$emit('show')    //键盘完全出现时触发
                } else {
                    this.$emit('hide')   //键盘完全隐藏时触发
                }
            }
        },
        filters: {
            filterItem(item) {
                if(/^[0-9\.\X]*$/.test(item)) {
                    return item
                }
            }
        },
        watch: {
            show(show) {
                if(show) {
                    if(this.isShuffle) {
                        let defaultKeyboardData = [1,2,3,4,5,6,7,8,9,0].shuffle()
                        this.producedKeyboardData(defaultKeyboardData)
                    }
                    setTimeout(()=> {
                        let vm = this
                        if(this.hideOnclickOutside) {
                            document.getElementsByTagName('html')[0].style.height = '100%'
                            document.getElementsByTagName('html')[0].addEventListener('click', vm.blur, false)
                        }
                    }, this.duration)
                } else {
                    let vm = this
                    if(this.hideOnclickOutside) {
                        document.getElementsByTagName('html')[0].style.height = '100%'
                        document.getElementsByTagName('html')[0].removeEventListener('click', vm.blur, false)
                    }
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .cs-numberKeyboard {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 0.12rem 0 0 0.12rem;
        background-color: #f2f3f5;
        .cs-numberKeyboard-header {
            position: relative;
            height: 0.72rem;
            .cs-numberKeyboard-title {
                text-align: center;
                line-height: 0.72rem;
                color: rgba(100, 101, 102, 0.83);
            }
            .cs-numberKeyboard-close {
                position: absolute;
                right: 0;
                top: 0.12rem;
                height: 100%;
                padding: 0 0.32rem;
                color: var(--color);
                font-size: 0.28rem;
            }
            .cs-numberKeyboard-close:active {
                color: rgba(87, 107, 149, 0.5)
            }
        }
        .cs-numberKeyboard-list {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .cs-numberKeyboard-default {
                flex: 1;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                .cs-numberKeyboard-item {
                    box-sizing: border-box;
                    flex: 1;
                    flex-basis: 33%;
                    padding: 0 0.12rem 0.12rem 0;
                    .cs-numberKeyboardContent {
                        height: 1.05rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 0.16rem;
                        background-color: #fff;
                        overflow: hidden;
                        user-select: none;
                        >span {
                            font-size: 0.56rem;
                        }
                        >i {
                            font-size: 0.56rem;
                        }
                    }
                    .cs-numberKeyboardContent:active {
                        background-color: #ebedf0;
                    }
                }
                .cs-numberKeyboard-item-wider {
                    flex-basis: 66%;
                }
            }
            .cs-numberKeyboard-right {
                display: flex;
                flex-direction: column;
                width: 1.7rem;
                >div {
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    margin: 0 0.12rem 0.12rem 0;
                    border-radius: 0.16rem;
                    font-size: 0.56rem;
                    background-color: #fff;
                    >i {
                        font-size: 0.56rem;
                    }
                }
                >div:nth-child(2) {
                    font-size: 0.36rem;
                    background-color: var(--color);
                    color: #fff;
                }
                >div:active {
                    background-color: #ebedf0;
                }
                >div:nth-child(2):active {
                    opacity: 0.8;
                }
            }
        }
    }
    //bottom动画效果
    .ani-popup-bottom-enter-active {
        animation-name: popup-bottom-in;
    }
    .ani-popup-bottom-leave-active {
        animation-name: popup-bottom-out;
    }
    @keyframes popup-bottom-in {
        0% {
            transform: translate(0, 100%);
        }
        100% {
            transform: translate(0, 0);
        }
    }
    @keyframes popup-bottom-out {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(0, 100%);
        }
    }
</style>