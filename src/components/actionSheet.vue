<template>
    <div class="actionSheet">
        <span>{{selectItem.action.name}}</span>
        <div @click="isShow = !isShow">点击显示</div>
        <csActionSheet v-model="isShow" :actions="actions" cancelText="取消" description="请选择身份" @open="open" @opened="opened" @close="close" @closed="closed" @select="select" @cancel="cancel"></csActionSheet>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShow: false,
                selectItem: {action: {}},
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
                this.selectItem = item
                console.log(item)
                this.isShow = false
            },
            cancel() {
                this.isShow = false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>