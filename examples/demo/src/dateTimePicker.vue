<template>
    <div class="dateTimePicker-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">选择年月日</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="选择年月日" @click="showDate"></cs-button>
            </div>
        </div>

        <cs-popup v-model="isShowDate">
            <csDateTimePicker ref="picker" v-model="currDate" :minDate="minDate" :maxDate="maxDate">

            </csDateTimePicker>
        </cs-popup>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShowDate: false,
                currDate: new Date(),
                minDate: new Date('2019-01-01'),
                maxDate: new Date('2021-01-01')
            }
        },
        methods: {
            showDate() {
                this.isShowDate = true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dateTimePicker-demo {
    .button-demo-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        >div {
            margin-bottom: 0.3rem;
            margin-right: 0.2rem;
        }
    }
}

</style>