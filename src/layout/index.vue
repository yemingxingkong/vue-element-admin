<template>
  <div :class="classObj" class="app-wrapper">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#333"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <div class="header-logo-container">
        <img v-if="logo" :src="logo" class="header-logo">
      </div>
      <el-menu-item index="1">{{ $t('navbar.dashboard') }}</el-menu-item>
      <el-submenu index="2">
        <template slot="title">{{ $t('navbar.engineering') }}</template>
        <el-menu-item index="2-1">{{ $t('navbar.purchase') }}</el-menu-item>
        <el-menu-item index="2-2">{{ $t('navbar.opportunity') }}</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">{{ $t('navbar.professionalArea') }}</el-menu-item>
      <el-menu-item index="4">{{ $t('navbar.supermarket') }}</el-menu-item>
      <el-submenu index="5">
        <template slot="title">{{ $t('navbar.projectApplication') }}</template>
        <el-menu-item index="5-1">{{ $t('navbar.program') }}</el-menu-item>
        <el-menu-item index="5-2">{{ $t('navbar.successfulExample') }}</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">{{ $t('navbar.intelligentDesign') }}</el-menu-item>
      <el-menu-item index="7">{{ $t('navbar.manpowerMarket') }}</el-menu-item>
      <el-menu-item index="8">{{ $t('navbar.industryNews') }}</el-menu-item>
      <div class="header-right header-sign-up">{{ $t('login.signUp') }}</div>
      <div class="header-right header-sign-in">{{ $t('login.signIn') }}</div>
      <div class="header-right header-search-container">
        <input class="header-search" type="text">
      </div>
    </el-menu>
    <div class="line" />

    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <!-- sidebar 侧边栏 -->
    <sidebar class="sidebar-container" />
    <!-- app-main 主布局 -->
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
        <tags-view v-if="needTagsView" />
      </div>
      <app-main />
      <!-- 右边面板 -->
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div>

    <div class="footer">
      <div class="footer-container">
        <div class="footer-container-box">
          <el-row>
            <el-col :span="24" :md="18">
              <el-row>
                <el-col :span="12" :sm="6" class="footer-item">
                  <div class="footer-title">快速入口</div>
                  <div class="footer-txt">智能建筑装配专区</div>
                  <div class="footer-txt">智能建筑装配超市</div>
                  <div class="footer-txt">工程信息</div>
                  <div class="footer-txt">项目应用</div>
                </el-col>
                <el-col :span="12" :sm="6" class="footer-item">
                  <div class="footer-title">服务帮助</div>
                  <div class="footer-txt">注册登录</div>
                  <div class="footer-txt">供应商入驻</div>
                  <div class="footer-txt">密码相关</div>
                </el-col>
                <el-col :span="12" :sm="6" class="footer-item">
                  <div class="footer-title">关于我们</div>
                  <div class="footer-txt">关于--</div>
                </el-col>
                <el-col :span="12" :sm="6" class="footer-item">
                  <div class="footer-title">联系我们</div>
                  <div class="footer-txt">致电：--</div>
                  <div class="footer-txt">邮件：--</div>
                  <div class="footer-txt">时间：--</div>
                </el-col>
              </el-row>
              <el-row class="footer-link">
                <el-col :span="12" :sm="6" class="footer-item">
                  <div class="footer-link-name">相关链接：</div>
                </el-col>
                <el-col :span="12" :sm="6" class="footer-item">
                  <div class="footer-link-title">官网</div>
                </el-col>
                <el-col :span="12" :sm="6" class="footer-item">
                  <div class="footer-link-title">官网</div>
                </el-col>
                <el-col :span="12" :sm="6" class="footer-item">
                  <div class="footer-link-title">官网</div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24" :md="6">
              <div class="footer-title">关注公众号</div>
              <img class="footer-weapp" src="@/assets/401_images/401.gif" alt>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="footer-container2">
        <div class="footer-container2-one">Copyright 2019 公司</div>
        <div class="footer-container2-one">报备号</div>
      </div>
    </div>
  </div>
</template>

<script>
import RightPanel from '@/components/RightPanel'
import { AppMain, Navbar, Settings, Sidebar, TagsView } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    RightPanel,
    Settings,
    Sidebar,
    TagsView
  },
  mixins: [ResizeMixin],
  data() {
    return {
      activeIndex: '1',
      logo:
        'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
.header-logo-container {
  float: left;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 30px;
  padding-right: 30px;
}
.header-logo-container .header-logo {
  width: 32px;
  height: 32px;
  vertical-align: middle;
  // margin-right: 12px;#989896
}
.header-right {
  float: right;
}
.header-sign-in {
  position: relative;
  padding: 0 10px;
  font-size: 14px;
  height: 60px;
  line-height: 60px;
  color: #fff;
}
.header-sign-up {
  padding: 0 10px;
  font-size: 14px;
  height: 60px;
  line-height: 60px;
  color: #fff;
}
.header-search-container {
  padding: 15px 0;
  height: 60px;
}
.header-search {
  padding: 0;
  border: 0;
  height: 30px;
  border-radius: 15px;
}
.footer {
  background-color: #333;
  color: #999;
}

.footer-container {
  border-bottom: 1px solid #fff;
}

.footer-container-box {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 3vw;
  padding-bottom: 2vw;
}
.footer-item {
  // padding: 20px 5px;
  padding-left: 5px;
  padding-right: 5px;
}
.footer-title {
  padding: 10px 0;
  color: #fff;
  font-size: 18px;
}
.footer-txt {
  padding: 5px 0;
  font-size: 14px;
}
.footer-link {
  padding-top: 20px;
}
.footer-link-name {
  font-size: 18px;
}
.footer-link-title {
  font-size: 14px;
}
.footer-weapp {
  width: 100px;
  height: 100px;
}
.footer-container2 {
  min-width: 1200px;
  padding: 15px 0;
  text-align: center;
  font-size: 12px;
}
.footer-container2-one {
  padding: 5px 0;
}
</style>
