<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      this.keywords = res.data.keywords;
      this.dKeyword = res.data.dKeyword;
    });
  },
  data() {
    return {
      banners: [],
      recommends: [],
      keywords: {},
      dKeyword: {}
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
