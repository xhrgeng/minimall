<!--  -->
<template>
<div class="no-data">
    <img src="/imgs/icon-no-data.png" alt="">
    <p>当前暂无递交的订单记录</p>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'no-data',
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.no-data{
text-align: center;
font-size:20px;
color:#999999;
margin:50px 0;
    img{
        width:240px;
        height:180px;
        margin-bottom: 30px;
    }
}
</style>