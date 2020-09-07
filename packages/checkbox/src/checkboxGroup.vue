<template>
    <div class="csCheckboxGroup" ref="csCheckboxGroup">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csCheckboxGroup',
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
            const csCheckboxGroupItems = this.$refs.csCheckboxGroup.children
            for(let i=0; i<csCheckboxGroupItems.length; i++) {
                csCheckboxGroupItems[i].__vue__.isGroup = true
                csCheckboxGroupItems[i].__vue__.type = this.type
                csCheckboxGroupItems[i].__vue__.disabledGroup = this.disabled
                if(this.value.indexOf(csCheckboxGroupItems[i].__vue__.name) > -1) {
                    csCheckboxGroupItems[i].__vue__.checkedGroup = true
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
                const csCheckboxGroupItems = this.$refs.csCheckboxGroup.children
                for(let i=0; i<csCheckboxGroupItems.length; i++) {
                    if(value.indexOf(csCheckboxGroupItems[i].__vue__.name) > -1) {
                        csCheckboxGroupItems[i].__vue__.checkedGroup = true
                    } else {
                        csCheckboxGroupItems[i].__vue__.checkedGroup = false
                    }
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
