<template>
    <div id="guide">
        <router-view class="component"></router-view>
        <div :class="`cs-doc-simulator ${platform === 'phone' ? 'cs-doc-phone' : 'cs-doc-pc'}`" ref="simulator">
            <iframe :src="`${origin}#/demo/all`" frameborder="0">

            </iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                origin: ''
            }
        },
        mounted() {
            this.origin = window.location.origin + window.location.pathname
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #guide {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        display: flex;
        flex-direction: row;
        .component {
            width: calc(100% - 420px);
        }
        .cs-doc-simulator {
            position: fixed;
            box-sizing: border-box;
            overflow: hidden;
            background: #fafafa;
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
            z-index: 99;
        }
        .cs-doc-pc {
            width: 375px;
            height: 667px;
            top: 90px;
            right: 50px;
            border-radius: 12px;
            box-shadow: #ebedf0 0 4px 12px;
        }
    }
</style>