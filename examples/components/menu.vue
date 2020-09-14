<template>
    <div class="menu-model">
        <el-menu
                default-active="1"
                :unique-opened="true"
                :default-active="defaultActive"
                :router="true"
        >
            <el-submenu :index="`${index}`" v-for="(list, index) in nav" :key="index">
                <template slot="title">
                    <span>{{list.name}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="(item, key) in list.children" :key="key" :index="item.path">{{item.name}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <!--<el-submenu index="2">-->
                <!--<template slot="title">-->
                    <!--<span>通用模块</span>-->
                <!--</template>-->
                <!--<el-menu-item-group>-->
                    <!--<el-menu-item index="/docs/popup">Popup</el-menu-item>-->
                <!--</el-menu-item-group>-->
            <!--</el-submenu>-->
        </el-menu>
    </div>
</template>

<script>
    import nav from '../nav.config'
    export default {
        data () {
            return {
                defaultActive: '/docs/install',
                nav: nav
            }
        },
        created () {
            const path = this.$route.fullPath
            this.defaultActive = path == '/' ? '/docs/install' : path
        },
        methods: {
        }
    }
</script>

<style scoped lang="scss">
    .menu-model /deep/ .el-menu-item-group__title {
        display: none;
    }
</style>