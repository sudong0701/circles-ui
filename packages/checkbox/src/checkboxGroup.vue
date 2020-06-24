<template>
    <div class="sdCheckboxGroup" ref="sdCheckboxGroup">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'sdCheckboxGroup',
        data() {
            return {}
        },
        props: {
            value: {
                type: Array,
                default: function () {
                    return []
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: ''
            },
            max: {
                type: Number,
                default: -1
            }
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        mounted() {
            const sdCheckboxGroupItems = this.$refs.sdCheckboxGroup.children
            for(let i=0; i<sdCheckboxGroupItems.length; i++) {
                sdCheckboxGroupItems[i].__vue__.isGroup = true
                sdCheckboxGroupItems[i].__vue__.type = this.type
                sdCheckboxGroupItems[i].__vue__.disabledGroup = this.disabled
                if(this.value.indexOf(sdCheckboxGroupItems[i].__vue__.name) > -1) {
                    sdCheckboxGroupItems[i].__vue__.checkedGroup = true
                }
            }
        },
        methods: {
            /**
             * 改变value的值
             * @param {string} name name值
             * @return
             */
            changeValue(name) {
                let value = [...this.value]
                const index = this.value.indexOf(name)
                if(index > -1) {
                    value.splice(index, 1)
                    this.$emit('change', value)
                } else {
                    if(this.max === -1 || value.length <= this.max -1 ) {
                        value.push(name)
                        this.$emit('change', value)
                    }
                }
            }
        },
        watch: {
            value(value) {
                const sdCheckboxGroupItems = this.$refs.sdCheckboxGroup.children
                for(let i=0; i<sdCheckboxGroupItems.length; i++) {
                    if(value.indexOf(sdCheckboxGroupItems[i].__vue__.name) > -1) {
                        sdCheckboxGroupItems[i].__vue__.checkedGroup = true
                    } else {
                        sdCheckboxGroupItems[i].__vue__.checkedGroup = false
                    }
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .sdCheckboxGroup {
        padding-left: 0.32rem;
    }
</style>