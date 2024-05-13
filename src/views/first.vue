<template>
  <div>
    <!-- 第一屏 -->
    <div class="body">
      <div class="wrap">
        <!-- harder -->
        <div class="harder">
          <!--        <img class="left-icon" src="./images/return_icon.png" alt="">-->
          身份认证
        </div>
        <!-- main -->
        <div class="form-wrap">
          <div class="form-list display-flex">
            <div class="left-lable">您的姓名</div>
            <div class="right-input flex">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="请输入"
                v-model="name"
              />
            </div>
          </div>
          <div class="form-list display-flex">
            <div class="left-lable">身份证号</div>
            <div class="right-input flex">
              <input
                type="text"
                name="idcar"
                placeholder="请输入"
                id="idCard"
                v-model="idcar"
                maxlength="18"
              />
            </div>
          </div>
        </div>
        <div class="next-step">
          <button type="button" id="nextStep" @click="goFormList">
            下一步
          </button>
        </div>
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
      name: "",
      idcar: "",
    };
  },
  mounted() {
    // this.isheight()
  },
  methods: {
    goFormList() {
      if (!this.name) {
        this.$message.error("请输入您的姓名");
        return;
      }
      if (!this.idcar) {
        this.$message.error("请输入您的身份证号");
        return;
      }
      this.$router.push("/formList");
    },
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
  font-size: 20px;
  font-family: "Source Han Sans CN";
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
  width: 100%;
  min-width: 750px;
  min-height: 100vh;
  font-family: -apple-system-font, Helvetica Neue, sans-serif;
}

.wrap {
  padding-top: 50px;
  padding-bottom: 28px;
  min-height: 100%;
  background: #fff;
}
.harder {
  font-weight: bold;
  font-size: 23px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 68px;
  padding: 0 30px;
  line-height: 48px;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgb(68, 150, 231) 0%,
    rgba(64, 158, 255, 1) 100%
  );
  box-shadow: 0px 3px 5px 0px #b0b0b0;
}
.harder .title {
  font-size: 18px;
  color: #fff;
}
.form-wrap {
  // width: 539px;
  // height: 582px;
  padding: 26px;
  font-size: 18px;
  color: #333;
}
.form-list {
  margin-top: 40px;
  padding-bottom: 15px;
  border-bottom: 1px solid #999;
  margin-bottom: 20px;
  font-size: 25px;
}
.display-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.left-lable {
  min-width: 60px;
  position: relative;
}
.left-lable::after {
  content: "*";
  position: absolute;
  left: -8px;
  top: -3px;
  z-index: 9;
  color: #ff0000;
  font-weight: bold;
}
.right-input {
  padding: 0 10px;
}
.flex {
  -ms-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
}
.right-input input {
  width: 100%;
  border: none;
  text-align: center;
  text-indent: -60px;
  font-size: 23px;
}
.next-step {
  padding: 2px 28px 0;
}
.next-step button {
  width: 100%;
  height: 58px;
  line-height: 46px;
  font-size: 23px;
  font-weight: bold;
  border-radius: 4px;
  color: #fff;
  border: none;
  background: rgba(64, 158, 255, 1);
}
</style>
