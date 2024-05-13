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
            <h4 class="title">2.年龄</h4>
            <div class="radio-list-radio">
              <label
                class="label display-flex"
                :class="{
                  active: radio2 === '20岁以下，60岁以上（含20岁和60岁）',
                }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="20岁以下，60岁以上（含20岁和60岁）"
                    name="radio2"
                    @change="handleRadioChange"
                    v-model="radio2"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>20岁以下，60岁以上（含20岁和60岁）</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{
                  active: radio2 === '20~25,55~60岁（含25岁和55岁）',
                }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="20~25,55~60岁（含25岁和55岁）"
                    name="radio2"
                    @change="handleRadioChange"
                    v-model="radio2"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>20~25,55~60岁（含25岁和55岁）</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{
                  active: radio2 === '25~55岁',
                }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="25~55岁"
                    name="radio2"
                    @change="handleRadioChange"
                    v-model="radio2"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>25~55岁</span>
                </div>
              </label>
            </div>
          </div>
          <!-- 婚姻状态 -->
          <div class="radio-wrap" id="radio3">
            <h4 class="title">3.婚姻状态</h4>
            <div class="radio-list-radio">
              <label
                class="label display-flex"
                :class="{ active: radio3 === '已婚' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="已婚"
                    name="radio3"
                    @change="handleRadioChange"
                    v-model="radio3"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>已婚</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio3 === '未婚' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="未婚"
                    name="radio3"
                    @change="handleRadioChange"
                    v-model="radio3"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>未婚</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio3 === '离异' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="离异"
                    name="radio3"
                    @change="handleRadioChange"
                    v-model="radio3"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>离异</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio3 === '再婚' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="再婚"
                    name="radio3"
                    @change="handleRadioChange"
                    v-model="radio3"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>再婚</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio3 === '丧偶' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="丧偶"
                    name="radio3"
                    @change="handleRadioChange"
                    v-model="radio3"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>丧偶</span>
                </div>
              </label>
            </div>
          </div>

          <!-- 4.配偶和家人能否知晓贷款 -->
          <div class="radio-wrap" id="radio4">
            <h4 class="title">4.配偶和家人能否知晓贷款</h4>
            <div class="radio-list-radio">
              <label
                class="label display-flex"
                :class="{ active: radio4 === '配偶跟家人均能知晓' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="配偶跟家人均能知晓"
                    name="radio4"
                    @change="handleRadioChange"
                    v-model="radio4"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>配偶跟家人均能知晓</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio4 === '配偶能知晓，家人不能知晓' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="配偶能知晓，家人不能知晓"
                    name="radio4"
                    @change="handleRadioChange"
                    v-model="radio4"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>配偶能知晓，家人不能知晓</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio4 === '配偶不能知晓，家人能知晓' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="配偶不能知晓，家人能知晓"
                    name="radio4"
                    @change="handleRadioChange"
                    v-model="radio4"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>配偶不能知晓，家人能知晓</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio4 === '配偶和家人都不能知晓' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="配偶和家人都不能知晓"
                    name="radio4"
                    @change="handleRadioChange"
                    v-model="radio4"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>配偶和家人都不能知晓</span>
                </div>
              </label>
            </div>
          </div>

          <!-- 5.本地可交易房产价值 -->
          <div class="radio-wrap" id="radio5">
            <h4 class="title">5.本地可交易房产价值</h4>
            <div class="radio-list-radio">
              <label
                class="label display-flex"
                :class="{ active: radio5 === '无本地可交易房产' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="无本地可交易房产"
                    name="radio5"
                    @change="handleRadioChange"
                    v-model="radio5"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>无本地可交易房产</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio5 === '0~100万（含100万）' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="0~100万（含100万）"
                    name="radio5"
                    @change="handleRadioChange"
                    v-model="radio5"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>0~100万（含100万）</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio5 === '100万~200万（含200万）' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="100万~200万（含200万）"
                    name="radio5"
                    @change="handleRadioChange"
                    v-model="radio5"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>100万~200万（含200万）</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio5 === '200万以上' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="200万以上"
                    name="radio5"
                    @change="handleRadioChange"
                    v-model="radio5"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>200万以上</span>
                </div>
              </label>
            </div>
          </div>
          <!-- 6.本地车产价值 -->
          <div class="radio-wrap" id="radio6">
            <h4 class="title">6.本地车产价值</h4>
            <div class="radio-list-radio">
              <label
                class="label display-flex"
                :class="{ active: radio6 === '无本地车产' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="无本地车产"
                    name="radio6"
                    @change="handleRadioChange"
                    v-model="radio6"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>无本地车产</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio6 === '0~10万（含10万）' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="0~10万（含10万）"
                    name="radio6"
                    @change="handleRadioChange"
                    v-model="radio6"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>0~10万（含10万）</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio6 === '10万~30万（含30万）' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="10万~30万（含30万）"
                    name="radio6"
                    @change="handleRadioChange"
                    v-model="radio6"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>10万~30万（含30万）</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio6 === '30万以上' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="30万以上"
                    name="radio6"
                    @change="handleRadioChange"
                    v-model="radio6"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>30万以上</span>
                </div>
              </label>
            </div>
          </div>

          <!--7.个人投保年缴额 -->
          <div class="radio-wrap" id="radio7">
            <h4 class="title">7.个人投保年缴额</h4>
            <div class="radio-list-radio">
              <label
                class="label display-flex"
                :class="{ active: radio7 === '无投保保单' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="无投保保单"
                    name="radio7"
                    @change="handleRadioChange"
                    v-model="radio7"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>无投保保单</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio7 === '3600以下（含3600）' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="3600以下（含3600）"
                    name="radio7"
                    @change="handleRadioChange"
                    v-model="radio7"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>3600以下（含3600）</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio7 === '3600~8000（含8000）' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="3600~8000（含8000）"
                    name="radio7"
                    @change="handleRadioChange"
                    v-model="radio7"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>3600~8000（含8000）</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio7 === '8000以上' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="8000以上"
                    name="radio7"
                    @change="handleRadioChange"
                    v-model="radio7"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>8000以上</span>
                </div>
              </label>
            </div>
          </div>

          <!--8.公积金月缴额 -->
          <div class="radio-wrap" id="radio8">
            <h4 class="title">8.公积金月缴额</h4>
            <div class="radio-list-radio">
              <label
                class="label display-flex"
                :class="{ active: radio8 === '无公积金' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    value="无公积金"
                    class="haid"
                    name="radio8"
                    @change="handleRadioChange"
                    v-model="radio8"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>无公积金</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio8 === '1000以下（含1000）' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="1000以下（含1000）"
                    name="radio8"
                    @change="handleRadioChange"
                    v-model="radio8"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>1000以下（含1000）</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio8 === '1000以上' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    value="1000以上"
                    class="haid"
                    name="radio8"
                    @change="handleRadioChange"
                    v-model="radio8"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>1000以上</span>
                </div>
              </label>
            </div>
          </div>

          <!--9.所在单位性质 -->
          <div class="radio-wrap" id="radio9">
            <h4 class="title">9.所在单位性质</h4>
            <div class="radio-list-radio">
              <label
                class="label display-flex"
                :class="{ active: radio9 === '民营、外企' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="民营、外企"
                    name="radio9"
                    @change="handleRadioChange"
                    v-model="radio9"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>民营、外企</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio9 === '国企' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="国企"
                    name="radio9"
                    @change="handleRadioChange"
                    v-model="radio9"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>国企</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio9 === '事业单位' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="事业单位"
                    name="radio9"
                    @change="handleRadioChange"
                    v-model="radio9"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>事业单位</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio9 === '公务员、教师、医生' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="公务员、教师、医生"
                    name="radio9"
                    @change="handleRadioChange"
                    v-model="radio9"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>公务员、教师、医生</span>
                </div>
              </label>
            </div>
          </div>

          <!--10.个人征信非贷后管理查询次数 -->
          <div class="radio-wrap" id="radio10">
            <h4 class="title">10.个人征信机构非贷后管理查询次数</h4>
            <div class="radio-list-radio">
              <label
                class="label display-flex"
                :class="{ active: radio10 === '0~5' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="0~5"
                    name="radio10"
                    @change="handleRadioChange"
                    v-model="radio10"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>0~5</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio10 === '5~10（含5）' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="5~10（含5）"
                    name="radio10"
                    @change="handleRadioChange"
                    v-model="radio10"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>5~10（含5）</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio10 === '10~20（含10）' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="10~20（含10）"
                    name="radio10"
                    @change="handleRadioChange"
                    v-model="radio10"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>10~20（含10）</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio10 === '20以上（含20）' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="20以上（含20）"
                    name="radio10"
                    @change="handleRadioChange"
                    v-model="radio10"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>20以上（含20）</span>
                </div>
              </label>
            </div>
          </div>

          <!--11.个人名下非银行贷款笔数 -->
          <div class="radio-wrap" id="radio11">
            <h4 class="title">11.个人名下非银行贷款笔数</h4>
            <div class="radio-list-radio">
              <label
                class="label display-flex"
                :class="{ active: radio11 === '无' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="无"
                    name="radio11"
                    @change="handleRadioChange"
                    v-model="radio11"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>无</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio11 === '1~3' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="1~3"
                    name="radio11"
                    @change="handleRadioChange"
                    v-model="radio11"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>1~3</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio11 === '3~6（含3）' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="3~6（含3）"
                    name="radio11"
                    @change="handleRadioChange"
                    v-model="radio11"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>3~6（含3）</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio11 === '6笔以上（含6笔）' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="6笔以上（含6笔）"
                    name="radio11"
                    @change="handleRadioChange"
                    v-model="radio11"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>6笔以上（含6笔）或白户</span>
                </div>
              </label>
            </div>
          </div>

          <!--12.个人房产负债率 -->
          <div class="radio-wrap" id="radio12">
            <h4 class="title">12.个人房产负债率</h4>
            <div class="radio-list-radio">
              <label
                class="label display-flex"
                :class="{ active: radio12 === '有房无负债' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="有房无负债"
                    name="radio12"
                    @change="handleRadioChange"
                    v-model="radio12"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>有房无负债</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio12 === '小于25%' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="小于25%"
                    name="radio12"
                    @change="handleRadioChange"
                    v-model="radio12"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>小于25%</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio12 === '25%~50%（含25%）' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="25%~50%（含25%）"
                    name="radio12"
                    @change="handleRadioChange"
                    v-model="radio12"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>25%~50%（含25%）</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio12 === '50%~75%（含50%）' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="50%~75%（含50%）"
                    name="radio12"
                    @change="handleRadioChange"
                    v-model="radio12"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>50%~75%（含50%）</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio12 === '75%~100%（含75%）或无房' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="75%~100%（含75%）或无房"
                    name="radio12"
                    @change="handleRadioChange"
                    v-model="radio12"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>75%~100%（含75%）或无房</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio12 === '100%以上（含100%）' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="100%以上（含100%）"
                    name="radio12"
                    @change="handleRadioChange"
                    v-model="radio12"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>100%以上（含100%）</span>
                </div>
              </label>
            </div>
          </div>

          <!--13.个人征信逾期月份数 -->
          <div class="radio-wrap" id="radio13">
            <h4 class="title">13.个人征信逾期月份数</h4>
            <div class="radio-list-radio">
              <label
                class="label display-flex"
                :class="{ active: radio13 === '0' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="0"
                    name="radio13"
                    @change="handleRadioChange"
                    v-model="radio13"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>0</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio13 === '1~3' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="1~3"
                    name="radio13"
                    @change="handleRadioChange"
                    v-model="radio13"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>1~3</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio13 === '4~7' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="4~7"
                    name="radio13"
                    @change="handleRadioChange"
                    v-model="radio13"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>4~7</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio13 === '大于7或非正常' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="大于7或非正常"
                    name="radio13"
                    @change="handleRadioChange"
                    v-model="radio13"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>大于7或非正常或当前逾期</span>
                </div>
              </label>
            </div>
          </div>

          <!--14.信用卡使用情况 -->
          <div class="radio-wrap" id="radio14">
            <h4 class="title">14.信用卡使用情况</h4>
            <div class="radio-list-radio">
              <label
                class="label display-flex"
                :class="{ active: radio14 === '3张以内且半年使用率小于80%' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="3张以内且半年使用率小于80%"
                    name="radio14"
                    @change="handleRadioChange"
                    v-model="radio14"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>3张以内且半年使用率小于80%</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio2 === '3张以内且半年使用率大于80%' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="3张以内且半年使用率大于80%"
                    name="radio14"
                    @change="handleRadioChange"
                    v-model="radio14"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>3张以内且半年使用率大于80%</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio14 === '3张以上且半年使用率小于80%' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="3张以上且半年使用率小于80%"
                    name="radio14"
                    @change="handleRadioChange"
                    v-model="radio14"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>3张以上且半年使用率小于80%</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio14 === '3张以上且半年使用率大于80%' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="3张以上且半年使用率大于80%"
                    name="radio14"
                    @change="handleRadioChange"
                    v-model="radio14"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>3张以上且半年使用率大于80%</span>
                </div>
              </label>
            </div>
          </div>

          <!--15.单位能否接电话 -->
          <div class="radio-wrap" id="radio15">
            <h4 class="title">15.单位能否接电话</h4>
            <div class="radio-list-radio">
              <label
                class="label display-flex"
                :class="{ active: radio15 === '否' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="否"
                    name="radio15"
                    @change="handleRadioChange"
                    v-model="radio15"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>否</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio15 === '能' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="能"
                    name="radio15"
                    @change="handleRadioChange"
                    v-model="radio15"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>能</span>
                </div>
              </label>
            </div>
          </div>

          <!--16.单位、家里能否下户 -->
          <div class="radio-wrap" id="radio16">
            <h4 class="title">16.单位、家里能否下户</h4>
            <div class="radio-list-radio">
              <label
                class="label display-flex"
                :class="{ active: radio16 === '单位跟家里均能下户' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="单位跟家里均能下户"
                    name="radio16"
                    @change="handleRadioChange"
                    v-model="radio16"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>单位跟家里均能下户</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio16 === '单位能、家里不能' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="单位能、家里不能"
                    name="radio16"
                    @change="handleRadioChange"
                    v-model="radio16"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>单位能、家里不能</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio16 === '单位不能、家里能' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="单位不能、家里能"
                    name="radio16"
                    @change="handleRadioChange"
                    v-model="radio16"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>单位不能、家里能</span>
                </div>
              </label>
              <label
                class="label display-flex"
                :class="{ active: radio16 === '单位家里都不能' }"
              >
                <div class="cell-bd">
                  <input
                    type="radio"
                    class="haid"
                    value="单位家里都不能"
                    name="radio16"
                    @change="handleRadioChange"
                    v-model="radio16"
                  />
                  <div class="radio-change"></div>
                </div>
                <div class="cell-ft flex">
                  <span>单位家里都不能</span>
                </div>
              </label>
            </div>
          </div>
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

