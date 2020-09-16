# Icon 图标
<br/>

:::card
### 按需引入

   ```js
       import Vue from 'vue';
       import { csIcon } from 'circles-ui';

       Vue.use(csIcon);
   ```
:::

## 代码演示

:::card
### 基础用法
> 通过 `name`属性展示相应Icon图标，所有图标名称见下方表格。

   ```html
    <cs-icon name="people"></cs-icon>
    <cs-icon name="notification"></cs-icon>
    <cs-icon name="notice1"></cs-icon>
   ```
:::

:::card
### 图标颜色
   > 通过 `color`属性展示控制图标颜色。

   ```html
    <cs-icon name="present" color="#5a96ec"></cs-icon>
    <cs-icon name="present" color="#9266f9"></cs-icon>
    <cs-icon name="present" color="red"></cs-icon>
   ```
:::

:::card
### 图标颜色
   > 通过 `size`属性展示控制图标大小，传入Number类型时默认单位为px。

   ```html
    <cs-icon name="questionfill" :size="24"></cs-icon>
    <cs-icon name="questionfill" size="0.64rem"></cs-icon>
    <cs-icon name="questionfill" size="0.72rem"></cs-icon>
   ```
:::

   ## API

:::card
### Props

   <template>
   <el-table
        :data="apiData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="参数"
          width="180">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          width="130">
        </el-table-column>
        <el-table-column
             prop="default"
             label="默认值"
             width="150">
        </el-table-column>
      </el-table>
    </template>
</template>
<script>
export default {
  data () {
    return {
      apiData: [{
                  name: 'name',
                  remake: 'Icon图标的标志',
                  type: 'String',
                  default: '-'
                },
                {
                  name: 'color',
                  remake: 'Icon图标的颜色',
                  type: 'String',
                  default: '#333'
                },
                {
                  name: 'size',
                  remake: 'Icon图标的大小',
                  type: 'String | Number',
                  default: "0.64rem"
                }
                ],
                eventData: [{
                  name: 'click',
                  remake: '点击Icon图标时触发',
                  param: 'event: Event(点击事件参数)'
                }
                ]
    }
  }
}
</script>
:::

:::card
### Events

<template>
   <el-table
        :data="eventData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="事件名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="param"
          label="回调参数"
          width="240">
        </el-table-column>
      </el-table>
    </template>
:::

:::card
## 图标库

