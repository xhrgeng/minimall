<!--  -->
<template>
    <div class="nav-bar" :class="{'is_fixed':isFixed}">
        <div class="container">
            <div class="pro-title">
                {{title}}
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>a

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'nav-bar',
props:{
    title:String
},
components: {},
data() {
//这里存放数据

return {
    isFixed:false
};
},
mounted(){
    window.addEventListener('scroll',this.initHeight)
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
     initHeight(){//吸顶
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.isFixed = scrollTop > 152? true:false
    }
},
destroyed () {
     window.removeEventListener('scroll',this.initHeight,false)
}
}
</script>
<style lang='scss' scoped>
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';

//@import url(); 引入公共css类
.nav-bar{
    height:70px;
    line-height: 70px;
    border-top: 1px solid $colorH;
    background-color: $colorG;
    z-index:10;
    &.is_fixed{
        position:fixed;
        width:100%;
        top:0;
        box-shadow: 0 5px 5px $colorF;
    }
    .container{
        @include flex();
        .pro-title{
            font-size:$fontH;
            color:$colorB;
            font-weight: bold;
        }
        .pro-param{
            font-size: $fontJ;
            span{margin: 0 10px;}
            a{ color:$colorC;}
        }
    }
}
</style>