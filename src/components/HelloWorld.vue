
<template>
    <div style="height: 50rem; background-color: #efefef" ref="content">
        <cs-header title="身份信息" type="point" ></cs-header>
        <!--<div style="height: 10rem; overflow-y: auto">-->
            <!--<csPullRefresh @refresh="refreshPage" v-model="isLoading" @scrolltolower="scrolltolower" @bindscroll="scroll">-->
                <!--<div class="list" style="height: 25rem">-->
                    <!--<csSwipeCell v-for="(item, key) in cellArr" :key="key">-->
                        <!--<template #left>-->
                            <!--<div class="left">查看详情</div>-->
                        <!--</template>-->
                        <!--<div style="padding: 10px 16px;background-color: #fff;line-height: 0.48rem">2222</div>-->
                        <!--<template #right>-->
                            <!--<div class="right">删除</div>-->
                        <!--</template>-->
                    <!--</csSwipeCell>-->
                <!--</div>-->
            <!--</csPullRefresh>-->
        <!--</div>-->
        <!--<div class="csSwipe_box" style="width: 100%; height: 3.8rem">-->
            <!--<csSwipe @change="swipeChange" :vertical="true" :isLoop="true" :isAuto="true">-->
                <!--<csSwipeItem>-->
                    <!--<img src="../../static/img/1.jpg" alt="">-->
                <!--</csSwipeItem>-->

                <!--<csSwipeItem>-->
                    <!--<img src="../../static/img/2.jpg" alt="">-->
                <!--</csSwipeItem>-->

                <!--<csSwipeItem>-->
                    <!--<img src="../../static/img/3.jpg" alt="">-->
                <!--</csSwipeItem>-->

                <!--<csSwipeItem>-->
                    <!--<img src="../../static/img/4.jpg" alt="">-->
                <!--</csSwipeItem>-->
            <!--</csSwipe>-->
        <!--</div>-->
        <!--<cs-alert></cs-alert>-->
        <div @click="showToast()">确认</div>
        <div  @click="showDialog">显示dialog</div>
        <div @click="show()">显示toast</div>
        <div @click="showPicker">显示picker</div>
        <cs-dialog v-model="isShow" ref="dialog"  type="alert" :close-on-click-overlay="true" content="登录身份已过期" @confirm="" @cancel="hideDialog"></cs-dialog>
        <csPopup v-model="isPicker">
            <!--<csPicker :columns="city" @clickRightBtn="pickerConfirm" :isCascade="true" customName="label"></csPicker>-->
            <csPicker v-model="defaultArr" :columns="columns" @clickRightBtn="pickerConfirm"></csPicker>
            <!--<csDateTimePicker></csDateTimePicker>-->
        </csPopup>
    </div>
</template>

<script>
    import city from '../../static/city-data'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                isShow: false,
                isLoading: false,
                isPicker: false,
                isShowChart: true,
                cellArr: [1,1,1,1,1,1,1,1,1,1,1],
                defaultArr: [0,0],
                columns: [
                    {
                        values: [{name: '苹果', id: 1}, {name: '橘子', id: 2}, {name: '木瓜', id: 3}, {name: '葡萄', id: 4}, {name: '西瓜', id: 5}, {name: '桃子', id: 6}, {name: '梨子', id: 7}, {name: '山竹', id: 8}, {name: '车厘子', id: 9}, {name: '香蕉', id: 10},]
                    },
                    {
                        values: [{name: '芹菜', id: 1}, {name: '苦菊', id: 2}, {name: '油麦菜', id: 3}, {name: '辣椒', id: 4}, {name: '洋葱', id: 5}, {name: '豆角', id: 6}, {name: '黄瓜', id: 7}, {name: '胡萝卜', id: 8}, {name: '杏鲍菇', id: 9}, {name: '生菜', id: 10},]
                    },
                ],
                city: city,
                dataArr: [{text: '积(G)分点', value: 0.8}, {text: '口碑(O)点', value: 0.7}, {text: '营收(I)点', value: 0.6}],
            }
        },
        mounted(){
            this.$chartRadar.draw({
                dataArr: this.dataArr
            }).then((e)=> {
                let canvasBox = this.$refs.content
                e.style.height = '300px'
                e.style.width = '300px'
                e.style.display = 'block'
                e.style.margin = '0 auto'
                canvasBox.appendChild(e)
            })
        },
        methods: {
            showToast(){
                this.$dialog.confirm({
                    content: '春江潮水连海平，都是成都市',
                    duration: 0,
                    confirmBtnText: '确定',
                    cancelBtnText: '取消',
                }).then((res)=> {
                    console.log(res)
                    return
                    this.$dialog.close()
                }).catch(()=> {

                })
            },
            showDialog(){
               this.isShow = true
            },
            hideDialog(){
                this.isShow = false
            },
            show(){
                this.$toast({
                    image: 'https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/03/24/1585033151526.gif',
                    content: '提交成功',
                }).then((res)=> {
                    console.log(111)
                })
            },
            showPicker() {
                this.isPicker = true
            },
            pickerConfirm(e) {
                console.log(e)
            },
            swipeChange(e) {
                console.log(e)
            },
            refreshPage() {
                setTimeout(()=> {
                    this.isLoading = false
                }, 2000)
            },
            scrolltolower(fnc) {
                console.log(111111)
//                setTimeout(()=> {
//                    fnc()
//                },2000)
            },
            scroll(e) {
                //console.log(e)
            },
            /**
             canvas绘制成功事件
             @param
             @return
             */
            canvasFinish(e) {
                let canvasBox = this.$refs.content
                e.style.height = '300px'
                e.style.width = '300px'
                e.style.display = 'block'
                e.style.margin = '0 auto'
                canvasBox.appendChild(e)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .csSwipe_box {
        img {
            width: 100%; height: 100%;
        }
    }
    .list {
        .left {
            width: 60px;
            height: 100%;
            font-size: 0.28rem;
            text-align: center;
            line-height: 44px;
            background-color: #67c23a;
            color: #fff;
        }
        .right {
            width: 60px;
            height: 100%;
            font-size: 0.28rem;
            text-align: center;
            line-height: 44px;
            background-color: #ee0a24;
            color: #fff;
        }
    }
</style>
