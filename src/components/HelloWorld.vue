
<template>
    <div style="height: 50rem">
        <sd-header title="身份信息" type="point" ></sd-header>
        <!--<sd-alert></sd-alert>-->
        <div @click="showToast()">确认</div>
        <div  @click="showDialog">显示dialog</div>
        <div @click="show()">显示toast</div>
        <div @click="showPicker">显示picker</div>
        <sd-dialog v-model="isShow" ref="dialog"  type="confirm" :close-on-click-overlay="true" content="登录身份已过期" @confirm="" @cancel="hideDialog"></sd-dialog>
        <sdPopup v-model="isPicker">
            <!--<sdPicker :columns="city" @clickRightBtn="pickerConfirm" :isCascade="true" customName="label"></sdPicker>-->
            <sdDateTimePicker></sdDateTimePicker>
        </sdPopup>
    </div>
</template>

<script>
    import city from '../../static/city-data'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                isShow: false,
                isPicker: false,
                columns: [
                    {
                        values: [{name: '山东', id: 1}, {name: '河南', id: 2}, {name: '广东', id: 3}, {name: '江苏', id: 4}, {name: '河北', id: 5}, {name: '内蒙古', id: 6}, {name: '湖南', id: 7}, {name: '湖北', id: 8}, {name: '江西', id: 9}, {name: '广西', id: 10},]
                    },
                    {
                        values: [{name: '山东', id: 1}, {name: '河南', id: 2}, {name: '广东', id: 3}, {name: '江苏', id: 4}, {name: '河北', id: 5}, {name: '内蒙古', id: 6}, {name: '湖南', id: 7}, {name: '湖北', id: 8}, {name: '江西', id: 9}, {name: '广西', id: 10},]
                    },
                ],
                city: city
            }
        },
        mounted(){

        },
        methods: {
            showToast(){
                this.$dialog.alert({
                    content: '春江潮水连海平，都是成都市',
                    duration: 0,
                    confirmBtnText: '确定',
                    cancelBtnText: '取消',
                    confirmBthFnc: ()=>{
                        this.$dialog.close()
                    }
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
                    content: '提交成功'
                })
            },
            showPicker() {
                this.isPicker = true
            },
            pickerConfirm(e) {
                console.log(e)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