export default {
  data() {
    return {
      radio2: "",
      radio3: "",
      radio4: "",
      radio5: "",
      radio6: "",
      radio7: "",
      radio8: "",
      radio9: "",
      radio10: "",
      radio11: "",
      radio12: "",
      radio13: "",
      radio14: "",
      radio15: "",
      radio16: "",
      formData: {},
    };
  },
  mounted() {
    // this.isheight()
  },
  methods: {
    handleRadioChange() {
      // if (!this.radio2) {
      //   // 提示用户输入
      //   alert('请输入您的年龄');
      // }
      console.log(this.radio2);
    },
    goResult() {
      this.formData = {
        radio2: this.radio2,
        radio3: this.radio3,
        radio4: this.radio4,
        radio5: this.radio5,
        radio6: this.radio6,
        radio7: this.radio7,
        radio8: this.radio8,
        radio9: this.radio9,
        radio10: this.radio10,
        radio11: this.radio11,
        radio12: this.radio12,
        radio13: this.radio13,
        radio14: this.radio14,
        radio15: this.radio15,
        radio16: this.radio16,
      };
      console.log(this.formData);
      this.$router.push("/result");
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
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Source Han Sans CN";
  font-size: 16px;
}
div {
  display: block;
  unicode-bidi: isolate;
}
.body {
  width: 100%;
  min-width: 750px;
  min-height: 100vh;
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

  height: 68px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  padding: 0 30px;
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
  margin-top: 35px;
}

.radio-wrap .title {
  margin-bottom: 10px;
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
.radio-wrap .label {
  padding: 6px 9px;
  background: url("../assets/border.png") no-repeat;
  background-size: 100% 100%;
  line-height: 10px;
  margin-bottom: 4px;
}
.radio-wrap .active {
  background: url("../assets/border-change.png") no-repeat;
  background-size: 100% 100%;
}
.display-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.radio-wrap .cell-bd {
  margin-right: 5px;
}
label > * {
  pointer-events: none;
}
.haid {
  display: none;
}
.radio-wrap .radio-change {
  width: 13px;
  height: 13px;
  background: url("../assets/radio.png") no-repeat;
  background-size: cover;
  display: inline-block;
}
.radio-wrap .active .radio-change {
  background: url("../assets/icon-checked.png") no-repeat;
  background-size: cover;
}
.radio-wrap .cell-ft {
  font-size: 18px;
  color: #343434;
  line-height: 17px;
}
.flex {
  -ms-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
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
