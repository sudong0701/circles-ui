<template>
    <div class="csIndexBarItem">
        <div class="csIndexBarItem_title">{{index}}</div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csIndexBarItem',
        data() {
            return {}
        },
        props: {
            index: {
                type: String | Number,
                default: ''
            },

        },
        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
