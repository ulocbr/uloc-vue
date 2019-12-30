<script>
  import {mapState} from 'vuex'
  import UThemeCustomize from './components/ThemeConfig'
  import UMenuDrawer from '../src/components/drawer/UMenuDrawer.js'
  import 'uloc-src/assets/styl/app.styl'

  export default {
    name: 'AppRoot',
    components: {UThemeCustomize, UMenuDrawer},
    computed: {
      ...mapState('demo', ['appTheme', 'appDrawerState', 'appThemeColors', 'appDrawerFixed', 'appDrawerFolded', 'appDrawerDock', 'appDrawerTheme']),
      stateAppClass () {
        return {
          'drawer-folded': this.appDrawerFolded,
          'drawer-fixed': this.appDrawerFixed,
          'drawer-dock': this.appDrawerDock
        }
      }
    }
  }
</script>

<template>
  <div id="uloc-app">
    <u-layout>
      <u-menu-drawer
        ref="drawer"
        :menu="$uloc.menu.state"
        :state="appDrawerState"
        :fixed="appDrawerFixed"
        :folded="appDrawerFolded"
        :dock="appDrawerDock"
        :theme="appDrawerTheme"
        :float-submenu="true"
      />

      <u-layout-header reveal>
        <div slot="header_" class="u-left-side">
          <a class="ico-menu hidden-drawer-fixed">
            <i class="material-icons app-icon u-icon" aria-hidden="true">menu</i>
          </a>
        </div>
        <a slot="drawer-button_" class="ico-menu hidden-drawer-fixed">EU</a>
        <slot slot="header-right-side">
          <a href="#" class="pull-left u-header-actions u-active">
            <u-icon name="chat" type="material" />
          </a>
          <a href="#" class="pull-left u-header-actions">
            <u-icon name="dashboard" type="material" />
          </a>
          <!-- <a href="#" class="pull-left u-header-actions u-notifications-btn u-active"> 999+ </a> -->
          <a href="#" class="pull-left u-header-actions">
            <u-icon name="notifications" type="material" />
          </a>
          <a href="#" class="u-user-photo u-img-rounded" data-u-module="dropdown" data-target="#menu">
            <img class="u-avatar"
                 src="https://gravatar.com/avatar/2b0c7e0e6b7c4f36fc7617d745098ff1.png?s=32&d=mm"
            >
          </a>
        </slot>
        <div aslot="header-nav">
          <div id="u-header-nav">
            <nav class="u-nav">
              <a class="u-back">
                <u-icon type="fa" name="chevron-left" />
              </a>
              <ul class="u-nav-header">
                <li><a href="#" class="u-active">Item1</a></li>
                <li><a href="#">Item2</a></li>
                <li><span class="u-separator" /></li>
                <li>
                  <a href="#" class="u-no-border-bottom">
                    <u-icon name="calendar-alt" type="fa" icon-style="solid" tag="span" />
                    Item3</a>
                </li>
                <li>
                  <a href="#" class="u-no-border-bottom">
                    <u-icon name="calendar-alt" type="fa" />
                    Item4</a>
                </li>
              </ul>

              <div class="u-i-actions">
                <a class="u-btn-outline" @click="updateTheme('white')"> <span>+</span> Item5</a>
                <a class="u-btn-outline u-improvements" @click="updateTheme('default')"> <strong
                                                                                           class="u-single-badge"
                                                                                         >1</strong>
                  <u-icon type="fa" name="lightbulb" />
                </a>
                <a class="u-btn-outline u-active"> <strong class="u-single-badge u-bg-danger">12</strong>
                  Item6</a>
                <a href="#">
                  <u-icon type="fa" name="chart-bar" icon-style="solid" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </u-layout-header>

      <u-theme-customize />

      <u-page-container>
        <router-view />
      </u-page-container>
    </u-layout>
  </div>
</template>

<style src="./assets/style.styl" lang="stylus"></style>
