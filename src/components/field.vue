<template>
    <div class="field">
        <cs-field label="姓名" placeholder="请输入姓名" :type="type" maxlength="11"></cs-field>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                type: 'digit'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .field {
        height: 667px;
        padding: 0.6rem 0;
        background-color: #fafafa;
    }
</style>