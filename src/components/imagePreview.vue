<template>
    <div class="imagePreview">
        <sdImagePreview v-model="isShow" :showIndex="true" :showIndicators="true" :images="images" :startPosition="2">

        </sdImagePreview>
        <button @click="showImagePreview">显示</button>
        <button @click="showImagePreview_method">函数式引用</button>
    </div>
</template>

<script>
    export default {
        name: 'imagePreview',
        data() {
            return {
                isShow: false,
                images: [
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/21/9517e971501edacc92675632677d2bba.jpg',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/20/fc97a7f08bc087a500c7f3d961d56357.png',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2019/11/13/c0c4fcbcd72f3ae73d687965ba4caa5d.png',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/21/f54a323a979a0250bca110655d395119.png'
                ],
                minDate: new Date('2019.8.5').getTime()
            }
        },
        methods: {
            showImagePreview() {

                this.isShow = true
            },
            showImagePreview_method() {
                this.$imagePreview({
                    images: this.images,
                    showIndex: false,
                    startPosition: 3
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .imagePreview {

    }
</style>