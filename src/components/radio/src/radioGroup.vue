<template>
    <div class="csRadioGroup" ref="csRadioGroup">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csRadioGroup',
        data() {
            return {

            }
        },
        props: {
            type: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        mounted() {
            if(this.$refs.csRadioGroup.children) {
                for(let i=0; i<this.$refs.csRadioGroup.children.length; i++) {
                    if(this.$refs.csRadioGroup.children[i].__vue__.name === this.value) {
                        this.$refs.csRadioGroup.children[i].__vue__.isActive = true
                    }
                    if(this.disabled) {
                        this.$refs.csRadioGroup.children[i].__vue__.disabledForGroup = true
                    }
                }
            }
        },
        methods: {
            changeRadio(name, isActive) {
                if(this.$refs.csRadioGroup.children) {
                    for(let i=0; i<this.$refs.csRadioGroup.children.length; i++) {
                        if(this.$refs.csRadioGroup.children[i].__vue__.name !== name) {
                            this.$refs.csRadioGroup.children[i].__vue__.isActive = false
                        }
                    }
                }
                if(isActive) {
                    this.$emit('change', name)
                } else {
                    this.$emit('change', '')
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csRadioGroup {
        padding: 0 0 0 0.32rem;
    }

</style>