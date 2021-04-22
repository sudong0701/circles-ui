<template>
    <div class="pullRefreshDemo">
        <cs-pullRefresh @scrolltolower="scrolltolower" v-model="isLoading" @refresh="refresh" isThrottling>
            <div class="list">
                <div class="item" v-for="(item, key) in list" :key="key">
                    {{item}}
                </div>
            </div>
        </cs-pullRefresh>  
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [],
            isLoading: false
        }
    },
    mounted() {
        this.createList()
    },
    methods: {
        createList() {
            let len = this.list.length
            for(let i = len; i < len + 20; i++) {
                this.list.push(i)
            }
        },
        scrolltolower(callback) {
            this.createList()
            this.$nextTick(()=> {
                callback()
            })
        },
        refresh() {
            setTimeout(()=> {
                this.isLoading = false
            }, 1000)
        }
    }
}
</script>

<style scoped lang="scss">
.pullRefreshDemo {
    position: absolute;
    bottom: 0;
    top: 0.92rem;
    left: 0;
    right: 0;
    overflow-y: auto;
    .item {
        height: 0.88rem;
        line-height: 0.88rem;
        text-align: center;
        border-bottom: 0.01rem solid #dfdfdf;
    }
}
</style>