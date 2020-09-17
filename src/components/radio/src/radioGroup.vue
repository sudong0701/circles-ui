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
            },
            shape: {   //形状
                type: String,
                default: 'round'
            },
            color: {
                type: String,
                default: '#1989fa'
            },
            labelDisabled: {   //是否禁用文本的点击
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
                    this.$refs.csRadioGroup.children[i].__vue__.shape = this.shape
                    this.$refs.csRadioGroup.children[i].__vue__.color = this.color
                    this.$refs.csRadioGroup.children[i].__vue__.labelDisabled = this.labelDisabled
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
        },
        watch: {
            disabled(val) {
                if(this.$refs.csRadioGroup.children) {
                    for(let i=0; i<this.$refs.csRadioGroup.children.length; i++) {
                        if(val) {
                            this.$refs.csRadioGroup.children[i].__vue__.disabledForGroup = true
                        } else {
                            this.$refs.csRadioGroup.children[i].__vue__.disabledForGroup = false
                        }
                    }
                }
            },
            shape(val) {
                if(this.$refs.csRadioGroup.children) {
                    for(let i=0; i<this.$refs.csRadioGroup.children.length; i++) {
                        this.$refs.csRadioGroup.children[i].__vue__.shape = val
                    }
                }
            },
            color(val) {
                if(this.$refs.csRadioGroup.children) {
                    for(let i=0; i<this.$refs.csRadioGroup.children.length; i++) {
                        this.$refs.csRadioGroup.children[i].__vue__.color = val
                    }
                }
            },
            labelDisabled(val) {
                if(this.$refs.csRadioGroup.children) {
                    for(let i=0; i<this.$refs.csRadioGroup.children.length; i++) {
                        this.$refs.csRadioGroup.children[i].__vue__.labelDisabled = val
                    }
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