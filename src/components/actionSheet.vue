<template>
    <div class="actionSheet">
        <div @click="isShow = !isShow">点击显示</div>
        <div @click="isShowPopup = !isShowPopup">点击</div>
        <sdActionSheet v-model="isShow" :actions="actions" cancelText="取消" description="请选择身份" @open="open" @opened="opened" @close="close" @closed="closed" @select="select" @cancel="cancel"></sdActionSheet>

        <sd-popup v-model="isShowPopup">
            <sdDateTimePicker type="datetime" v-model="date" @clickRightBtn="dateChange">

            </sdDateTimePicker>
        </sd-popup>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShow: false,
                isShowPopup: false,
                date: new Date(),
                actions: [{ name: '选项一', remake: '', disabled: true}, { name: '选项二', remake: '描述信息' }, { name: '选项三', remake: ''}],
            }
        },
        methods: {
            open() {
                console.log('open')
            },
            opened() {
               console.log('opened')
            },
            close() {
                console.log('close')
            },
            closed() {
                console.log('closed')
            },
            select(item) {
                console.log(item)
            },
            cancel() {
                this.isShow = false
            },
            dateChange(e) {
                console.log(e)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>