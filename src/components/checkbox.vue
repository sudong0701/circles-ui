<template>
    <div class="checkbox">
        <csCheckboxGroup v-model="value" @change="change" type="cell">
            <cs-checkbox shape="" color="#67c23a" :checked="checked"  @change="changeCheckbox" name="1">选项11
                <template slot="unActiveIcon">
                <img src="https://img.yzcdn.cn/vant/user-inactive.png" alt="">
                </template>
                <template slot="activeIcon">
                <img src="https://img.yzcdn.cn/vant/user-active.png" alt="">
                </template>
            </cs-checkbox>
            <cs-checkbox shape="" color="#67c23a" :checked="checked"  @change="changeCheckbox" name="2">选项22
            </cs-checkbox>
            <cs-checkbox shape="" color="#67c23a" :checked="checked"  @change="changeCheckbox" name="3">选项33
            </cs-checkbox>
            <cs-checkbox shape="" color="#67c23a" :checked="checked"  @change="changeCheckbox" name="4">选项44
            </cs-checkbox>
            <cs-checkbox shape="" color="#67c23a" :checked="checked"  @change="changeCheckbox" name="5">选项55
            </cs-checkbox>
        </csCheckboxGroup>

        <cs-checkbox shape="" color="#67c23a" :checked="checked"  @change="changeCheckbox" name="5">选项66
        </cs-checkbox>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                checked: false,
                value: ['1', '2']
            }
        },
        methods: {
            changeCheckbox(e) {
                console.log(e)
                this.checked = e
            },
            change(e) {
                console.log(e)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .checkbox {
        padding-top: 0.6rem;
    }
    img {
        width: 0.4rem;
        height: 0.4rem;
    }
</style>