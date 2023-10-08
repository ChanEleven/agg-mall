<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all">商品全部分类</h2>
      <nav class="nav">
        <a href="">服装城</a>
        <a href="">美妆馆</a>
        <a href="">超市</a>
        <a href="">全球购</a>
        <a href="">团购</a>
        <a href="">秒杀</a>
      </nav>
      <ul class="list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "typeNav",
  data: function () {
    return {};
  },
};
</script>
<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;
  .container {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;
    .all {
      height: 45px;
      line-height: 45px;
      width: 215px;
      text-align: center;
      background-color: #e1251b;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }
    nav {
      a {
        display: inline-block;
        text-align: center;
        height: 45px;
        line-height: 45px;
        margin: 0 22px;
        font-size: 16px;
        color: #333;
      }
    }
  }
}
</style>
