# Popup 弹出层



   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csPopup } from 'circles-ui';

       Vue.use(csPopup);
   ```

## 代码演示

### 基础用法
   > 通过 `v-model` 控制弹出层是否展示。
   ```html
      <cs-button type="primary" text="展示弹出层" @click="showPopup"></cs-button>
      <cs-popup v-model="isShow">
          <div style="height: 2.4rem">内容</div>
      </cs-popup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            showPopup() {
                this.isShow = true
            }
        }
      }
   ```    