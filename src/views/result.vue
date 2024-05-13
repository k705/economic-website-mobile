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
            <span id="levelA" style="display: none">较低风险</span>
            <span id="levelB" style="display: none">稍有风险</span>
            <span id="levelC" style="display: none">一般风险</span>
            <span id="levelD" style="">显著风险</span>
            <span id="levelE" style="display: none">较高风险</span>
          </div>
        </div>
        <div class="main-details">
          <div class="main-details-inn">
            <div class="display-flex rate-list">
              <div class="flex">
                <p class="top" id="baseRate">2.88%</p>
                <p>基准费率</p>
              </div>
              <div class="flex">
                <p class="top" id="riskRate">6.0%</p>
                <p>风险费率</p>
              </div>
              <div class="flex">
                <p class="top" id="combinedBillingRate">8.88%</p>
                <p>合计费率</p>
              </div>
            </div>
            <div class="display-flex score">
              <div class="flex">
                <p class="top-num" id="score">135</p>
                <p>客户最终得分</p>
              </div>
              <div class="flex">
                <p class="top-num" id="level">D</p>
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

          <div class="list-item display-flex">
            <div class="list-db flex">1.身份认证 : 通过</div>
            <div class="list-fb" style="color: #03de06">+100分</div>
          </div>

          <div class="list-item display-flex">
            <div class="list-db flex" id="answer15">
              2.年龄：20岁以下，60岁以上（含20岁和60岁）
            </div>
            <div
              class="list-fb"
              id="fractions15"
              style="color: rgb(253, 128, 28)"
            >
              -10分
            </div>
          </div>
          <div class="list-item display-flex">
            <div class="list-db flex" id="answer16">3.婚姻状态 : 已婚</div>
            <div class="list-fb" id="fractions16" style="color: rgb(3, 222, 6)">
              +10分
            </div>
          </div>
          <div class="list-item display-flex">
            <div class="list-db flex" id="answer17">
              4.配偶和家人能否知晓贷款 : 配偶跟家人均能知晓
            </div>
            <div class="list-fb" id="fractions17" style="color: rgb(3, 222, 6)">
              +10分
            </div>
          </div>
          <div class="list-item display-flex">
            <div class="list-db flex" id="answer18">
              5.本地可交易房产价值 :无本地可交易房产
            </div>
            <div class="list-fb" id="fractions18" style="color: rgb(3, 222, 6)">
              +0分
            </div>
          </div>
          <div class="list-item display-flex">
            <div class="list-db flex" id="answer19">
              6.本地车产价值 :无本地车产
            </div>
            <div class="list-fb" id="fractions19" style="color: rgb(3, 222, 6)">
              +0分
            </div>
          </div>
          <div class="list-item display-flex">
            <div class="list-db flex" id="answer20">
              7.个人投保年交额 ：无投保保单
            </div>
            <div class="list-fb" id="fractions20" style="color: rgb(3, 222, 6)">
              +0分
            </div>
          </div>
          <div class="list-item display-flex">
            <div class="list-db flex" id="answer21">
              8.公积金月缴额 ：无公积金
            </div>
            <div class="list-fb" id="fractions21" style="color: rgb(3, 222, 6)">
              +0分
            </div>
          </div>
          <div class="list-item display-flex">
            <div class="list-db flex" id="answer22">
              9.所在单位性质 ：民营、外企
            </div>
            <div class="list-fb" id="fractions22" style="color: rgb(3, 222, 6)">
              +5分
            </div>
          </div>
          <div class="list-item display-flex">
            <div class="list-db flex" id="answer23">
              10.个人征信非贷后管理查询次数 ：5~10（含5）
            </div>
            <div class="list-fb" id="fractions23" style="color: rgb(3, 222, 6)">
              +0分
            </div>
          </div>
          <div class="list-item display-flex">
            <div class="list-db flex" id="answer24">
              11.个人名下非银行贷款笔数 ：无
            </div>
            <div class="list-fb" id="fractions24" style="color: rgb(3, 222, 6)">
              +5分
            </div>
          </div>
          <div class="list-item display-flex">
            <div class="list-db flex" id="answer25">
              12.个人房产负债率 ：有房无负债
            </div>
            <div class="list-fb" id="fractions25" style="color: rgb(3, 222, 6)">
              +10分
            </div>
          </div>
          <div class="list-item display-flex">
            <div class="list-db flex" id="answer26">
              13.个人征信逾期月份数 ：0
            </div>
            <div class="list-fb" id="fractions26" style="color: rgb(3, 222, 6)">
              +5分
            </div>
          </div>
          <div class="list-item display-flex">
            <div class="list-db flex" id="answer27">
              14.信用卡情况 ：3张以内且半年使用率小于80%
            </div>
            <div class="list-fb" id="fractions27" style="color: rgb(3, 222, 6)">
              +5分
            </div>
          </div>
          <div class="list-item display-flex">
            <div class="list-db flex" id="answer28">15.单位能否接电话 ：否</div>
            <div
              class="list-fb"
              id="fractions28"
              style="color: rgb(253, 128, 28)"
            >
              -10分
            </div>
          </div>
          <div class="list-item display-flex">
            <div class="list-db flex" id="answer29">
              16.家里单位能否下户 ：单位跟家里均能下户
            </div>
            <div class="list-fb" id="fractions29" style="color: rgb(3, 222, 6)">
              +5分
            </div>
          </div>
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
  methods: {},
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
  background: url("../assets/bg-top.png") no-repeat;
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
  background: url("../assets/bg-right.png") no-repeat;
  background-size: 100% 100%;
}
.result-wrap .main-details {
  position: relative;
  z-index: 99;
  height: 192px;
  margin: -38px 23px 0;
  // padding: 13px 0 25px;
  background: url("../assets/bg-center.png") no-repeat;
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
.result-wrap .rate-list .top {
  margin-bottom: 5px;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}
.result-wrap .score {
  width: 50%;
  display: flex;
  justify-content: space-between;
}
.result-wrap .score .top-num {
  font-size: 25px;
  color: #760402;
  line-height: 25px;
  margin-bottom: 8px;
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
