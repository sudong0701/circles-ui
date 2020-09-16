<template>
    <div class="dateTimePicker-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">选择年月日</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="选择年月日" @click="showDate"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">选择完整时间</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="选择完整时间" @click="showDateTime"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">选择年月</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="选择年月" @click="showYearMonth"></cs-button>
            </div>
        </div>


        <cs-popup v-model="isShowDate">
            <csDateTimePicker v-model="currDate" :minDate="minDate" :maxDate="maxDate">

            </csDateTimePicker>
        </cs-popup>

        <cs-popup v-model="isShowDateTime">
            <csDateTimePicker type="datetime" v-model="currDate" :minDate="minDateTime" :maxDate="maxDateTime">

            </csDateTimePicker>
        </cs-popup>

        <cs-popup v-model="isShowYearMonth">
            <csDateTimePicker type="year-month" v-model="currDate" :minDate="minDate" :maxDate="maxDate"></csDateTimePicker>
        </cs-popup>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShowDate: false,
                isShowDateTime: false,
                isShowYearMonth: false,
                currDate: new Date(),
                minDate: new Date('2018-07-27'),
                maxDate: new Date('2021-07-27'),
                minDateTime: new Date('2018-07-27 19:22:33'),
                maxDateTime: new Date('2021-07-27 19:22:33'),
            }
        },
        methods: {
            showDate() {
                this.isShowDate = true
            },
            showDateTime() {
                this.isShowDateTime = true
            },
            showYearMonth() {
                this.isShowYearMonth = true
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