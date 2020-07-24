<template>
    <div class="sdIndexBarItem">
        <div class="sdIndexBarItem_title">{{index}}</div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'sdIndexBarItem',
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
            change() {
                console.log('change')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
