<template>
  <div class="header">
    <div class="top">
      <div class="top-container">
        <div class="top-left">
          <span>欢迎你！</span>
          <span>请</span>
          <router-link to="/login">登录</router-link>

          <router-link to="/register">免费注册</router-link>
        </div>
        <div class="top-right">
          <a href="">我的订单</a>
          <a href="">我的购物车</a>
          <a href="">首页</a>
          <a href="">企业合作</a>
          <a href="">商家后台</a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="logo-area">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </div>
      <div class="search-area">
        <input type="text" v-model="search" />
        <button class="button" @click="goSearch">搜索</button>
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
  methods: {
    goSearch() {},
  },
};
</script>
<style lang="less" scoped>
.header {
  .top {
    height: 30px;
    line-height: 30px;
    background-color: #eaeaea;
    &-container {
      display: flex;
      justify-content: space-between;
      width: 1200px;
      margin: 0 auto;
    }
    &-left {
      span {
        margin-right: 5px;
      }
      a {
        margin-right: 5px;
      }
      a + a {
        border-left: 1px solid #b3aeae;
        padding-left: 5px;
      }
    }
    &-right {
      a {
        padding: 0 10px;
      }
      a + a {
        border-left: 1px solid #b3aeae;
      }
    }
  }
  .bottom {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo-area {
      img {
        width: 175px;
        margin: 25px 45px;
      }
    }
    .search-area {
      input {
        width: 490px;
        height: 32px;
        box-sizing: border-box;
        padding: 0 4px;
        border: 2px solid #ea4a36;
      }
      input:focus {
        outline: none;
      }
      button {
        height: 32px;
        width: 68px;
        background-color: #ea4a36;
        border: none;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
