<template>
    <div class="ali-pay">
         <loading v-if="loading"></loading>
        <div class="form" v-html="content">

        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Loading from './../components/Loading'

export default {
//import引入的组件需要注入到对象中才能使用
name:'ali-pay',
data(){
    return {
        orderId:this.$route.query.orderId,
        content:"",
        loading:true,
        cartTotalPrice:0
    }
},
components:{
      Loading
    },
mounted () {
    this.paySubmit();
},
methods:{
    paySubmit(){
        this.axios.post('/pay',{
            orderId:this.orderId,
            orderName:'小米商城',
            amount:0.01,//单位元
            payType:1,//1支付宝 2 微信
        }).then((res)=>{
            this.content = res.content;
            setTimeout(() => {
                document.forms[0].submit();
            }, 100);
        })
    }
}
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>   