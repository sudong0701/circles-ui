<template>
    <div class="icon-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <div> <cs-icon name="people"></cs-icon> </div>
                <div> <cs-icon name="notification"></cs-icon> </div>
                <div> <cs-icon name="notice1"></cs-icon> </div>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">图标颜色</div>
            <div class="button-demo-content">
                <div> <cs-icon name="present" color="#5a96ec"></cs-icon> </div>
                <div> <cs-icon name="present" color="#9266f9"></cs-icon> </div>
                <div> <cs-icon name="present" color="red"></cs-icon> </div>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">图标大小</div>
            <div class="button-demo-content">
                <div> <cs-icon name="questionfill" :size="24"></cs-icon> </div>
                <div> <cs-icon name="questionfill" size="0.64rem"></cs-icon> </div>
                <div> <cs-icon name="questionfill" size="0.72rem"></cs-icon> </div>
            </div>
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
    .icon-demo {
        .button-demo-content {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            >div {
                margin-bottom: 0.3rem;
                margin-right: 0.6rem;
            }
        }
    }
</style>