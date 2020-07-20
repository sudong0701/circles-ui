<template>
    <div class="circle">
        <!--<sd-circle></sd-circle>-->
        <div>
            <p style="height: 6rem"></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .circle {
        /*padding-top: 2rem;*/
        height: 20rem;
        background-color: #e99d3a;
        >div {
            height: 4rem;
            overflow-y: auto;
            background-color: #67c23a;
            >p {

            }
        }
    }
</style>