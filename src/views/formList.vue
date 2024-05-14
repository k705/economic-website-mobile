<template>
  <div>
    <!-- 第一屏 -->
    <div class="body">
      <div class="wrap">
        <!-- harder -->
        <div class="harder">
          <!--        <img class="left-icon" src="./images/return_icon.png" alt="">-->
          <p class="title">风险等级评测</p>
        </div>
        <!-- 单选列表 -->
        <div class="radio-lis">
          <div class="radio-wrap" id="radio2">
            <!-- <p>radioArray：{{ form.radioArray }}</p> -->
            <div v-for="(item, index) of list2" :key="index">
              <h4 class="title">2.年龄</h4>
              <el-radio-group v-model="form.radioArray[index]">
                <el-radio
                  v-for="it of item.list"
                  :key="it.id"
                  :label="it.id"
                  class="el-radio"
                  @change="handleRadioChanges(item, it.id)"
                >
                  {{ it.anames }}
                </el-radio>
              </el-radio-group>
            </div>
          </div>
          <!-- 结果：{{ reslist }} -->
        </div>

        <div class="next-step">
          <button type="button" id="submit" @click="goResult">提交评测</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { reqParameter } from "@/api/website";

export default {
  data() {
    return {
      form: {
        radioArray: [],
      },
      reslist: [],
      list2: [
        {
          id: "000",
          assessAnswer: [
            { id: "11", anames: "备选项1", pcStatus: null },
            { id: "12", anames: "备选项2", pcStatus: null },
            { id: "13", anames: "备选项3", pcStatus: null },
          ],
        },
        {
          id: "001",
          assessAnswer: [
            { id: "14", anames: "备选项4", pcStatus: 1 },
            { id: "15", anames: "备选项5", pcStatus: null },
            { id: "16", anames: "备选项6", pcStatus: null },
          ],
        },
        {
          id: "002",
          assessAnswer: [
            { id: "11", anames: "备选项1", pcStatus: null },
            { id: "12", anames: "备选项2", pcStatus: null },
            { id: "13", anames: "备选项3", pcStatus: null },
          ],
        },
      ],
    };
  },
  mounted() {
   this.addClient()
  },
  methods: {
     async addClient() {
      try {
        const result = await reqParameter();
        this.list2 =result.data.rows
      console.log( this.list2);
        // this.$router.push("/result");
      } catch (error) {
        // console.log(chalk.redBright(error));
      }
    },

    goResult() {
       
      // this.$router.push("/result");
    },
    // 赋值
    handCheck() {
      const aaa = [];
      this.list2.forEach((item, index) => {
        item.list.forEach((it) => {
          if (it.pcStatus === 1) {
            aaa.push(it.id);
          }
        });
        if (aaa.length !== index + 1) {
          aaa.push(null);
        }
      });
      this.form.radioArray = aaa;
    },
    // 取值
    handleRadioChanges(item, id) {
      this.writeText2 = item;
      this.writeText3 = id;
      item.assessAnswer.forEach((res) => {
        if (res.id === id) {
          res.pcStatus = 1;
        } else {
          res.pcStatus = 0;
        }
      });
      this.reslist.push(item);
      let newArry = this.reslist;
      //数组去重选择最后一条数据
      for (var i = 0; i < newArry.length; i++) {
        for (var j = i + 1; j < newArry.length; j++) {
          if (newArry[i].id == newArry[j].id) {
            newArry.splice(i, 1);
            j--;
          }
        }
      }
      this.reslist = newArry;
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
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Source Han Sans CN";
  font-size: 16px;
  line-height: 1.6;
}
// div {
//   display: block;
//   unicode-bidi: isolate;
// }
.body {
  width: 100%;
  min-width: 750px;
  min-height: 100vh;
}

.wrap {
  // padding-top: 50px;
  padding-bottom: 28px;
  min-height: 100%;
  background: #fff;
}
.harder {
  font-weight: bold;
  font-size: 23px;

  height: 68px;
  // position: fixed;
  // left: 0;
  // right: 0;
  // top: 0;
  z-index: 99;
  width: 100%;
  // padding: 0 30px;
  line-height: 68px;
  text-align: center;
  background: linear-gradient(
    0deg,
    rgb(68, 150, 231) 0%,
    rgba(64, 158, 255, 1) 100%
  );
  box-shadow: 0px 3px 5px 0px #b0b0b0;
}
.harder .title {
  font-size: 28px;
  color: #fff;
}
.radio-lis {
  padding: 29px 26px;
  text-align: left;
}
.radio-wrap {
  margin-bottom: 10px;
}

.radio-wrap .title {
  margin-top: 10px;
  font-size: 23px;
  font-weight: bold;
  color: #343434;
  position: relative;
}
.radio-wrap .title::after {
  content: "*";
  color: #ff0000;
  position: absolute;
  left: -8px;
  top: -3px;
  z-index: 9;
}
.el-radio-group {
  // margin-top: 33px;
}
::v-deep .el-radio {
  display: block;
  margin: 10px 0;
  white-space: normal;
  font-size: 18px !important;
  color: #343434;
  // line-height: 17px;
}
.next-step {
  padding: 2px 28px 0;
}
.next-step button {
  width: 100%;
  height: 58px;
  line-height: 46px;
  font-weight: bold;

  font-size: 23px;
  border-radius: 4px;
  color: #fff;
  border: none;
  background: rgba(64, 158, 255, 1);
}
</style>
