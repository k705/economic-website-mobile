<template>
  <div>
    <!-- 第一屏 -->
    <div class="body">
      <div class="result-wrap">
        <div class="harder-top">
          <div class="title">
            <!--            <img src="../assets/return_icon.png" width="11" height="11" alt="">-->
            <!--            <p>风险等级评测结果</p>-->
          </div>
          <div class="grade">
            <img
              src="../assets/Grade-1.png"
              id="imgA"
              style="display: none"
              alt=""
            />
            <img
              src="../assets/Grade-2.png"
              id="imgB"
              style="display: none"
              alt=""
            />
            <img
              src="../assets/Grade-3.png"
              id="imgC"
              style="display: none"
              alt=""
            />
            <img src="../assets/Grade-4.png" id="imgD" style="" alt="" />
            <img
              src="../assets/Grade-5.png"
              id="imgE"
              style="display: none"
              alt=""
            />
            <span id="levelA">{{ AssessRate.tips }}</span>
          </div>
        </div>
        <div class="main-details">
          <div class="main-details-inn">
            <div class="display-flex rate-list">
              <div class="flex">
                <p class="top" id="baseRate">{{ AssessRate.basics }}</p>
                <p>基准费率</p>
              </div>
              <div class="flex">
                <p class="top" id="riskRate">{{ AssessRate.risk }}</p>
                <p>风险费率</p>
              </div>
              <div class="flex">
                <p class="top" id="combinedBillingRate">
                  {{ AssessRate.risk }}
                </p>
                <p>合计费率</p>
              </div>
            </div>
            <div class="display-flex score">
              <div class="flex">
                <p class="top-num" id="score">{{ AssessRate.maxs }}</p>
                <p>客户最终得分</p>
              </div>
              <div class="flex">
                <p class="top-num" id="level">{{ AssessRate.grad }}</p>
                <p>风险评测等级</p>
              </div>
            </div>
          </div>
        </div>

        <div class="details-list">
          <div class="list-item title-details">
            <img src="../assets/form.png" alt="" />
            <span>得分明细</span>
          </div>

          <div
            class="list-item display-flex"
            v-for="(item, index) of assessSourList"
            :key="index"
          >
            <div class="list-db flex">
              {{ index + 1 }}.{{ item.explain }} : {{ item.answer }}
            </div>
            <div class="list-fb"  :style="{ color: item.goal < 0 ? 'red' : '#03de06' }">{{ item.goal }}分</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { reqCompute } from "@/api/website";
