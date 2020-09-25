<template>
    <div class="all-demo">
        <div class="all-demo-nav" v-for="(list, key) in nav" :key="key" v-if="key !== 0">
            <div class="all-demo-title">
                {{list.name}}
            </div>
            <div class="all-demo-list">
                <div class="all-demo-item" v-for="(item, index) in list.children" :key="index" @click="goDoc(item)">
                    <span>{{item.name}}</span>
                    <cs-icon class="all-demo-icon" name="right" color="#ccc" size="0.3rem"></cs-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import nav from '../../nav.config'
    export default {
        name: '',
        data() {
            return {
                nav: nav
            }
        },
        methods: {
            goDoc(item) {
                let pathArr = item.path.split('/')
                console.log(item.path.split('/'))
                this.$router.push(`/demo/${pathArr[pathArr.length - 1]}`)
            }
        }
    }
</script>

<style scoped lang="scss">
    .all-demo {
        padding: 0.3rem 0.4rem;
        background-color: #fff;
        .all-demo-nav {
            .all-demo-title {
                margin: 24px 0 8px 16px;
                color: rgba(69, 90, 100, 0.6);
                font-size: 14px;
            }
            .all-demo-list {
                .all-demo-item {
                    position: relative;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: flex;
                    margin: 0 0 12px;
                    padding-left: 20px;
                    color: #323233;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 40px;
                    background: #f7f8fa;
                    border-radius: 99px;
                    -webkit-transition: background 0.3s;
                    transition: background 0.3s;
                    cursor: pointer;
                    user-select: none;
                    >span {

                    }
                    .all-demo-icon {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        right: 0.3rem;
                        margin: auto;
                    }
                }
                .all-demo-item:hover {
                    background-color: #eee;
                }
            }
        }
        .all-demo-nav:nth-child(1) {
            .all-demo-title {
                margin: 0 0 8px 16px;
            }
        }
    }
</style>