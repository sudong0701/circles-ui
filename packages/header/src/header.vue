<template>
    <div class="sd-header">
        <div class="sd-header-left">
            <slot name="left" clas="slot">
                <div class="sd-header-leftBox" @click="goBack()">
                    <img class="sd-header-leftImg" src="../../assets/back.png" alt="">
                </div>
            </slot>
        </div>
        <div class="sd-header-title">{{title}}</div>
        <div class="sd-header-right">
            <slot name="right">

            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'sdHeader',
        data() {
            return {}
        },
        props: {
            title: String
        },
        methods: {
            goBack(){
                this.$emit('click-left')
            }
        }
    }
</script>
