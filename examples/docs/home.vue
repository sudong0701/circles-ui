<template>
    <div class="home-demo">
        <div>
            <header class="page-header" style="box-shadow: none;">
                <div class="header-container">
                    <a href="#/" class="router-link-exact-active router-link-active">
                        <span>C S</span>
                    </a>
                    <a href="#/docs/components/icon" class="">组件</a>
                </div>
            </header>
            <div class="pg-index page">
                <div class="index-container">
                    <div class="avatar">
                        <span>CircleS</span>
                    </div>
                    <p>一款仿 Vant-ui 移动端 Vue UI组件库</p>
                </div>
                <div class="separate-panel">
                    <div class="about">
                        <a href="#/docs/guide/introduce" class="">开始使用</a>
                        <a target="_blank" href="https://github.com/sudong0701/circles-ui" class="btn-github">GitHub</a>
                    </div>
                </div>
            </div> <!---->
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
            }
        },
        mounted() {
            if(this.platform === 'phone') {
                this.$router.push('/docs/guide/introduce')
            }
        },
        methods: {
            goDocs() {
                this.$router.push('/docs/guide/introduce')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .home-demo {
        height: 100%;
        background-color: #fff;
        .page-header {
            background-color: #fff;
            box-shadow: 0 10px 60px 0 rgba(29, 29, 31, .07);
            opacity: .98;
            position: relative !important;
            top: 0;
            left: 0;
            width: 100%;
            height: 80px;
            transition: all .3s;
            z-index: 100;
            .header-container {
                width: 90%;
                margin: 0 auto;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                height: 80px;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                a {
                    img {
                        height: 100px;
                    }
                    span {
                        font-size: 20px;
                        background-image:-webkit-linear-gradient(91deg,#f1eefc,#9dc6ff 70%,#a5bcff);
                        -webkit-background-clip:text;
                        -webkit-text-fill-color:transparent;
                    }
                }
            }
        }
        .pg-index {
            .index-container {
                width: 960px;
                margin: 0 auto;
                text-align: center;
                padding: 100px 0;
                .avatar {
                    height: 300px;
                    width: 600px;
                    margin: 0 auto;
                    span {
                        font-family: 'Tangerine', serif;
                        font-size: 150px;
                        background-image:-webkit-linear-gradient(91deg,#f1eefc,#9dc6ff 70%,#a5bcff);
                        -webkit-background-clip:text;
                        -webkit-text-fill-color:transparent;
                        line-height: 300px;
                        font-weight: bold;
                    }
                }
                img {
                    height: 300px;
                    width: 300px;
                }
                p {
                    margin-top: 56px;
                    color: #8994c6;
                    font-size: 32px;
                }
            }
            .separate-panel {
                position: relative;
                .about {
                    position: absolute;
                    width: 100%;
                    height: 200px;
                    top: 20px;
                    z-index: 9;
                    background: #fff;
                    text-align: center;
                    a {
                        color: #fff;
                        background-image: -webkit-gradient(linear, left top, right top, from(#00aeff), to(#3369e7));
                        background-image: linear-gradient(90deg, #00aeff, #3369e7);
                        -webkit-box-shadow: 0 2px 6px 0 rgba(51, 105, 231, .4);
                        box-shadow: 0 2px 6px 0 rgba(51, 105, 231, .4);
                        display: inline-block;
                        width: 190px;
                        height: 56px;
                        margin: 0 35px;
                        font-size: 18px;
                        line-height: 56px;
                        border-radius: 28px;
                        -webkit-transition: all .3s;
                        transition: all .3s;
                        cursor: pointer;
                    }
                    .btn-github {
                        color: #316de9;
                        border: 1px solid #2f6ee9;
                        background: #fff;
                        -webkit-box-shadow: none;
                        box-shadow: none;
                    }
                }
            }
            .separate-panel:after {
                content: "";
                display: block;
                position: absolute;
                top: -80px;
                width: 100%;
                height: 250px;
                background: #fff;
                -webkit-box-shadow: 0 -4px 30px 0 #dfe1e6;
                box-shadow: 0 -4px 30px 0 #dfe1e6;
                -webkit-transform: skewY(-4deg);
                transform: skewY(-4deg);
            }
        }
    }
</style>