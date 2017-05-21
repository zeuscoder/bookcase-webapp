<template>
  <div id="app" class="wrapper">
    <app-header></app-header>
    <app-sidebar></app-sidebar>

    <div class="content-wrapper">
      <template v-if="$route.matched.length">
        <router-view></router-view>
      </template>
      <template v-else>
        <app-content></app-content>
      </template>
    </div>

    <app-footer></app-footer>

  </div>
</template>

<script>
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min';
import 'admin-lte/bootstrap/js/bootstrap';
import 'admin-lte';
import 'admin-lte/plugins/slimScroll/jquery.slimscroll';
import 'admin-lte/plugins/fastclick/fastclick';
import AppHeader from './components/AppHeader';
import AppSidebar from './components/AppSidebar';
import AppFooter from './components/AppFooter';
import AppContent from './components/AppContent';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
    AppContent,
  },
};
</script>

<style>
@import '../node_modules/admin-lte/dist/css/AdminLTE.css';
@import '../node_modules/admin-lte/dist/css/skins/skin-green.css';
@import '../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css';

@font-face {
  font-family: han-tang-fan;
  src: url(./assets/font/hanfan.ttf);
  font-display: swap;
}

* {
  font-family: han-tang-fan;
  font-size: 16px;
}

.table > thead > tr > th, .table > tbody > tr > td {
  height: 40px;
  box-sizing: border-box;
  text-align: center;
  vertical-align: middle;
  position: relative;
  text-overflow: ellipsis;
}

a {
  cursor: pointer;
}
</style>
