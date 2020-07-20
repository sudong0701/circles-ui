<template>
    <div class="collapse">
        <sd-collapse  @change="changeCollapse" v-model="collapseActive">
            <sd-collapse-item title="标题" icon="close" value="右侧" name="1" @change="changeCollapseItem">
                代码是写出来给人看的，附带能在机器上运行
            </sd-collapse-item>
            <sd-collapse-item title="标题" icon="close" value="右侧" name="2">
                代码是写出来给人看的，附带能在机器上运行
            </sd-collapse-item>
            <sd-collapse-item title="标题" icon="close" value="右侧" name="3">
                代码是写出来给人看的，附带能在机器上运行
            </sd-collapse-item>
        </sd-collapse>
        <!--<input type="text" v-focus>-->
        <!--<div>-->
            <!--<div class="lazy" v-for="(item, key) in images" alt="" v-lazyBGImg="item">-->
            <!--</div>-->
        <!--</div>-->
        <sd-switch size="30px" style="margin: 15px" v-model="isActive" @opened="opened" @closed="closed" @change="change">

        </sd-switch>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                images: [
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/21/9517e971501edacc92675632677d2bba.jpg',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/20/fc97a7f08bc087a500c7f3d961d56357.png',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2019/11/13/c0c4fcbcd72f3ae73d687965ba4caa5d.png',
                    '/static/img/18.jpg',
                    '/static/img/22.jpg',
                    '/static/img/23.jpg',
                    '/static/img/32.jpg'
                ],
                isActive: false,
                collapseActive: []
            }
        },
        methods: {
            opened() {
                console.log('opened')
            },
            closed() {
                console.log('closed')
            },
            change() {
                console.log('change')
            },
            changeCollapse(e) {
                console.log(e)
            },
            changeCollapseItem(e) {
                console.log(e)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .collapse {
        padding-top: 1rem;
        height: 100%;
        background-color: #f8f8f8;
    }
    .lazy {
        width: 100%;
        height: 5rem;
        background-size: 100%;
    }
</style>