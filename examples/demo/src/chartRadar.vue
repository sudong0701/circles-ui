<template>
    <div class="chartRadar-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <div ref="basis"></div>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">多边形定制</div>
            <div class="button-demo-content">
                <div ref="polygon"></div>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">颜色定制</div>
            <div class="button-demo-content">
                <div ref="color"></div>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">内边数定制</div>
            <div class="button-demo-content">
                <div ref="number"></div>
            </div>
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
            this.initChartRadar()
        },
        methods: {
            initChartRadar() {
                this.ChartRadar.draw({
                    dataArr: [
                        {text: '积(G)分点', value: 0.8},
                        {text: '口碑(O)点', value: 0.7},
                        {text: '营收(I)点', value: 0.6}
                    ]
                }).then((e)=> {
                    let canvasBox = this.$refs['basis']
                    e.style.height = '300px'
                    e.style.width = '300px'
                    e.style.display = 'block'
                    e.style.margin = '0 auto'
                    canvasBox.appendChild(e)
                })

                //多边形定制
                this.ChartRadar.draw({
                    dataArr: [
                        {text: '击杀', value: 0.9},
                        {text: '助攻', value: 0.7},
                        {text: '伤害', value: 0.9},
                        {text: '生存', value: 0.4},
                        {text: '视野', value: 0.4}
                    ]
                }).then((e)=> {
                    let canvasBox = this.$refs['polygon']
                    e.style.height = '300px'
                    e.style.width = '300px'
                    e.style.display = 'block'
                    e.style.margin = '0 auto'
                    canvasBox.appendChild(e)
                })

                //颜色定制
                this.ChartRadar.draw({
                    outerColor: 'rgba(90,150,236)',
                    insideColor: 'rgba(90,150,236, 0.6)',
                    cableColor: 'rgba(90,150,236, 0.7)',
                    dataPointColor: 'rgba(255,44,125)',
                    dataCableColor: 'rgba(255,44,125)',
                    fillColor: 'rgba(255,44,125, 0.7)',
                    dataArr: [
                        {text: '击杀', value: 0.4},
                        {text: '助攻', value: 0.9},
                        {text: '伤害', value: 0.5},
                        {text: '生存', value: 0.6},
                        {text: '视野', value: 0.9}
                    ]
                }).then((e)=> {
                    let canvasBox = this.$refs['color']
                    e.style.height = '300px'
                    e.style.width = '300px'
                    e.style.display = 'block'
                    e.style.margin = '0 auto'
                    canvasBox.appendChild(e)
                })

                //内边数定制
                this.ChartRadar.draw({
                    insideNumber: 4,
                    dataArr: [
                        {text: '积(G)分点', value: 0.8},
                        {text: '口碑(O)点', value: 0.7},
                        {text: '营收(I)点', value: 0.6}
                    ]
                }).then((e)=> {
                    let canvasBox = this.$refs['number']
                    e.style.height = '300px'
                    e.style.width = '300px'
                    e.style.display = 'block'
                    e.style.margin = '0 auto'
                    canvasBox.appendChild(e)
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .chartRadar-demo {
        background-color: #fff;
        padding-bottom: 0.3rem;
    }
</style>