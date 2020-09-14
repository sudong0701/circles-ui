<template>
    <div id="basis">
        <router-view class="component"></router-view>
        <div class="cs-doc-simulator">
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
            this.origin = window.location.origin
        },
        watch: {
            $route: {
                handler: function(val, oldVal){
                    this.path = `/#/demo/${val.name}`
                    console.log(val);
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
            width: calc(100% - 500px);
        }
        .cs-doc-simulator {
            position: fixed;
            top: 90px;
            right: 50px;
            box-sizing: border-box;
            width: 375px;
            height: 667px;
            min-width: 360px;
            overflow: hidden;
            background: #fafafa;
            border-radius: 12px;
            box-shadow: #ebedf0 0 4px 12px;
            >iframe {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>