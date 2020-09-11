# Popup 弹出层

----

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示
<div>显示popup</div

<script>
export default {
    data() {
      return {
        isShow: false
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    }
  }
</script>