<template>
    <div id="demo">
        <cs-header :title="title" :isBack="false"></cs-header>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                title: ''
            }
        },
        beforeRouteEnter(to, from, next) {
            next( vm => {
                vm.title = to.name
            })
        },
        watch: {
            $route: {
                handler: function(val, oldVal){
                    this.title = val.name
                },
                // 深度观察监听
                deep: true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>