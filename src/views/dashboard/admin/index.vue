<template>
  <div class="dashboard-editor-container">
    <div class="block">
      <el-carousel height="40vw" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <div class="banner">
            <h1 class="banner-title">海云筑致力打造数字化装配式建筑生态产业</h1>
            <h3 class="banner-txt">居住“数字”家 丨 数字建筑 丨 数字园区 丨 数字厂房 丨 数字城市</h3>
            <div class="banner-name">
              <h2 class="banner-name-btn">始终走在时代的前列</h2>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="info program">
      <div class="info-bg">SOLUTIONS</div>
      <h1 class="info-title">解决方案</h1>
      <h3 class="info-txt">整合行业建筑智能解决方案</h3>
      <div class="info-main">
        <swiper :options="swiperOption">
          <swiper-slide>
            <div class="program-item">
              <h2 class="program-item-title">装配产业生产工厂智能化改造</h2>
              <h5 class="program-item-txt">智慧工厂 常见问题1.原料库中原料按货位进行存放，原料包装不一，且未使用条码化管理2.成品库未使用条码管理3.无法做到产品追溯，成品流水条码……</h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="program-item">
              <h2 class="program-item-title">装配产业生产工厂智能化改造</h2>
              <h5 class="program-item-txt">智慧工厂 常见问题1.原料库中原料按货位进行存放，原料包装不一，且未使用条码化管理2.成品库未使用条码管理3.无法做到产品追溯，成品流水条码……</h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="program-item">
              <h2 class="program-item-title">装配产业生产工厂智能化改造</h2>
              <h5 class="program-item-txt">智慧工厂 常见问题1.原料库中原料按货位进行存放，原料包装不一，且未使用条码化管理2.成品库未使用条码管理3.无法做到产品追溯，成品流水条码……</h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="program-item">
              <h2 class="program-item-title">装配产业生产工厂智能化改造</h2>
              <h5 class="program-item-txt">智慧工厂 常见问题1.原料库中原料按货位进行存放，原料包装不一，且未使用条码化管理2.成品库未使用条码管理3.无法做到产品追溯，成品流水条码……</h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="program-item">
              <h2 class="program-item-title">装配产业生产工厂智能化改造</h2>
              <h5 class="program-item-txt">智慧工厂 常见问题1.原料库中原料按货位进行存放，原料包装不一，且未使用条码化管理2.成品库未使用条码管理3.无法做到产品追溯，成品流水条码……</h5>
            </div>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination" />
          <div slot="button-prev" class="swiper-button-prev" />
          <div slot="button-next" class="swiper-button-next" />
          <!-- <div slot="scrollbar" class="swiper-scrollbar" /> -->
        </swiper>
      </div>
    </div>

    <div class="info platform">
      <div class="info-bg">ECOLOGY</div>
      <h1 class="info-title">平台生态模式</h1>
      <h3 class="info-txt">工业化智能建造，实现工业化、精细化、标准化、数字化</h3>
      <div class="info-main">
        <el-row :gutter="10">
          <el-col :span="24" :sm="8" :md="8">
            <div class="platform-item">
              <div class="platform-itemBox">
                <h2 class="platform-item-title">智能建筑生产生态</h2>
                <h5 class="platform-item-txt">企业</h5>
              </div>
            </div>
          </el-col>
          <el-col :span="24" :sm="8" :md="8">
            <div class="platform-itemTwo">
              <div class="platform-itemTwoBox">
                <h2 class="platform-itemTwo-title">COSM</h2>
                <h5 class="platform-itemTwo-txt">智能建筑预制智能平台</h5>
              </div>
            </div>
          </el-col>
          <el-col :span="24" :sm="8" :md="8">
            <div class="platform-item">
              <div class="platform-itemBox">
                <h2 class="platform-item-title">智能建筑生产生态</h2>
                <h5 class="platform-item-txt">企业</h5>
              </div>
            </div>
          </el-col>
          <el-col :span="24" :sm="8" :md="8">
            <div class="platform-itemThree">
              <div class="platform-itemThree-row">
                <span class="platform-itemThree-item right">PC构建模具设计制造</span>
                <span class="platform-itemThree-item right">PC生产企业</span>
              </div>
              <div class="platform-itemThree-row two">
                <span class="platform-itemThree-item right">原材料供应方</span>
                <span class="platform-itemThree-item right">PC构件工艺设计</span>
              </div>
            </div>
          </el-col>
          <el-col :span="24" :sm="8" :md="8">
            <div class="platform-itemThree" />
          </el-col>
          <el-col :span="24" :sm="8" :md="8">
            <div class="platform-itemThree">
              <div class="platform-itemThree-row">
                <span class="platform-itemThree-item left">纯构建模式</span>
                <span class="platform-itemThree-item left">农庄生态模式</span>
              </div>
              <div class="platform-itemThree-row two">
                <span class="platform-itemThree-item left">旅游生态模式</span>
                <span class="platform-itemThree-item left">生态民宿模式</span>
              </div>
            </div>
          </el-col>
          <el-col :span="24" :sm="8" :md="8">
            <div class="platform-itemTwo">
              <div class="platform-itemThree-row" style="padding-top: 6vw;">
                <span class="platform-itemThree-item right">智能家居资源</span>
                <span class="platform-itemThree-item right">装修资源</span>
              </div>
            </div>
          </el-col>
          <el-col :span="24" :sm="8" :md="8">
            <div class="platform-item">
              <div class="platform-itemBox">
                <h2 class="platform-item-title">智能建筑实施配套生态</h2>
                <h5 class="platform-item-txt">资源</h5>
              </div>
            </div>
          </el-col>
          <el-col :span="24" :sm="8" :md="8">
            <div class="platform-itemTwo">
              <div class="platform-itemThree-row" style="padding-top: 6vw;">
                <span class="platform-itemThree-item left">运输物流资源</span>
                <span class="platform-itemThree-item left">安装维护资源</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="info news">
      <div class="info-bg">DYNAMIC STATE</div>
      <h1 class="info-title">丝路动态</h1>
      <h3 class="info-txt">提供最新最快的建筑行业新闻</h3>
      <div class="info-main">
        <el-row>
          <el-col :span="24" :sm="12" :md="6">
            <div class="news-item high img">
              <h2 class="news-item-title">COSMOPlat承接科技部国家部重点研发计…</h2>
            </div>
          </el-col>
          <el-col :span="24" :sm="12" :md="6">
            <div class="news-item blue">
              <h2 class="news-item-title">中国机械工业联合会朱森第、《财经》杂…</h2>
              <h5 class="news-item-txt">中国机械工业联合会朱森第、《财经》杂…</h5>
            </div>
          </el-col>
          <el-col :span="24" :sm="12" :md="6">
            <div class="news-item img">
              <h2 class="news-item-title">中国机械工业联合会朱森第、《财经》杂…</h2>
              <h5 class="news-item-txt">中国机械工业联合会朱森第、《财经》杂…</h5>
            </div>
          </el-col>
          <el-col :span="24" :sm="8" :md="6">
            <div class="news-item">
              <h2 class="news-item-title">中国机械工业联合会朱森第、《财经》杂…</h2>
              <h5 class="news-item-txt">中国机械工业联合会朱森第、《财经》杂…</h5>
            </div>
          </el-col>
          <el-col :span="24" :sm="16" :md="12">
            <div class="news-item">
              <h2 class="news-item-title">中国机械工业联合会朱森第、《财经》杂…</h2>
              <h5 class="news-item-txt">中国机械工业联合会朱森第、《财经》杂…</h5>
            </div>
          </el-col>
          <el-col :span="24" :sm="12" :md="6">
            <div class="news-item blue">
              <h2 class="news-item-title">中国机械工业联合会朱森第、《财经》杂…</h2>
              <h5 class="news-item-txt">中国机械工业联合会朱森第、《财经》杂…</h5>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="info partner">
      <div class="info-bg">PARTNER</div>
      <h1 class="info-title">生态伙伴</h1>

      <div class="info-main">
        <swiper :options="swiperOption2">
          <swiper-slide>
            <div class="program-item">
              <h2 class="program-item-title">装配产业生产工厂智能化改造</h2>
              <h5 class="program-item-txt">智慧工厂 常见问题1.原料库中原料按货位进行存放，原料包装不一，且未使用条码化管理2.成品库未使用条码管理3.无法做到产品追溯，成品流水条码……</h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="program-item">
              <h2 class="program-item-title">装配产业生产工厂智能化改造</h2>
              <h5 class="program-item-txt">智慧工厂 常见问题1.原料库中原料按货位进行存放，原料包装不一，且未使用条码化管理2.成品库未使用条码管理3.无法做到产品追溯，成品流水条码……</h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="program-item">
              <h2 class="program-item-title">装配产业生产工厂智能化改造</h2>
              <h5 class="program-item-txt">智慧工厂 常见问题1.原料库中原料按货位进行存放，原料包装不一，且未使用条码化管理2.成品库未使用条码管理3.无法做到产品追溯，成品流水条码……</h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="program-item">
              <h2 class="program-item-title">装配产业生产工厂智能化改造</h2>
              <h5 class="program-item-txt">智慧工厂 常见问题1.原料库中原料按货位进行存放，原料包装不一，且未使用条码化管理2.成品库未使用条码管理3.无法做到产品追溯，成品流水条码……</h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="program-item">
              <h2 class="program-item-title">装配产业生产工厂智能化改造</h2>
              <h5 class="program-item-txt">智慧工厂 常见问题1.原料库中原料按货位进行存放，原料包装不一，且未使用条码化管理2.成品库未使用条码管理3.无法做到产品追溯，成品流水条码……</h5>
            </div>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination" />
          <div slot="button-prev" class="swiper-button-prev" />
          <div slot="button-next" class="swiper-button-next" />
          <!-- <div slot="scrollbar" class="swiper-scrollbar" /> -->
        </swiper>
      </div>
    </div>

    <github-corner class="github-corner" />

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <todo-list />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <box-card />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      swiperOption: {
        // autoplay: true,
        // delay: 2000,
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOption2: {
        // autoplay: true,
        // delay: 2000,
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}

.el-carousel__item .banner {
  color: #fff;
  font-size: 14px;
  opacity: 0.75; // 透明度
  height: 40vw;
  margin: 0;
  background-image: url("~@/assets/test.jpg");
  background-size:100% 100%;
  background-repeat:no-repeat;
}
// .el-carousel__item h3 {
//   color: #475669;
//   font-size: 14px;
//   opacity: 0.75;
//   line-height: 200px;
//   margin: 0;
// }

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.banner{
  color: #fff;
  text-align: center;
}
.banner-title{
  margin: 0;
  padding-top: 12vw;
  padding-bottom: 2vw;
  font-size: 3vw;
  font-weight: 400;
}
.banner-txt{
  padding-top: 2vw;
  margin: 0;
  font-size: 1vw;
  font-weight: 400;
}
.banner-name{
  margin: 0;
  padding: 3vw 30vw 0 30vw;
  // width: 16vw;
}
.banner-name-btn{
  margin: 0;
  height: 4vw;
  border-radius: 2vw;
  background-image: linear-gradient(to right,
		#0064ff 0%,
		#c800c8 100%);
  font-size: 1.6vw;
  line-height: 4vw;
  font-weight: 400;
}
.info{
  padding: 4vw 0;
  text-align: center;
}
.info-bg{
  font-size: 3vw;
  color: #cccccc;
}
.info-title{
  margin-top: -1.5vw;
  margin-bottom: 0;
  padding-bottom: 1vw;
  font-size: 2.5vw;
  font-weight: 500;
  color: #000;
}
.info-txt{
  margin: 0;
  padding-bottom: 3vw;
  font-size: 1vw;
  font-weight: 400;
  color: #999999;
}
.program{
  color: #ffffff;
}
.program-item{
  height: 25vw;
  padding: 0 20px;
  background-image: url("~@/assets/test.jpg");
  background-size:100% 100%;
  background-repeat:no-repeat;
}
.program-item-title{
  margin: 0;
  padding-top: 10vw;
  font-size: 1.4vw;
  font-weight: 400;
}
.program-item-txt{
  margin: 0;
  padding-top: 3vw;
  font-size: 1vw;
  font-weight: 400;
}
.platform{
  background-color: #f0f0f0;
}
.platform-item{
  margin: 1vw 0;
  height: 15vw;
  padding: 3vw 5vw;
  color: #fff;
  background-image: url("~@/assets/test.jpg");
  background-size:100% 100%;
  background-repeat:no-repeat;
}
.platform-itemBox{
  height: 8vw;
	background-color: #000000;
	opacity: 0.6;
}
.platform-item-title{
  margin: 0;
  padding-top: 2.5vw;
  padding-bottom: 1vw;
  font-size: 1.4vw;
  font-weight: 700;
}
.platform-item-txt{
  margin: 0;
  font-size: 1vw;
  font-weight: 400;
}
.platform-itemTwo{
  margin: 1vw 0;
}
.platform-itemTwoBox{
  padding-top: 9vw;
  // position: absolute;
}
.platform-itemTwo-title{
  margin: 0;
  font-size: 1.875vw;
  font-weight: 700;
  color: #0064ff;
}
.platform-itemTwo-txt{
  margin: 0;
  padding-top: 1.5vw;
  font-size: 1.25vw;
  font-weight: 400;
}
.platform-itemThree{
  margin: 1vw 0;
  height: 5vw;
}
.platform-itemThree-row{
  clear:both;
  height: 2vw;
}
.platform-itemThree-row.two{
  padding-top: 1vw;
  height: 3vw;
}
.platform-itemThree-item{
  padding: 0 2vw;
  font-size: 0.84vw;
  line-height: 2vw;
  color: #000;
  background: #fff;
}
.platform-itemThree-item.right{
  float: right;
  margin-left: 3vw;
}
.platform-itemThree-item.left{
  float: left;
  margin-right: 3vw;
}
.news-item{
  padding: 4vw 3vw;
  height: 15vw;
  color: #010101;
  background: #f0f0f0;
  text-align: left;
}
.news-item.high{
  height: 30vw;
}
.news-item.img{
  color: #fff;
  background-image: url("~@/assets/test.jpg");
  background-size:100% 100%;
  background-repeat:no-repeat;
}
.news-item.blue{
  color: #fff;
	background-image: linear-gradient(to right,
		#3584ff 0%,
		#0064ff 100%);
}
.news-item-title{
  margin: 0;
  font-size: 1.25vw;
  font-weight: 400;
}
.news-item-txt{
  margin: 0;
  padding-top: 1.5vw;
  font-size: 0.73vw;
  font-weight: 400;
}
</style>
