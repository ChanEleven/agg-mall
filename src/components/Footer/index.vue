<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-list">
        <div class="footer-item">
          <h4>购物指南</h4>
          <ul class="footerItemCon">
            <li>购物流程</li>
            <li>会员介绍</li>
            <li>生活旅行/团购</li>
            <li>常见问题</li>
            <li>购物指南</li>
          </ul>
        </div>
        <div class="footer-item">
          <h4>配送方式</h4>
          <ul class="dt">
            <li>上门自提</li>
            <li>211限时达</li>
            <li>配送服务查询</li>
            <li>配送费收取标准</li>
            <li>海外配送</li>
          </ul>
        </div>
        <div class="footer-item">
          <h4>支付方式</h4>
          <ul class="dt">
            <li>货到付款</li>
            <li>在线支付</li>
            <li>分期付款</li>
            <li>邮局汇款</li>
            <li>公司转账</li>
          </ul>
        </div>
        <div class="footer-item">
          <h4>售后服务</h4>
          <ul class="dt">
            <li>售后政策</li>
            <li>价格保护</li>
            <li>退款说明</li>
            <li>返修/退换货</li>
            <li>取消订单</li>
          </ul>
        </div>
        <div class="footer-item">
          <h4>特色服务</h4>
          <ul class="dt">
            <li>夺宝岛</li>
            <li>DIY装机</li>
            <li>延保服务</li>
            <li>尚品汇E卡</li>
            <li>尚品汇通信</li>
          </ul>
        </div>
        <div class="footer-item">
          <h4>帮助中心</h4>
          <img src="./images/wx_cz.jpg" />
        </div>
      </div>
      <div class="copyright">
        <ul class="helpLink">
          <li>关于我们</li>
          <li>联系我们</li>
          <li>关于我们</li>
          <li>商家入驻</li>
          <li>营销中心</li>
          <li>友情链接</li>
          <li>关于我们</li>
          <li>营销中心</li>
          <li>友情链接</li>
          <li>关于我们</li>
        </ul>
        <p>地址：北京市昌平区宏福科技园综合楼6层</p>
        <p>京ICP备19006430号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data: function () {
    return {};
  },
};
</script>
<style lang="less" scoped>
.footer {
  background-color: #eaeaea;
  &-container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    .copyright {
      padding: 20px;
      .helpLink {
        text-align: center;
        li {
          display: inline-block;
          border-right: 1px solid #666;
          height: 16px;
          line-height:16px;
          margin-right:10px;
          padding-right:10px;
          box-sizing: content-box;
        }
        li:last-child{
          margin-right:0;
          border:none;
        }
      }
      p {
        margin: 10px 0;
        text-align: center;
      }
    }
  }
  &-list {
    display: flex;
    flex-direction: row;
    padding: 20px;
    border-bottom: 1px solid #e4e1e1;
    border-top: 1px solid #e4e1e1;
    overflow: hidden;
    padding-left: 40px;
  }
  &-item {
    flex: 1;
    h4 {
      font-size: 14px;
    }
    li {
      line-height: 18px;
    }
  }
  &-item:last-child img {
    width: 121px;
  }
}
</style>