export default {
  data() {
    return {
      assessSourList: [],
      reslist: [],
      AssessRate: {},
    };
  },
  mounted() {
    // this.compute()
    console.log(this.$route.params.array, "???");
    // console.log(
    //   this.$route.params.array.map((i) => Object.assign({}, i)),
    //   "shuzu"
    // );
    // let selectedAnswers = JSON.parse(this.$route.params.array);
    // let selectedAnswers = JSON.stringify(this.$route.params.array);
    // let selectedAnswers = this.$route.params.array.map((i) =>
    //   Object.assign({}, i)
    // );

    //  selectedAnswers = JSON.parse(selectedAnswers);

    // let selectedAnswers =[...this.$route.params.array];
    // console.log(selectedAnswers, "666");

    if (this.$route.params.array) {
      // 使用传递过来的reslist数据
      // this.reslist = JSON.parse(JSON.stringify(selectedAnswers));
      // this.reslist = this.$route.params.array.map((i) => Object.assign({}, i));
      this.compute();
      // console.log(reslist,'222');
      // 进行其他初始化操作...
    }
  },
  methods: {
    async compute() {
      try {
        console.log(this.reslist, "3333");
        console.log([
          { tid: 1, aid: 9 },
          { tid: 2, aid: 13 },
          { tid: 3, aid: 16 },
          { tid: 4, aid: 21 },
        ]);
        const result = await reqCompute(1, this.$route.params.array.map((i) => Object.assign({}, i)));
        // const result = await reqCompute(1, this.$route.params.array);

        // const result = await reqCompute(1, [{tid: 1, aid: 9}, {tid: 2, aid: 13}, {tid: 3, aid: 16}, {tid: 4, aid: 21}]);
        console.log(result);

        this.assessSourList = result.data.data.assessSourList;
        this.AssessRate = result.data.data.AssessRate;

        // this.$router.push("/formList");
      } catch (error) {
        console.log(error);
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
  font-family: "Source Han Sans CN";

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

.result-wrap .harder-top {
  position: relative;
  width: 100%;
  padding: 25px 22px 0;
  height: 227px;
  // background: rgba(64, 158, 255, 1);
  //  background: linear-gradient(
  //   0deg,
  //   rgb(68, 150, 231) 0%,
  //   rgba(64, 158, 255, 1) 100%
  // );
    background: linear-gradient(to bottom, rgb(136, 217, 244), rgb(16, 121, 226));
  box-shadow: 0px 3px 5px 0px #b0b0b0;
  background-size: 100% 100%;
  overflow: hidden;
}
.result-wrap .title {
  line-height: 14px;
  margin-bottom: 25px;
  font-size: 15px;
  color: #fff;
  text-align: center;
}
.result-wrap .grade {
  //  background: blue;
  display: flex;
  align-items: center;
}
.result-wrap .grade img {
  // background: #760402;

  width: 85.5px;
  height: 82.5px;
  margin-right: 22px;
  display: inline-block;
  vertical-align: middle;
 
}
.result-wrap .grade span {
  font-size: 27px;
  color: #fff;
  font-weight: bold;
}
.result-wrap .harder-top::after {
  content: " ";
  position: absolute;
  right: 0;
  bottom: -56px;
  z-index: 9;
  width: 136px;
  height: 169px;
  // background: url("../assets/bg-right.png") no-repeat;
  background-size: 100% 100%;
}
.result-wrap .main-details {
  position: relative;
  z-index: 99;
  height: 192px;
  margin: -38px 23px 0;
  // padding: 13px 0 25px;
    background: linear-gradient(to bottom, rgb(208, 235, 245), rgb(64, 158, 255, 1));

  border-radius: 20px;
  background-size: 100% 100%;
  font-size: 18px;
  font-family: "Source Han Sans CN";
  // font-weight: 50;
  color: #343434;
  text-align: center;
  line-height: 13px;
}
.result-wrap .main-details-inn {
  width: 100%;
  height: 100%;
  // background: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.result-wrap .rate-list {
  width: 70%;
  display: flex;
  justify-content: space-between;
}
.display-flex {
  // display: -webkit-box;
  // display: -ms-flexbox;
  // display: -webkit-flex;
  display: flex;
}
p {
  font-size: 21px;
  display: block;
  // margin-block-start: 1em;
  // margin-block-end: 1em;
  // margin-inline-start: 0px;
  // margin-inline-end: 0px;
  unicode-bidi: isolate;
}
.result-wrap .rate-list .top {
  margin-bottom: 16px;
  font-size: 25px;
}

.result-wrap .score {
  width: 50%;
  display: flex;
  justify-content: space-between;
}
.result-wrap .score .top-num {
  font-size: 28px;
  color: #ad2926;
  line-height: 28px;
  margin-bottom: 8px;
  margin-top: 22px;
}
.result-wrap .details-list {
  margin: 24px 28px;
  border-radius: 4px;
  overflow: hidden;
}
.details-list .list-item {
  background: #f8f8f8;
  padding: 0 14px;
  text-align: left;
  line-height: 37px;
  height: 37px;
  margin-bottom: 1px;
  justify-content: space-between;
}
.details-list .title-details img {
  width: 15px;
  height: 19px;
  margin-right: 5px;
  margin-top: -5px;
  vertical-align: middle;
}
.details-list .title-details span {
  font-size: 18px;
  color: #343434;
  font-weight: bold;
  font-family: "Source Han Sans CN";
}
.details-list .list-item .list-db {
  font-size: 12px;
  color: #343434;
}
.details-list .list-item .list-fb {
  font-size: 12px;
  color: #fd801c;
}
</style>
