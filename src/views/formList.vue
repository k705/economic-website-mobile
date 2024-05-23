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
              <h4 class="title">{{index+1}}.{{item.explain}}</h4>
              <el-radio-group v-model="form.radioArray[index]">
                <el-radio
                  v-for="it of item.assessAnswer"
                  :key="it.aid"
                  :label="it.aid"
                  class="el-radio"
             
                  @change="handleRadioChanges(item, it.aid)"
                >
                  {{ it.answer }}
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
      typeFromQuery:'',
      selectedAnswers:[],
      list2: [
        {
          id: "000",
          explain: "年龄",
          createTime: null,
          assessAnswer: [
            {
              aid: 9,
              tid: null,
              answer: "20岁以下，60岁以上（含20岁和60岁）",
              scor: null,
              aas: null,
              creatreTime: null,
            },
            {
              aid: 8,
              tid: null,
              answer: "20-25,55-60岁（含25岁和55岁）",
              scor: null,
              aas: null,
              creatreTime: null,
            },
            {
              aid: 7,
              tid: null,
              answer: "25-55岁",
              scor: null,
              aas: null,
              creatreTime: null,
            },
            {
              aid: 6,
              tid: null,
              answer: "30-48岁",
              scor: null,
              aas: null,
              creatreTime: null,
            },
          ],
        },
      ],
    };
  },
    created() {  
      
  },  
  mounted() {
    this.addClient();
  },
  methods: {
    
    async addClient() {
      console.log(this.$route,'this.$route');
    // 在组件创建时，从路由的查询参数中获取 type  
    this.typeFromQuery = this.$route.query.type;  
  
    // 现在您可以在组件中使用 this.typeFromQuery  
    console.log(this.typeFromQuery,'this.typeFromQuery');  
      try {
        const result = await reqParameter(this.typeFromQuery);
        this.list2 = result.data.rows;
        console.log(this.list2);
        // this.$router.push("/result");
      } catch (error) {
        // console.log(chalk.redBright(error));
      }
    },

    goResult() {
  // 遍历list2来检查每个问题是否都有选择
  const unselectedItems = this.list2.filter((item, index) => !this.form.radioArray[index]).reverse();

  if (unselectedItems.length > 0) {
    // 如果有未选择的项，弹出提示
    unselectedItems.forEach(item => {
      this.$alert(`请选择*${item.explain}`, '提示', {
        confirmButtonText: '确定',
      });
    });
  } else {
    console.log(this.reslist,'111');
    // 所有选项都被选择，使用state传递reslist并跳转到结果页面
    this.$router.push({
      name: 'result',
      params: { array: this.selectedAnswers} , // 直接传递reslist数组
      // params: { array:[{tid: 1, aid: 9}, {tid: 2, aid: 13}, {tid: 3, aid: 16}, {tid: 4, aid: 21}] } , // 直接传递reslist数组
    });
  }
},
    // 赋值
    // handCheck() {
    //   const aaa = [];
    //   this.list2.forEach((item, index) => {
    //     item.list.forEach((it) => {
    //       if (it.pcStatus === 1) {
    //         aaa.push(it.id);
    //       }
    //     });
    //     if (aaa.length !== index + 1) {
    //       aaa.push(null);
    //     }
    //   });
    //   this.form.radioArray = aaa;
    // },
    // 取值
    // handleRadioChanges(item, id) {
    //   // console.log(item, id);
    //   this.writeText2 = item;
    //   this.writeText3 = id;
    //   item.assessAnswer.forEach((res) => {
    //     if (res.aid === id) {
    //       res.pcStatus = 1;
    //     } else {
    //       res.pcStatus = 0;
    //     }
    //   });
    //   this.reslist.push(item);
    //   let newArry = this.reslist;
    //   //数组去重选择最后一条数据
    //   for (var i = 0; i < newArry.length; i++) {
    //     for (var j = i + 1; j < newArry.length; j++) {
    //       if (newArry[i].id == newArry[j].id) {
    //         newArry.splice(i, 1);
    //         j--;
    //       }
    //     }
    //   }
    //   this.reslist = newArry;
    //   // console.log( this.reslist );
    // },
    handleRadioChanges(item, selectedAid) {
  // 更新当前选中项的状态
  item.assessAnswer.forEach(res => {
    res.pcStatus = res.aid === selectedAid ? 1 : 0;
  });

  // 获取当前问题的id和选中的aid，组成一个对象
  const selectedItem = {
    tid:item.id,
    aid:selectedAid,
  };

  // 添加到结果数组，同时确保不重复（基于tid和selectedAid的组合）
  if (!this.selectedAnswers.some(answer => 
    answer.tid === selectedItem.tid && 
    answer.aid === selectedItem.aid)) {
    this.selectedAnswers.push(selectedItem);
  }

  // 这里无需去重reslist，因为我们实际上是在维护selectedAnswers数组
  // console.log(this.selectedAnswers);
}
  },
  created() {},

  destroyed() {},
};
</script>

<style lang="scss" scoped>
// @media only screen and (min-width: 480px) {
//   html {
//     font-size: 28px !important;
//   }
// }
// @media only screen and (min-width: 414px) {
//   html {
//     font-size: 25px !important;
//   }
// }
// @media only screen and (min-width: 400px) {
//   html {
//     font-size: 23px !important;
//   }
// }

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
  font-size: 27px;

  height: 68px;
  position: fixed;
    // margin-bottom: 80px;
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
  font-size: 32px;
  color: #fff;
}
.radio-lis {

  padding: 29px 26px;
  text-align: left;
}
.radio-wrap {
  margin-top: 80px;
  margin-bottom: 10px;
}

.radio-wrap .title {
  margin-top: 10px;
  font-size: 32px;
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
  font-size: 28px !important;
  color: #343434;
  // line-height: 17px;
}
::v-deep .el-radio__label{
  font-size: 29px !important;

}
.next-step {
  padding: 2px 28px 0;
}
.next-step button {
  width: 100%;
  height: 80px;
  line-height: 80px;
  font-weight: bold;

  font-size: 27px;
  border-radius: 4px;
  color: #fff;
  border: none;
  background: rgba(64, 158, 255, 1);
}
</style>
