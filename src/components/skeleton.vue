<template>
    <div class="Skeleton">
        <csSkeleton title avatar row="3" :rowWidth="rowWidth"></csSkeleton>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                rowWidth: [100, 100, 50]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .Skeleton {
        padding: 1rem 0.32rem 0 0.32rem;
    }
</style>