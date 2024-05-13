<template>
  <div>
    <!-- 第一屏 -->
    <div class="body">
      <div class="test">
        <input
          class="test-btn"
          type="button"
          value="开始测试"
          id="test"
          @click="goFirst"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {
      isdownload: false,
      islogin: false,
      iscon: false,
      // iscopyright:false
    };
  },
  mounted() {
    // this.isheight()
  },
  methods: {
    goFirst() {
      this.$router.push("/first");
    }
  },
  created() {},

  destroyed() {},
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 480px) {
  html {
    font-size: 25.6px !important;
  }
}
@media only screen and (min-width: 414px) {
  html {
    font-size: 22.08px !important;
  }
}
@media only screen and (min-width: 400px) {
  html {
    font-size: 21.33px !important;
  }
}
html {
  font-family: "Source Han Sans CN";
  font-size: 16px;
  line-height: 1.6;
}
/*通配符号让所有标签的margin和padding为0*/
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}

.body {
  font-family: HarmonyOS_Sans_SC_Black;
  width: 100%;
  background-image: url("../assets/bac1.png");
  min-width: 750px;
  // height: 100vh;
  min-height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  // max-height: calc(100vh - 39px); // 减去头部高度
  position: relative;
}

.test {
  height: 6%;
  width: 45%;
  position: absolute;
  z-index: 99;
  top: 32%;
  left: 27%;
}
.test-btn {
  height: 100%;
  width: 100%;
  background: transparent;
  border-radius: 40px;
  border-style: solid;
  border-color: #ffffff;
  font-size: 22px;
  color: #ffffff;
}
</style>
