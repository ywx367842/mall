<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="isActive ? { color: activeColor } : {}">
      <slot name="item-text"></slot>
    </div>
  </div>
  <!-- <div class="tab-bar-item">分类</div>
    <div class="tab-bar-item">购物车</div>
    <div class="tab-bar-item">我的</div> -->
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      console.log("itemClick");
      this.$router.push(this.path);
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;

  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  /* margin-bottom: 2px; */
  vertical-align: center;
}

/* .active {
  color: red;
} */
</style>
