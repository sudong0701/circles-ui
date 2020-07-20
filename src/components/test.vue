<template>
    <div class="test">
        <sd-header title="身份信息" type="point" ></sd-header>
        <div style="height: 5rem; overflow-y: auto">
            <sdPullRefresh :isPullRefresh="false" @refresh="refreshPage" v-model="isLoading" @scrolltolower="scrolltolower" @bindscroll="scroll" :isThrottling="true">
                <div class="list">
                    <sdSwipeCell v-for="(item, key) in cellArr" :key="key">
                        <template #left>
                            <div class="left">查看详情</div>
                        </template>
                        <div style="padding: 10px 16px;background-color: #fff;line-height: 0.48rem">2222</div>
                        <template #right>
                            <div class="right">删除</div>
                        </template>
                    </sdSwipeCell>
                </div>
            </sdPullRefresh>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
                cellArr: [1,1,1,1,1,1,1,1,1,1,1],
                isLoading: true
            }
        },
        methods: {
            refreshPage() {
                setTimeout(()=> {
                    this.isLoading = false
                }, 2000)
            },
            scrolltolower(fnc) {
                console.log(111111)
                setTimeout(()=> {
                    fnc()
                },2000)
            },
            scroll(e) {
                //console.log(e)
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .test{
        height: 50rem;
        background-color: #f2f2f2;
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