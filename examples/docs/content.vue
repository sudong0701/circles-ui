<template>
    <div class="content">
        <el-container style="height:100%">
            <el-header height="60">
                <header-model></header-model>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <menu-model></menu-model>
                </el-aside>
                <el-main class="container">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import HeaderModel from '../components/header'
    import MenuModel from '../components/menu'
    export default {
        components: {
            HeaderModel,
            MenuModel
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .content {
        position: relative;
        height: 100%;
    }
    .container {

    }
    .content /deep/ .el-header {
        //background-color: #e99d3a;
    }
</style>