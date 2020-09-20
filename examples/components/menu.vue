<template>
    <div class="menu-model">
        <el-menu
                default-active="1"
                :unique-opened="true"
                :default-active="defaultActive"
                :router="true"
                text-color="#666"
        >
            <el-submenu :index="`${index}`" v-for="(list, index) in nav" :key="index">
                <template slot="title">
                    <span>{{list.name}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="(item, key) in list.children" :key="key" :index="item.path">{{item.name}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
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