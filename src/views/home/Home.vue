<template>
  <div>
    <h2>首页</h2>
    <button @click="buttonClick">点击</button>
    <h1 style="text-align:center">{{ font }}</h1>
    <!-- <h1 style="text-align:center">{{ pronunciation }}</h1> -->
    <div>
      <button @click="isShow = !isShow">切换</button>
      <h1 v-show="isShow" style="text-align:center">
        发音：{{ pronunciations[currentIndex] }}
      </h1>
    </div>
  </div>
</template>

<script>
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

export default {
  name: "home",
  data() {
    return {
      isShow: true,
      str:
        "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ",
      pronunciations: [
        "a",
        "i",
        "u",
        "e",
        "o",
        "ka",
        "ki",
        "ku",
        "ke",
        "ko",
        "sa",
        "si",
        "su",
        "se",
        "so",
        "ta",
        "ti",
        "tu",
        "te",
        "to",
        "na",
        "ni",
        "nu",
        "ne",
        "no",
        "ha",
        "hi",
        "hu",
        "he",
        "ho",
        "ma",
        "mi",
        "mu",
        "me",
        "mo",
        "ya",
        "yu",
        "yo",
        "ra",
        "ri",
        "ru",
        "re",
        "ro",
        "wa",
        "wo",
        "n",
        "ga",
        "gi",
        "gu",
        "ge",
        "go",
        "za",
        "zi",
        "zu",
        "ze",
        "zo",
        "da",
        "di",
        "du",
        "de",
        "do",
        "ba",
        "bi",
        "bu",
        "be",
        "bo",
        "pa",
        "pi",
        "pu",
        "pe",
        "po"
      ],

      font: "1",
      currentIndex: 0
    };
  },
  computed: {
    strs() {
      return this.str.split("");
    },
    pronunciation() {
      return this.pronunciations[this.currentIndex];
    }
  },
  methods: {
    buttonClick() {
      console.log(this.pronunciations.length);
      this.currentIndex = randomNum(0, 70);
      console.log(this.currentIndex, this.strs[this.currentIndex]);
      this.font = this.strs[this.currentIndex];
    }
  }
};
</script>

<style></style>