<div>
   <div class="iconBox">
      <div class="iconItem">
         <csIcon name="people" :size="36"></csIcon>
         <span>people</span>
      </div>
      <div class="iconItem">
         <csIcon name="notification" :size="36"></csIcon>
         <span>notification</span>
      </div>
      <div class="iconItem">
         <csIcon name="notice1" :size="36"></csIcon>
         <span>notice1</span>
      </div>
      <div class="iconItem">
         <csIcon name="pic" :size="36"></csIcon>
         <span>pic</span>
      </div>
      <div class="iconItem">
         <csIcon name="pay" :size="36"></csIcon>
         <span>pay</span>
      </div>
      <div class="iconItem">
         <csIcon name="play_forward_fill" :size="36"></csIcon>
         <span>play_forward_fill</span>
      </div>
      <div class="iconItem">
         <csIcon name="paint" :size="36"></csIcon>
         <span>paint</span>
      </div>
      <div class="iconItem">
         <csIcon name="order" :size="36"></csIcon>
         <span>order</span>
      </div>
      <div class="iconItem">
         <csIcon name="peoplelist" :size="36"></csIcon>
         <span>peoplelist</span>
      </div>
      <div class="iconItem">
         <csIcon name="picfill" :size="36"></csIcon>
         <span>picfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="pick" :size="36"></csIcon>
         <span>pick</span>
      </div>
      <div class="iconItem">
         <csIcon name="playfill" :size="36"></csIcon>
         <span>playfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="post" :size="36"></csIcon>
         <span>post</span>
      </div>
      <div class="iconItem">
         <csIcon name="phone" :size="36"></csIcon>
         <span>phone</span>
      </div>
      <div class="iconItem">
         <csIcon name="profile" :size="36"></csIcon>
         <span>profile</span>
      </div>
      <div class="iconItem">
         <csIcon name="pullright" :size="36"></csIcon>
         <span>pullright</span>
      </div>
      <div class="iconItem">
         <csIcon name="present" :size="36"></csIcon>
         <span>present</span>
      </div>
      <div class="iconItem">
         <csIcon name="pulldown" :size="36"></csIcon>
         <span>pulldown</span>
      </div>
      <div class="iconItem">
         <csIcon name="presentfill" :size="36"></csIcon>
         <span>presentfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="pullup" :size="36"></csIcon>
         <span>pullup</span>
      </div>
      <div class="iconItem">
         <csIcon name="radiobox" :size="36"></csIcon>
         <span>radiobox</span>
      </div>
      <div class="iconItem">
         <csIcon name="qrcode" :size="36"></csIcon>
         <span>qrcode</span>
      </div>
      <div class="iconItem">
         <csIcon name="radioboxfill" :size="36"></csIcon>
         <span>radioboxfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="pullleft" :size="36"></csIcon>
         <span>pullleft</span>
      </div>
      <div class="iconItem">
         <csIcon name="question" :size="36"></csIcon>
         <span>question</span>
      </div>
      <div class="iconItem">
         <csIcon name="questionfill" :size="36"></csIcon>
         <span>questionfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="qr_code" :size="36"></csIcon>
         <span>qr_code</span>
      </div>
      <div class="iconItem">
         <csIcon name="recordfill" :size="36"></csIcon>
         <span>recordfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="punch" :size="36"></csIcon>
         <span>punch</span>
      </div>
      <div class="iconItem">
         <csIcon name="recharge" :size="36"></csIcon>
         <span>recharge</span>
      </div>
      <div class="iconItem">
         <csIcon name="rankfill" :size="36"></csIcon>
         <span>rankfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="read" :size="36"></csIcon>
         <span>read</span>
      </div>
      <div class="iconItem">
         <csIcon name="profilefill" :size="36"></csIcon>
         <span>profilefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="refresh" :size="36"></csIcon>
         <span>refresh</span>
      </div>
      <div class="iconItem">
         <csIcon name="rechargefill" :size="36"></csIcon>
         <span>rechargefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="record" :size="36"></csIcon>
         <span>record</span>
      </div>
      <div class="iconItem">
         <csIcon name="redpacket_fill" :size="36"></csIcon>
         <span>redpacket_fill</span>
      </div>
      <div class="iconItem">
         <csIcon name="rank" :size="36"></csIcon>
         <span>rank</span>
      </div>
      <div class="iconItem">
         <csIcon name="remind" :size="36"></csIcon>
         <span>remind</span>
      </div>
      <div class="iconItem">
         <csIcon name="repeal" :size="36"></csIcon>
         <span>repeal</span>
      </div>
      <div class="iconItem">
         <csIcon name="refund" :size="36"></csIcon>
         <span>refund</span>
      </div>
      <div class="iconItem">
         <csIcon name="roundadd" :size="36"></csIcon>
         <span>roundadd</span>
      </div>
      <div class="iconItem">
         <csIcon name="right" :size="36"></csIcon>
         <span>right</span>
      </div>
      <div class="iconItem">
         <csIcon name="repairfill" :size="36"></csIcon>
         <span>repairfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="rounddown" :size="36"></csIcon>
         <span>rounddown</span>
      </div>
      <div class="iconItem">
         <csIcon name="roundcheckfill" :size="36"></csIcon>
         <span>roundcheckfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="roundclosefill" :size="36"></csIcon>
         <span>roundclosefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="roundcheck" :size="36"></csIcon>
         <span>roundcheck</span>
      </div>
      <div class="iconItem">
         <csIcon name="round" :size="36"></csIcon>
         <span>round</span>
      </div>
      <div class="iconItem">
         <csIcon name="roundleftfill-copy" :size="36"></csIcon>
         <span>roundleftfill-copy</span>
      </div>
      <div class="iconItem">
         <csIcon name="repair" :size="36"></csIcon>
         <span>repair</span>
      </div>
      <div class="iconItem">
         <csIcon name="roundrightfill" :size="36"></csIcon>
         <span>roundrightfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="searchlist" :size="36"></csIcon>
         <span>searchlist</span>
      </div>
      <div class="iconItem">
         <csIcon name="same" :size="36"></csIcon>
         <span>same</span>
      </div>
      <div class="iconItem">
         <csIcon name="search1" :size="36"></csIcon>
         <span>search1</span>
      </div>
      <div class="iconItem">
         <csIcon name="roundright" :size="36"></csIcon>
         <span>roundright</span>
      </div>
      <div class="iconItem">
         <csIcon name="samefill" :size="36"></csIcon>
         <span>samefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="roundclose" :size="36"></csIcon>
         <span>roundclose</span>
      </div>
      <div class="iconItem">
         <csIcon name="safe" :size="36"></csIcon>
         <span>safe</span>
      </div>
      <div class="iconItem">
         <csIcon name="send" :size="36"></csIcon>
         <span>send</span>
      </div>
      <div class="iconItem">
         <csIcon name="redpacket" :size="36"></csIcon>
         <span>redpacket</span>
      </div>
      <div class="iconItem">
         <csIcon name="scan" :size="36"></csIcon>
         <span>scan</span>
      </div>
      <div class="iconItem">
         <csIcon name="refresharrow" :size="36"></csIcon>
         <span>refresharrow</span>
      </div>
      <div class="iconItem">
         <csIcon name="settings" :size="36"></csIcon>
         <span>settings</span>
      </div>
      <div class="iconItem">
         <csIcon name="service" :size="36"></csIcon>
         <span>service</span>
      </div>
      <div class="iconItem">
         <csIcon name="settingsfill" :size="36"></csIcon>
         <span>settingsfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="share1" :size="36"></csIcon>
         <span>share1</span>
      </div>
      <div class="iconItem">
         <csIcon name="roundaddfill" :size="36"></csIcon>
         <span>roundaddfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="servicefill" :size="36"></csIcon>
         <span>servicefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="selectionfill" :size="36"></csIcon>
         <span>selectionfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="sort" :size="36"></csIcon>
         <span>sort</span>
      </div>
      <div class="iconItem">
         <csIcon name="similar" :size="36"></csIcon>
         <span>similar</span>
      </div>
      <div class="iconItem">
         <csIcon name="shop" :size="36"></csIcon>
         <span>shop</span>
      </div>
      <div class="iconItem">
         <csIcon name="square" :size="36"></csIcon>
         <span>square</span>
      </div>
      <div class="iconItem">
         <csIcon name="skinfill" :size="36"></csIcon>
         <span>skinfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="squarecheckfill" :size="36"></csIcon>
         <span>squarecheckfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="sound" :size="36"></csIcon>
         <span>sound</span>
      </div>
      <div class="iconItem">
         <csIcon name="shopfill" :size="36"></csIcon>
         <span>shopfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="stop" :size="36"></csIcon>
         <span>stop</span>
      </div>
      <div class="iconItem">
         <csIcon name="tag" :size="36"></csIcon>
         <span>tag</span>
      </div>
      <div class="iconItem">
         <csIcon name="subscription" :size="36"></csIcon>
         <span>subscription</span>
      </div>
      <div class="iconItem">
         <csIcon name="squarecheck" :size="36"></csIcon>
         <span>squarecheck</span>
      </div>
      <div class="iconItem">
         <csIcon name="titles" :size="36"></csIcon>
         <span>titles</span>
      </div>
      <div class="iconItem">
         <csIcon name="time" :size="36"></csIcon>
         <span>time</span>
      </div>
      <div class="iconItem">
         <csIcon name="taxi" :size="36"></csIcon>
         <span>taxi</span>
      </div>
      <div class="iconItem">
         <csIcon name="sponsorfill" :size="36"></csIcon>
         <span>sponsorfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="text" :size="36"></csIcon>
         <span>text</span>
      </div>
      <div class="iconItem">
         <csIcon name="triangleupfill" :size="36"></csIcon>
         <span>triangleupfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="sponsor" :size="36"></csIcon>
         <span>sponsor</span>
      </div>
      <div class="iconItem">
         <csIcon name="taoxiaopu" :size="36"></csIcon>
         <span>taoxiaopu</span>
      </div>
      <div class="iconItem">
         <csIcon name="unlock" :size="36"></csIcon>
         <span>unlock</span>
      </div>
      <div class="iconItem">
         <csIcon name="upblock" :size="36"></csIcon>
         <span>upblock</span>
      </div>
      <div class="iconItem">
         <csIcon name="top" :size="36"></csIcon>
         <span>top</span>
      </div>
      <div class="iconItem">
         <csIcon name="unfold" :size="36"></csIcon>
         <span>unfold</span>
      </div>
      <div class="iconItem">
         <csIcon name="usefullfill" :size="36"></csIcon>
         <span>usefullfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="triangledownfill" :size="36"></csIcon>
         <span>triangledownfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="upstagefill" :size="36"></csIcon>
         <span>upstagefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="video" :size="36"></csIcon>
         <span>video</span>
      </div>
      <div class="iconItem">
         <csIcon name="selection" :size="36"></csIcon>
         <span>selection</span>
      </div>
      <div class="iconItem">
         <csIcon name="vipcard" :size="36"></csIcon>
         <span>vipcard</span>
      </div>
      <div class="iconItem">
         <csIcon name="shake" :size="36"></csIcon>
         <span>shake</span>
      </div>
      <div class="iconItem">
         <csIcon name="usefull" :size="36"></csIcon>
         <span>usefull</span>
      </div>
      <div class="iconItem">
         <csIcon name="upload" :size="36"></csIcon>
         <span>upload</span>
      </div>
      <div class="iconItem">
         <csIcon name="voicefill" :size="36"></csIcon>
         <span>voicefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="vip" :size="36"></csIcon>
         <span>vip</span>
      </div>
      <div class="iconItem">
         <csIcon name="ticket1" :size="36"></csIcon>
         <span>ticket1</span>
      </div>
      <div class="iconItem">
         <csIcon name="voice1" :size="36"></csIcon>
         <span>voice1</span>
      </div>
      <div class="iconItem">
         <csIcon name="title" :size="36"></csIcon>
         <span>title</span>
      </div>
      <div class="iconItem">
         <csIcon name="videofill" :size="36"></csIcon>
         <span>videofill</span>
      </div>
      <div class="iconItem">
         <csIcon name="skin" :size="36"></csIcon>
         <span>skin</span>
      </div>
      <div class="iconItem">
         <csIcon name="we" :size="36"></csIcon>
         <span>we</span>
      </div>
      <div class="iconItem">
         <csIcon name="weblock" :size="36"></csIcon>
         <span>weblock</span>
      </div>
      <div class="iconItem">
         <csIcon name="upstage" :size="36"></csIcon>
         <span>upstage</span>
      </div>
      <div class="iconItem">
         <csIcon name="wefill" :size="36"></csIcon>
         <span>wefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="tagfill" :size="36"></csIcon>
         <span>tagfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="warnfill" :size="36"></csIcon>
         <span>warnfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="timefill" :size="36"></csIcon>
         <span>timefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="wifi" :size="36"></csIcon>
         <span>wifi</span>
      </div>
      <div class="iconItem">
         <csIcon name="weibo" :size="36"></csIcon>
         <span>weibo</span>
      </div>
      <div class="iconItem">
         <csIcon name="weunblock" :size="36"></csIcon>
         <span>weunblock</span>
      </div>
      <div class="iconItem">
         <csIcon name="write" :size="36"></csIcon>
         <span>write</span>
      </div>
      <div class="iconItem">
         <csIcon name="writefill" :size="36"></csIcon>
         <span>writefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="home" :size="36"></csIcon>
         <span>home</span>
      </div>
      <div class="iconItem">
         <csIcon name="activityfill" :size="36"></csIcon>
         <span>activityfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="home1" :size="36"></csIcon>
         <span>home1</span>
      </div>
      <div class="iconItem">
         <csIcon name="addressbook" :size="36"></csIcon>
         <span>addressbook</span>
      </div>
      <div class="iconItem">
         <csIcon name="project-copy" :size="36"></csIcon>
         <span>project-copy</span>
      </div>
      <div class="iconItem">
         <csIcon name="all" :size="36"></csIcon>
         <span>all</span>
      </div>
      <div class="iconItem">
         <csIcon name="xiangmu" :size="36"></csIcon>
         <span>xiangmu</span>
      </div>
      <div class="iconItem">
         <csIcon name="add" :size="36"></csIcon>
         <span>add</span>
      </div>
      <div class="iconItem">
         <csIcon name="searchfile" :size="36"></csIcon>
         <span>searchfile</span>
      </div>
      <div class="iconItem">
         <csIcon name="warn" :size="36"></csIcon>
         <span>warn</span>
      </div>
      <div class="iconItem">
         <csIcon name="camerafill" :size="36"></csIcon>
         <span>camerafill</span>
      </div>
      <div class="iconItem">
         <csIcon name="appreciate" :size="36"></csIcon>
         <span>appreciate</span>
      </div>
      <div class="iconItem">
         <csIcon name="close1" :size="36"></csIcon>
         <span>close1</span>
      </div>
      <div class="iconItem">
         <csIcon name="apps" :size="36"></csIcon>
         <span>apps</span>
      </div>
      <div class="iconItem">
         <csIcon name="clothes" :size="36"></csIcon>
         <span>clothes</span>
      </div>
      <div class="iconItem">
         <csIcon name="weixin" :size="36"></csIcon>
         <span>weixin</span>
      </div>
      <div class="iconItem">
         <csIcon name="circlefill" :size="36"></csIcon>
         <span>circlefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="wenzi" :size="36"></csIcon>
         <span>wenzi</span>
      </div>
      <div class="iconItem">
         <csIcon name="community" :size="36"></csIcon>
         <span>community</span>
      </div>
      <div class="iconItem">
         <csIcon name="attentionfill" :size="36"></csIcon>
         <span>attentionfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="coin" :size="36"></csIcon>
         <span>coin</span>
      </div>
      <div class="iconItem">
         <csIcon name="back_android" :size="36"></csIcon>
         <span>back_android</span>
      </div>
      <div class="iconItem">
         <csIcon name="comment" :size="36"></csIcon>
         <span>comment</span>
      </div>
      <div class="iconItem">
         <csIcon name="backwardfill" :size="36"></csIcon>
         <span>backwardfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="command" :size="36"></csIcon>
         <span>command</span>
      </div>
      <div class="iconItem">
         <csIcon name="attention" :size="36"></csIcon>
         <span>attention</span>
      </div>
      <div class="iconItem">
         <csIcon name="clothesfill" :size="36"></csIcon>
         <span>clothesfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="album" :size="36"></csIcon>
         <span>album</span>
      </div>
      <div class="iconItem">
         <csIcon name="communityfill" :size="36"></csIcon>
         <span>communityfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="babyfill" :size="36"></csIcon>
         <span>babyfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="creativefill" :size="36"></csIcon>
         <span>creativefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="brandfill" :size="36"></csIcon>
         <span>brandfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="cut" :size="36"></csIcon>
         <span>cut</span>
      </div>
      <div class="iconItem">
         <csIcon name="attentionforbid" :size="36"></csIcon>
         <span>attentionforbid</span>
      </div>
      <div class="iconItem">
         <csIcon name="deliver_fill" :size="36"></csIcon>
         <span>deliver_fill</span>
      </div>
      <div class="iconItem">
         <csIcon name="bad" :size="36"></csIcon>
         <span>bad</span>
      </div>
      <div class="iconItem">
         <csIcon name="edit" :size="36"></csIcon>
         <span>edit</span>
      </div>
      <div class="iconItem">
         <csIcon name="brand" :size="36"></csIcon>
         <span>brand</span>
      </div>
      <div class="iconItem">
         <csIcon name="dianhua" :size="36"></csIcon>
         <span>dianhua</span>
      </div>
      <div class="iconItem">
         <csIcon name="camera" :size="36"></csIcon>
         <span>camera</span>
      </div>
      <div class="iconItem">
         <csIcon name="down" :size="36"></csIcon>
         <span>down</span>
      </div>
      <div class="iconItem">
         <csIcon name="barcode" :size="36"></csIcon>
         <span>barcode</span>
      </div>
      <div class="iconItem">
         <csIcon name="deliver" :size="36"></csIcon>
         <span>deliver</span>
      </div>
      <div class="iconItem">
         <csIcon name="calendar1" :size="36"></csIcon>
         <span>calendar1</span>
      </div>
      <div class="iconItem">
         <csIcon name="crown" :size="36"></csIcon>
         <span>crown</span>
      </div>
      <div class="iconItem">
         <csIcon name="attentionforbidfill" :size="36"></csIcon>
         <span>attentionforbidfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="creative" :size="36"></csIcon>
         <span>creative</span>
      </div>
      <div class="iconItem">
         <csIcon name="cameraadd" :size="36"></csIcon>
         <span>cameraadd</span>
      </div>
      <div class="iconItem">
         <csIcon name="emojifill" :size="36"></csIcon>
         <span>emojifill</span>
      </div>
      <div class="iconItem">
         <csIcon name="appreciatefill" :size="36"></csIcon>
         <span>appreciatefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="ellipse" :size="36"></csIcon>
         <span>ellipse</span>
      </div>
      <div class="iconItem">
         <csIcon name="backdelete" :size="36"></csIcon>
         <span>backdelete</span>
      </div>
      <div class="iconItem">
         <csIcon name="discover" :size="36"></csIcon>
         <span>discover</span>
      </div>
      <div class="iconItem">
         <csIcon name="camerafill1" :size="36"></csIcon>
         <span>camerafill1</span>
      </div>
      <div class="iconItem">
         <csIcon name="evaluate_fill" :size="36"></csIcon>
         <span>evaluate_fill</span>
      </div>
      <div class="iconItem">
         <csIcon name="cameraaddfill" :size="36"></csIcon>
         <span>cameraaddfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="delete" :size="36"></csIcon>
         <span>delete</span>
      </div>
      <div class="iconItem">
         <csIcon name="cardboard" :size="36"></csIcon>
         <span>cardboard</span>
      </div>
      <div class="iconItem">
         <csIcon name="exit" :size="36"></csIcon>
         <span>exit</span>
      </div>
      <div class="iconItem">
         <csIcon name="card" :size="36"></csIcon>
         <span>card</span>
      </div>
      <div class="iconItem">
         <csIcon name="favorfill" :size="36"></csIcon>
         <span>favorfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="cardboardforbid" :size="36"></csIcon>
         <span>cardboardforbid</span>
      </div>
      <div class="iconItem">
         <csIcon name="emoji" :size="36"></csIcon>
         <span>emoji</span>
      </div>
      <div class="iconItem">
         <csIcon name="check" :size="36"></csIcon>
         <span>check</span>
      </div>
      <div class="iconItem">
         <csIcon name="discoverfill" :size="36"></csIcon>
         <span>discoverfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="cardboardfill" :size="36"></csIcon>
         <span>cardboardfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="female" :size="36"></csIcon>
         <span>female</span>
      </div>
      <div class="iconItem">
         <csIcon name="cascades" :size="36"></csIcon>
         <span>cascades</span>
      </div>
      <div class="iconItem">
         <csIcon name="explorefill" :size="36"></csIcon>
         <span>explorefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="camerarotate" :size="36"></csIcon>
         <span>camerarotate</span>
      </div>
      <div class="iconItem">
         <csIcon name="filter" :size="36"></csIcon>
         <span>filter</span>
      </div>
      <div class="iconItem">
         <csIcon name="choicenessfill" :size="36"></csIcon>
         <span>choicenessfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="emojiflashfill" :size="36"></csIcon>
         <span>emojiflashfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="choiceness" :size="36"></csIcon>
         <span>choiceness</span>
      </div>
      <div class="iconItem">
         <csIcon name="evaluate" :size="36"></csIcon>
         <span>evaluate</span>
      </div>
      <div class="iconItem">
         <csIcon name="circle" :size="36"></csIcon>
         <span>circle</span>
      </div>
      <div class="iconItem">
         <csIcon name="flashlightopen" :size="36"></csIcon>
         <span>flashlightopen</span>
      </div>
      <div class="iconItem">
         <csIcon name="attentionfavor" :size="36"></csIcon>
         <span>attentionfavor</span>
      </div>
      <div class="iconItem">
         <csIcon name="copy" :size="36"></csIcon>
         <span>copy</span>
      </div>
      <div class="iconItem">
         <csIcon name="btn" :size="36"></csIcon>
         <span>btn</span>
      </div>
      <div class="iconItem">
         <csIcon name="expressman" :size="36"></csIcon>
         <span>expressman</span>
      </div>
      <div class="iconItem">
         <csIcon name="cart" :size="36"></csIcon>
         <span>cart</span>
      </div>
      <div class="iconItem">
         <csIcon name="file1" :size="36"></csIcon>
         <span>file1</span>
      </div>
      <div class="iconItem">
         <csIcon name="cartfill" :size="36"></csIcon>
         <span>cartfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="explore" :size="36"></csIcon>
         <span>explore</span>
      </div>
      <div class="iconItem">
         <csIcon name="word" :size="36"></csIcon>
         <span>word</span>
      </div>
      <div class="iconItem">
         <csIcon name="form" :size="36"></csIcon>
         <span>form</span>
      </div>
      <div class="iconItem">
         <csIcon name="people" :size="36"></csIcon>
         <span>people</span>
      </div>
      <div class="iconItem">
         <csIcon name="flashbuyfill" :size="36"></csIcon>
         <span>flashbuyfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="flashlightclose" :size="36"></csIcon>
         <span>flashlightclose</span>
      </div>
      <div class="iconItem">
         <csIcon name="forwardfill" :size="36"></csIcon>
         <span>forwardfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="friendaddfill" :size="36"></csIcon>
         <span>friendaddfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="fork" :size="36"></csIcon>
         <span>fork</span>
      </div>
      <div class="iconItem">
         <csIcon name="crownfill" :size="36"></csIcon>
         <span>crownfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="focus" :size="36"></csIcon>
         <span>focus</span>
      </div>
      <div class="iconItem">
         <csIcon name="favvor" :size="36"></csIcon>
         <span>favvor</span>
      </div>
      <div class="iconItem">
         <csIcon name="footprint" :size="36"></csIcon>
         <span>footprint</span>
      </div>
      <div class="iconItem">
         <csIcon name="friendfill" :size="36"></csIcon>
         <span>friendfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="friend" :size="36"></csIcon>
         <span>friend</span>
      </div>
      <div class="iconItem">
         <csIcon name="formfill" :size="36"></csIcon>
         <span>formfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="fold" :size="36"></csIcon>
         <span>fold</span>
      </div>
      <div class="iconItem">
         <csIcon name="friendfavor" :size="36"></csIcon>
         <span>friendfavor</span>
      </div>
      <div class="iconItem">
         <csIcon name="friendadd" :size="36"></csIcon>
         <span>friendadd</span>
      </div>
      <div class="iconItem">
         <csIcon name="forward" :size="36"></csIcon>
         <span>forward</span>
      </div>
      <div class="iconItem">
         <csIcon name="github" :size="36"></csIcon>
         <span>github</span>
      </div>
      <div class="iconItem">
         <csIcon name="goodsfavor" :size="36"></csIcon>
         <span>goodsfavor</span>
      </div>
      <div class="iconItem">
         <csIcon name="goodsnewfill" :size="36"></csIcon>
         <span>goodsnewfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="goods" :size="36"></csIcon>
         <span>goods</span>
      </div>
      <div class="iconItem">
         <csIcon name="goodsfill" :size="36"></csIcon>
         <span>goodsfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="home2" :size="36"></csIcon>
         <span>home2</span>
      </div>
      <div class="iconItem">
         <csIcon name="game" :size="36"></csIcon>
         <span>game</span>
      </div>
      <div class="iconItem">
         <csIcon name="friendfamous" :size="36"></csIcon>
         <span>friendfamous</span>
      </div>
      <div class="iconItem">
         <csIcon name="full" :size="36"></csIcon>
         <span>full</span>
      </div>
      <div class="iconItem">
         <csIcon name="group_fill" :size="36"></csIcon>
         <span>group_fill</span>
      </div>
      <div class="iconItem">
         <csIcon name="homefill" :size="36"></csIcon>
         <span>homefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="goodsnew" :size="36"></csIcon>
         <span>goodsnew</span>
      </div>
      <div class="iconItem">
         <csIcon name="hot" :size="36"></csIcon>
         <span>hot</span>
      </div>
      <div class="iconItem">
         <csIcon name="hotfill" :size="36"></csIcon>
         <span>hotfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="global" :size="36"></csIcon>
         <span>global</span>
      </div>
      <div class="iconItem">
         <csIcon name="info" :size="36"></csIcon>
         <span>info</span>
      </div>
      <div class="iconItem">
         <csIcon name="infofill" :size="36"></csIcon>
         <span>infofill</span>
      </div>
      <div class="iconItem">
         <csIcon name="light" :size="36"></csIcon>
         <span>light</span>
      </div>
      <div class="iconItem">
         <csIcon name="lightfill" :size="36"></csIcon>
         <span>lightfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="keyboard" :size="36"></csIcon>
         <span>keyboard</span>
      </div>
      <div class="iconItem">
         <csIcon name="likefill" :size="36"></csIcon>
         <span>likefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="group" :size="36"></csIcon>
         <span>group</span>
      </div>
      <div class="iconItem">
         <csIcon name="lightforbid" :size="36"></csIcon>
         <span>lightforbid</span>
      </div>
      <div class="iconItem">
         <csIcon name="icon" :size="36"></csIcon>
         <span>icon</span>
      </div>
      <div class="iconItem">
         <csIcon name="icloading" :size="36"></csIcon>
         <span>icloading</span>
      </div>
      <div class="iconItem">
         <csIcon name="lightauto" :size="36"></csIcon>
         <span>lightauto</span>
      </div>
      <div class="iconItem">
         <csIcon name="loading1" :size="36"></csIcon>
         <span>loading1</span>
      </div>
      <div class="iconItem">
         <csIcon name="link" :size="36"></csIcon>
         <span>link</span>
      </div>
      <div class="iconItem">
         <csIcon name="list" :size="36"></csIcon>
         <span>list</span>
      </div>
      <div class="iconItem">
         <csIcon name="like" :size="36"></csIcon>
         <span>like</span>
      </div>
      <div class="iconItem">
         <csIcon name="locationfill" :size="36"></csIcon>
         <span>locationfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="location1" :size="36"></csIcon>
         <span>location1</span>
      </div>
      <div class="iconItem">
         <csIcon name="loading2" :size="36"></csIcon>
         <span>loading2</span>
      </div>
      <div class="iconItem">
         <csIcon name="lock1" :size="36"></csIcon>
         <span>lock1</span>
      </div>
      <div class="iconItem">
         <csIcon name="markfill" :size="36"></csIcon>
         <span>markfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="countdownfill" :size="36"></csIcon>
         <span>countdownfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="mail" :size="36"></csIcon>
         <span>mail</span>
      </div>
      <div class="iconItem">
         <csIcon name="medal" :size="36"></csIcon>
         <span>medal</span>
      </div>
      <div class="iconItem">
         <csIcon name="medalfill" :size="36"></csIcon>
         <span>medalfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="message" :size="36"></csIcon>
         <span>message</span>
      </div>
      <div class="iconItem">
         <csIcon name="mark" :size="36"></csIcon>
         <span>mark</span>
      </div>
      <div class="iconItem">
         <csIcon name="mobile" :size="36"></csIcon>
         <span>mobile</span>
      </div>
      <div class="iconItem">
         <csIcon name="magic" :size="36"></csIcon>
         <span>magic</span>
      </div>
      <div class="iconItem">
         <csIcon name="loading3" :size="36"></csIcon>
         <span>loading3</span>
      </div>
      <div class="iconItem">
         <csIcon name="mobilefill" :size="36"></csIcon>
         <span>mobilefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="deletefill" :size="36"></csIcon>
         <span>deletefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="more" :size="36"></csIcon>
         <span>more</span>
      </div>
      <div class="iconItem">
         <csIcon name="moreandroid" :size="36"></csIcon>
         <span>moreandroid</span>
      </div>
      <div class="iconItem">
         <csIcon name="moneybagfill" :size="36"></csIcon>
         <span>moneybagfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="myfill" :size="36"></csIcon>
         <span>myfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="moneybag" :size="36"></csIcon>
         <span>moneybag</span>
      </div>
      <div class="iconItem">
         <csIcon name="messagefill" :size="36"></csIcon>
         <span>messagefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="my" :size="36"></csIcon>
         <span>my</span>
      </div>
      <div class="iconItem">
         <csIcon name="move" :size="36"></csIcon>
         <span>move</span>
      </div>
      <div class="iconItem">
         <csIcon name="musicfill" :size="36"></csIcon>
         <span>musicfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="male" :size="36"></csIcon>
         <span>male</span>
      </div>
      <div class="iconItem">
         <csIcon name="news1" :size="36"></csIcon>
         <span>news1</span>
      </div>
      <div class="iconItem">
         <csIcon name="newshotfill" :size="36"></csIcon>
         <span>newshotfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="newshot" :size="36"></csIcon>
         <span>newshot</span>
      </div>
      <div class="iconItem">
         <csIcon name="notice_forbid_fill" :size="36"></csIcon>
         <span>notice_forbid_fill</span>
      </div>
      <div class="iconItem">
         <csIcon name="newsfill" :size="36"></csIcon>
         <span>newsfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="new" :size="36"></csIcon>
         <span>new</span>
      </div>
      <div class="iconItem">
         <csIcon name="musicforbidfill" :size="36"></csIcon>
         <span>musicforbidfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="noticefill" :size="36"></csIcon>
         <span>noticefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="notificationforbidfill" :size="36"></csIcon>
         <span>notificationforbidfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="newfill" :size="36"></csIcon>
         <span>newfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="notificationfill" :size="36"></csIcon>
         <span>notificationfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="paintfill" :size="36"></csIcon>
         <span>paintfill</span>
      </div>
      <div class="iconItem">
         <csIcon name="peoplefill" :size="36"></csIcon>
         <span>peoplefill</span>
      </div>
      <div class="iconItem">
         <csIcon name="wallet" :size="36"></csIcon>
         <span>wallet</span>
      </div>
      <div class="iconItem">
         <csIcon name="share" :size="36"></csIcon>
         <span>share</span>
      </div>
      <div class="iconItem">
         <csIcon name="news" :size="36"></csIcon>
         <span>news</span>
      </div>
      <div class="iconItem">
         <csIcon name="search" :size="36"></csIcon>
         <span>search</span>
      </div>
      <div class="iconItem">
         <csIcon name="setting" :size="36"></csIcon>
         <span>setting</span>
      </div>
      <div class="iconItem">
         <csIcon name="calendar" :size="36"></csIcon>
         <span>calendar</span>
      </div>
      <div class="iconItem">
         <csIcon name="ticket" :size="36"></csIcon>
         <span>ticket</span>
      </div>
      <div class="iconItem">
         <csIcon name="voice" :size="36"></csIcon>
         <span>voice</span>
      </div>
      <div class="iconItem">
         <csIcon name="collect" :size="36"></csIcon>
         <span>collect</span>
      </div>
      <div class="iconItem">
         <csIcon name="close_line" :size="36"></csIcon>
         <span>close_line</span>
      </div>
      <div class="iconItem">
         <csIcon name="label" :size="36"></csIcon>
         <span>label</span>
      </div>
      <div class="iconItem">
         <csIcon name="shopCart" :size="36"></csIcon>
         <span>shopCart</span>
      </div>
      <div class="iconItem">
         <csIcon name="location" :size="36"></csIcon>
         <span>location</span>
      </div>
      <div class="iconItem">
         <csIcon name="menu" :size="36"></csIcon>
         <span>menu</span>
      </div>
      <div class="iconItem">
         <csIcon name="history" :size="36"></csIcon>
         <span>history</span>
      </div>
      <div class="iconItem">
         <csIcon name="lock" :size="36"></csIcon>
         <span>lock</span>
      </div>
      <div class="iconItem">
         <csIcon name="notice" :size="36"></csIcon>
         <span>notice</span>
      </div>
      <div class="iconItem">
         <csIcon name="file" :size="36"></csIcon>
         <span>file</span>
      </div>
      <div class="iconItem">
         <csIcon name="mike" :size="36"></csIcon>
         <span>mike</span>
      </div>
      <div class="iconItem">
         <csIcon name="_close_simple" :size="36"></csIcon>
         <span>_close_simple</span>
      </div>
      <div class="iconItem">
         <csIcon name="_next" :size="36"></csIcon>
         <span>_next</span>
      </div>
      <div class="iconItem">
         <csIcon name="_voice" :size="36"></csIcon>
         <span>_voice</span>
      </div>
      <div class="iconItem">
         <csIcon name="_select_square" :size="36"></csIcon>
         <span>_select_square</span>
      </div>
      <div class="iconItem">
         <csIcon name="_unSelect_square" :size="36"></csIcon>
         <span>_unSelect_square</span>
      </div>
      <div class="iconItem">
         <csIcon name="_unSelect_round" :size="36"></csIcon>
         <span>_unSelect_round</span>
      </div>
      <div class="iconItem">
         <csIcon name="_select_round" :size="36"></csIcon>
         <span>_select_round</span>
      </div>
      <div class="iconItem">
         <csIcon name="numberKeyboard_collapse" :size="36"></csIcon>
         <span>numberKeyboard_collapse</span>
      </div>
      <div class="iconItem">
         <csIcon name="close" :size="36"></csIcon>
         <span>close</span>
      </div>
      <div class="iconItem">
         <csIcon name="numberKeyboard_delete" :size="36"></csIcon>
         <span>numberKeyboard_delete</span>
      </div>
      <div class="iconItem">
         <csIcon name="loading" :size="36"></csIcon>
         <span>loading</span>
      </div>
      <div class="iconItem">
         <csIcon name="tishi" :size="36"></csIcon>
         <span>tishi</span>
      </div>
      <div class="iconItem">
         <csIcon name="bofang" :size="36"></csIcon>
         <span>bofang</span>
      </div>
      <div class="iconItem">
         <csIcon name="fanhui" :size="36"></csIcon>
         <span>fanhui</span>
      </div>
      <div class="iconItem">
         <csIcon name="fenxiang" :size="36"></csIcon>
         <span>fenxiang</span>
      </div>
   </div>   
:::