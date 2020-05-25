<template>
  <div>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>

import ServiceBar from "./../components/ServiceBar";
import NavFooter from "./../components/NavFooter";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "order",
  data() {
    //这里存放数据
    return {
      title: "",
      tip: ""
    };
  },

  components: {
   
    NavFooter,
    ServiceBar
  },
  mounted() {
    // let path = this.$route.path;
    // if (path == "/order/confirm") {
    //   this.title = "订单确认";
    //   this.tip = "请认真填写收货地址";
    // } else if (path == "/order/pay") {
    //   this.title = "订单列表";
    //   this.tip = "请谨防钓鱼链接或诈骗电话，了解更多";
    // } else if (path == "/order/list") {
    //   this.title = "订单支付";
    //   this.tip = "请谨防钓鱼链接或诈骗电话，了解更多";
    // }else{
    //   this.title = "订单支付";
    //   this.tip = "请谨防钓鱼链接或诈骗电话，了解更多";
    // }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>   