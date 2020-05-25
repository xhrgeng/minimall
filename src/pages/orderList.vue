<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
            <loading v-if="loading"></loading>
          <div class="order"  v-for="(item,index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{item.createTime}}
                <span>|</span>
                {{item.receiverName}}
                <span>|</span>
                订单号：{{item.orderNo}}
                <span>|</span>
                {{item.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{item.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(order,i) in item.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img v-lazy="order.productImage" alt="" />
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{order.paoductName}}</div>
                    <div class="p-money">{{order.totalPrice + "X" + order.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="item.status == 20">
                <a href="javascript:;">{{item.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(item.orderNo)">{{item.statusDesc}}</a>
              </div>
            </div>
          </div>
          <el-pagination class="pagination"
            v-if="true"
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            :total="total"
            @current-change="handleChange"
          ></el-pagination>
          <no-data v-if="!loading && list.length==0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import OrderHeader from "./../components/OrderHeader";
import Loading from "./../components/Loading";
import NoData from "./../components/NoData";
import { Pagination } from "element-ui"


export default {
  //import引入的组件需要注入到对象中才能使用
  name: "order-list",
  components: {
    OrderHeader,
    Loading,
    NoData,
    [Pagination.name]:Pagination,
  },
 
  data() {
    return {
        loading:false,
      list: [] ,//订单列表
      pageSize:5,
      pageNum:1,
      total:0,
     
    };
  },
  mounted() {
      this.getOrderList();
  },
  methods: {
    getOrderList() {
        this.loading=true;
      this.axios.get("/orders",{
          params:{
              pageSize:5,
              pageNum:this.pageNum
          }
      }).then(res => {
          this.loading=false;
        this.list = res.list;
        this.total = res.total;
        this.loading=false;
      }).catch(()=>{
          this.loading=false;
      })
    },
    goPay(orderNo){
        this.$router.push({
            path:'/order/pay',
            query:{
                orderNo
            }
        })
    },
    handleChange(pageNum){
        this.pageNum = pageNum;
        this.getOrderList();
    },
  
   
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";

.order-list {
  .wrapper {
    background-color: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;
    .order-box {
      .order {
        @include border();
        background-color: $colorG;
        margin-bottom: 31px;
        &:last-child {
          margin-bottom: 0;
        }
        .order-title {
          @include height(74px);
          background-color: $colorK;
          padding: 0 43px;
          font-size: 16px;
          color: $colorC;
          .item-info {
            span {
              margin: 0 9px;
            }
          }
          .money {
            font-size: 26px;
            color: $colorB;
          }
        }
        .order-content {
          padding: 0 43px;
          .good-box {
            width: 88%;
            .good-list {
              display: flex;
              align-items: center;
              height: 145px;
              .good-img {
                width: 112px;
                img {
                  width: 100%;
                }
              }
              .good-name {
                font-size: 20px;
                color: $colorB;
              }
            }
          }
          .good-state {
            @include height(145px);
            font-size: 20px;
            color: $colorA;
            a {
              color: $colorA;
            }
          }
        }
      }
      .pagination {
        text-align: right;
      }
      .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
      .el-button--primary {
        color: #FFF;
        background-color: #FF6600;
        border-color: #FF6600;
    }
     
    }
  }
}
</style>   