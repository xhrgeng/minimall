<!--  -->
<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascripet:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
            <a href="javascripet:;" class="btn" v-if='btnType==1' @click="$emit('submit')">{{sureText}}</a>
            <a href="javascripet:;" class="btn" v-if='btnType==2' @click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-group" v-if="btnType==3">  
            <a href="javascripet:;" class="btn"  @click="$emit('submit')">{{sureText}}</a>
            <a href="javascripet:;" class="btn btn-default"  @click="$emit('cancel')">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "modal",
  props: {
    //弹框类型
    modalType: {
      type: String,
      default: "form"
    },
    //弹框标题
    title: String,
    //按钮类型：
    btnType: String,
    sureText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    showModal: Boolean
  },
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {}
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/modal.scss";
</style>