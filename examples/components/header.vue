<template>
    <div class="header-model">
        <p>CircleS-UI</p>
        <div class="right">
            <a class="github" target="_blank" href="https://github.com/sudong0701/circles-ui">
                <cs-icon class="icon" name="github" size="26px" color="#001938"></cs-icon>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .header-model {

        >p {
            float: left;
            font-size: 25px;
            line-height: 60px;
            background-image:-webkit-linear-gradient(91deg,#f1eefc,#9dc6ff 70%,#a5bcff);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
        }
        >.right {
            float: right;
            height: 100%;
            .github {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                position: relative;
                margin-top: 12px;
                margin-right: 20px;
                height: 36px;
                width: 36px;
                border-radius: 50%;
                background-color: #fff;
                transform: scale(0.9);
                transition: transform 0.2s;
            }
            .github:hover {
                transform: scale(1);
            }
        }
    }
</style>