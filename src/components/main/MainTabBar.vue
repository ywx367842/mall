<template>
  <div>
    <my-tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="~static/img/tabbar/home.png" />
        <img slot="item-icon-active" src="~static/img/tabbar/home.png" />
        <div slot="item-text">首页1</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~/static/img/tabbar/category.png" />
        <img
          slot="item-icon-active"
          src="~static/img/tabbar/category_active.png"
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shoppingcart">
        <img slot="item-icon" src="~static/img/tabbar/shoppingcart.png" />
        <img
          slot="item-icon-active"
          src="~static/img/tabbar/shoppingcart.png"
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~static/img/tabbar/profile.png" />
        <img slot="item-icon-active" src="~static/img/tabbar/profile.png" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </my-tab-bar>
  </div>
</template>

<script>
import MyTabBar from "@/components/tabbar/TabBar";
import TabBarItem from "@/components/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    MyTabBar,
    TabBarItem
  }
};
</script>

<style>
@import "../../assets/css/base.css";
</style>
