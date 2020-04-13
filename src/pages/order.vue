<template>
    <div>
       
        <order-header></order-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'
export default {
//import引入的组件需要注入到对象中才能使用
name:'order',
components: {
    OrderHeader,
    NavFooter
},
data() {
//这里存放数据
return {

};
},

}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>   