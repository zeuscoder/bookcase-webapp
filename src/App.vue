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
/*@import '../node_modules/admin-lte/bootstrap/css/bootstrap.css';*/
@import '../node_modules/admin-lte/dist/css/AdminLTE.css';
@import '../node_modules/admin-lte/dist/css/skins/skin-green.css';
</style>
