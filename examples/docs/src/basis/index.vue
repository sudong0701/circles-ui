<template>
    <div id="basis">
        <router-view class="component"></router-view>
        <div :class="`cs-doc-simulator ${platform === 'phone' ? 'cs-doc-phone' : ''}`" ref="simulator">
            <iframe :src="`${origin}${path}`" frameborder="0">

            </iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                origin: '',
                path: ''
            }
        },
        mounted() {
            this.origin = window.location.origin + window.location.pathname
        },
        beforeRouteEnter(to, from, next) {
            next( vm => {
                vm.path = `#/demo/${to.name}`
            })
        },
        methods: {
        },
        watch: {
            $route: {
                handler: function(val, oldVal){
                    this.path = `#/demo/${val.name}`
                },
                // 深度观察监听
                deep: true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #basis {
        height: 100%;
        overflow-y: auto;
        display: flex;
        flex-direction: row;
        .component {
            width: calc(100% - 420px);
        }
        .cs-doc-simulator {
            position: fixed;
            top: 90px;
            right: 50px;
            box-sizing: border-box;
            width: 375px;
            height: 667px;
            overflow: hidden;
            background: #fafafa;
            border-radius: 12px;
            box-shadow: #ebedf0 0 4px 12px;
            cursor: grab;
            >iframe {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        .cs-doc-phone {
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            height: 100%;
            z-index: 99;
        }
    }
</style>