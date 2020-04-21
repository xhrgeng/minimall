<!--  -->
<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
    
        <div class="footer-link">
            <a href="https://privacy.mi.com/all/zh_CN/" target="_blank"> 小米集团隐私政策</a><span>|</span>
            <a href="https://www.miui.com/" target="_blank">MIUI</a><span>|</span>
            <a href="https://home.mi.com/index.html" target="_blank">米家</a><span>|</span>
            <a href="http://www.miliao.com/" target="_blank">米聊</a>  <span>|</span>
        </div>
        <div class="copyright">© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'nav-header',
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
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
.footer{
    height:234px;
    border-top:4px solid #FF6600;
    background-color: #333333;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-logo{
        margin-top:46px;
        margin-bottom:31px;
        img{
            width:33px;
            height:36px;
            margin-bottom:13px;
        }
    }
    .footer-link{
        a{
            color:#999999;
            display: inline-block;

        }
        span{
           margin: 0 10px;
        }
        margin-bottom:13px;
    }
}

</style>   