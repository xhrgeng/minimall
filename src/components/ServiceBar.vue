<!--  -->
<template>
  <div class="service">
    <div class="container">
        <ul>
            <li><span class="icon-setting"></span>预约维修服务</li>
            <li><span class="icon-7day"></span>7天无理由退货</li>
            <li><span class="icon-15day"></span>15天免费换货"</li>
            <li><span class="icon-post"></span>包邮</li>
        </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "service-bar",
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
@import './../assets/scss/mixin.scss';
.service{
    padding:33px 0;
    color: #666666;
    font-size:16px;
    li{
        display: inline-block;
        width:24.8%;
        text-align: center;
        border-right:1px solid #E5E5E5;
        span{
            display: inline-block;
            width:20px;
            height:20px;
            vertical-align: middle;
            margin-right:8px;
        }
        .icon-setting{
            @include bgImg(20px,20px,'/imgs/icon-setting.png');
            
        }
        .icon-7day{
            @include bgImg(20px,20px,'/imgs/icon-7day.png');
            
        }
        .icon-15day{
            @include bgImg(20px,20px,'/imgs/icon-15day.png');
            
        }
        .icon-post{
            @include bgImg(20px,20px,'/imgs/icon-post.png');
            
        }
    }
}
</style>