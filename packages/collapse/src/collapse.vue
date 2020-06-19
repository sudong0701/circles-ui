<template>
    <div class="sdCollapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'sdCollapse',
        data() {
            return {}
        },
        props: {
            activeNames: {
                type: Array | String,
                default: ''
            },
            accordion: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>