<template>
  <div>
    <!-- 第一屏 -->
    <div class="body">
      <div class="wrap">
    <!-- harder -->
    <div class="harder">
<!--        <img class="left-icon" src="./images/return_icon.png" alt="">-->
        <p class="title">身份认证</p>
    </div>
    <!-- main -->
    <div class="form-wrap">
        <div class="form-list display-flex">
            <div class="left-lable">您的姓名</div>
            <div class="right-input flex">
                <input type="text" name="name" id="name" placeholder="请输入">
            </div>
        </div>
        <div class="form-list display-flex">
            <div class="left-lable">身份证号</div>
            <div class="right-input flex">
                <input type="text" name="idcar" placeholder="请输入" id="idCard" maxlength="18">
            </div>
        </div>
    </div>
    <div class="next-step">
        <button type="button" id="nextStep" @click="goFormList">下一步</button>
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
  goFormList() {
      this.$router.push('/formList');  
    },
  },
  created() {
   
  },

  destroyed() {
  
  },
};
</script>

<style lang="scss" scoped>
/*通配符号让所有标签的margin和padding为0*/
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
.body {
  font-family: HarmonyOS_Sans_SC_Black;
  width: 100%;
  // background-image: url('../assets/bac1.png');
  min-width: 750px;
  // height: 100vh;
  min-height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  // max-height: calc(100vh - 39px); // 减去头部高度
  position: relative;
}

.wrap {
    padding-top: 50px;
    padding-bottom: 28px;
    min-height: 100%;
    background: #fff;
}
.harder {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 48px;
    padding: 0 30px;
    line-height: 48px;
    text-align: center;
    background: linear-gradient(0deg, rgba(118, 4, 2, 1) 0%, rgba(221, 19, 17, 1) 100%);
    box-shadow: 0px 3px 5px 0px #B0B0B0;
}
.form-wrap {
    padding: 26px;
    font-size: 18px;
    color: #333;
}
.form-list {
    padding-bottom: 15px;
    border-bottom: 1px solid #999;
    margin-bottom: 20px;
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
    color: #FF0000;
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
    font-size: 17px;
}
.next-step {
    padding: 2px 28px 0;
}
.next-step button {
    width: 100%;
    line-height: 46px;
    font-size: 18px;
    border-radius: 4px;
    color: #fff;
    border: none;
    background: #cb0200;
}
</style>
