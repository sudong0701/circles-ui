# Skeleton 骨架屏
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csSkeleton } from 'circles-ui';

       Vue.use(csSkeleton);
   ```
:::


## 代码演示

:::card
### 基础用法
> 通过 `title` 属性显示标题占位图，通过 `row` 属性配置占位段落行数

   ```html
    <csSkeleton title row="3"></csSkeleton>
   ```
:::

:::card
### 配置各列宽度
> 通过 `rowWidth` 属性可以配置各列的宽度，各列默认为100%

   ```html
    <csSkeleton title row="3" :rowWidth="rowWidth"></csSkeleton>
   ```
   ```js
   export default {
        name: '',
        data() {
            return {
                rowWidth: [100, 80 , 60]
            }
        }
    }
   ```
:::

:::card
### 显示头像
> 通过 `avatar` 属性可以在左侧显示头像，通过 `avatarShape` 属性可以控制头像的形状

   ```html
    <csSkeleton title row="3" avatar :rowWidth="rowWidth"></csSkeleton>
   ```
   ```js
   export default {
        name: '',
        data() {
            return {
                rowWidth: [100, 80 , 60]
            }
        }
    }
   ```
:::

:::card
### 展示子组件
> 将 `loading` 属性设置成 `false` 表示内容加载完成，此时会隐藏占位图，并显示 `Skeleton` 的子组件

   ```html
    <div class="button-demo-content">
        <cs-switch v-model="isShow" size="0.48rem" style="margin-bottom: 0.2rem"></cs-switch>
        <csSkeleton title row="3" avatar :rowWidth="rows" :isLoad="!isShow">
            <div class="content">
                <div class="left">
                    <img src="https://avatars1.githubusercontent.com/u/46431309?s=460&u=097881d30353d77d9c135db0cd5a7f07c90589a4&v=4" alt="">
                </div>
                <div class="right">
                    <div class="title">春江花月夜</div>
                    <div class="list">
                        <div class="item">春江潮水连海平，海上明月共潮生。</div>
                        <div class="item">滟滟随波千万里，何处春江无月明。</div>
                        <div class="item">江流宛转绕芳甸</div>
                    </div>
                </div>
            </div>
        </csSkeleton>
    </div>
   ```
   ```js
   export default {
        name: '',
        data() {
            return {
                isShow: false,
                rows: [100, 100, 50]
            }
        }
    }
   ```
   ```css
   .button-demo-content {
            /deep/ .content {
                display: flex;
                flex-direction: row;
                .left {
                    margin-right: 0.32rem;
                    img {
                        height: 0.64rem;
                        width: 0.64rem;
                        border-radius: 50%;
                    }
                }
                .right {
                    flex: 1;
                    padding-top: 0.16rem;
                    .title {
                        font-size: 0.36rem;
                        margin-bottom: 0.2rem;
                    }
                    .list {
                        .item {
                            font-size: 0.3rem;
                            margin-bottom: 0.2rem;
                        }
                        .item:nth-last-child(1) {
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }
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
<script>
export default {
  data () {
    return {
      apiData: [{
                  name: 'isLoad',
                  remake: '是否显示骨架屏 false展示实际内容',
                  type: 'Boolean',
                  default: 'true'
                },
                {
                  name: 'title',
                  remake: '是否展示标题占位图',
                  type: 'Boolean',
                  default: 'false'
                },
                {
                  name: 'avatar',
                  remake: '是否展示头像占位图',
                  type: 'Boolean',
                  default: "false"
                },
                {
                  name: 'row',
                  remake: '配置占位段落行数',
                  type: 'Number | String',
                  default: "0"
                },
                {
                  name: 'rowWidth',
                  remake: '配置占位段落宽度，默认各列宽度为100%',
                  type: 'Array',
                  default: "[]"
                },
                {
                  name: 'avatarSize',
                  remake: '头像的大小，Number类型默认单位为px',
                  type: 'Number | String',
                  default: '0.64rem'
                },
                {
                  name: 'avatarShape',
                  remake: '头像的形状，可选值square(方形)，默认值为round(圆形)',
                  type: 'String',
                  default: "'round'"
                }, 
                {
                  name: 'animate',
                  remake: '骨架屏是否有轻微闪烁动画',
                  type: 'Boolean',
                  default: 'true'
                },
                ]
    }
  }
}
</script>
:::
