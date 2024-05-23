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

            <el-input
              class="el-input"
              placeholder="请输入姓名"
              type="text"
            
              v-model="name"
              clearable
            >
            </el-input>
          </div>
          <div class="form-list display-flex">
            <div class="left-lable">身份证号</div>

            <el-input
              class="el-input"
              placeholder="请输入身份证号"
              type="text"
            
              v-model="identity"
              clearable
              maxlength="18"
            >
            </el-input>
          </div>
           <el-radio-group v-model="type">
    <el-radio label="1"  @change="handleRadioChanges()">上班</el-radio>
    <el-radio label="2" @change="handleRadioChanges()">个体户</el-radio>
    <el-radio label="3" @change="handleRadioChanges()">有限公司</el-radio>
  </el-radio-group>
        </div>
        <div class="next-step">
          <el-button type="primary" @click="goFormList">下一步</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { reqAddClient } from "@/api/website";
export default {
  data() {
    return {
         name: "",
        identity: "",
      type:''
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
      if (!this.identity) {
        this.$message.error("请输入您的身份证号");
        return;
      }
       if (!this.type) {
        this.$message.error("请选择您的身份性质");
        return;
      }
      if (this.name && this.identity && this.type) {
        this.addClient();
      }
    },
handleRadioChanges(){
  console.log(this.type);
},
    async addClient() {
      try {
        // console.log(111);
        const result = await reqAddClient({name:this.name,identity:this.identity,type:this.type});

        this.$router.push({ path: '/formList', query: { type: this.type } });
      } catch (error) {
        
        return;
      }
    },
  },
  created() {},

  destroyed() {},
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 480px) {
  html {
    font-size: 28px !important;
  }
}
@media only screen and (min-width: 414px) {
  html {
    font-size: 25px !important;
  }
}
@media only screen and (min-width: 400px) {
  html {
    font-size: 23px !important;
  }
}
html {
  font-size: 25px;
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
  font-size: 28px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 88px;
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
  font-size: 30px;
  color: #fff;
}
.form-wrap {
  // width: 539px;
  // height: 582px;
  padding: 26px;
  font-size: 25px;
  color: #333;
  margin-top: 30px;
  // background-color: #ff0000;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
}
.form-list {
  margin-top: 50px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  font-size: 30px;
}
.form-list .el-input {
  width: 500px;
  margin-left: 20px;
}
::v-deep .el-input--suffix .el-input__inner {
    height: 70px;
    font-size: 29px;
}
::v-deep .el-radio-group{
margin-top: 40px;
}
::v-deep .el-radio__label{
font-size: 29px;

}
::v-deep .el-radio{
  margin-left: 70px;
}
::v-deep .el-radio__inner {
  width: 30px;
  height: 30px;
}
::v-deep .el-radio__input{
  line-height: 2;
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
  font-size: 25px;
}
// :deep(.el-input--medium .el-input__inner) {
//   height: 50px;
//   font-size: 18px;
// }
.next-step {
  position: fixed;
  top: 550px;
  left: 50%;
  transform: translate(-50%, 0);
  // padding: 2px 28px 0;
}
.next-step button {
  width: 80vw;
  height: 80px;
  line-height: 46px;
  font-size: 27px;
  font-weight: bold;
  border-radius: 4px;
  color: #fff;
  border: none;
  background: rgba(64, 158, 255, 1);
}
</style>
