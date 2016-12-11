<template>
  <app-content>
    <title-view title="账号管理" slot="header"></title-view>
    <ol slot="header" class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> 账号管理</a></li>
      <li class="active">角色管理</li>
    </ol>
    <div class="nav-tabs-custom">
      <ul class="nav nav-tabs">
        <router-link to="/accounts/users" replace tag="li">
          <a>账号管理</a>
        </router-link>
        <router-link to="/accounts/roles" replace tag="li">
          <a>角色管理</a>
        </router-link>
      </ul>
    </div>
    <router-view class="child"></router-view>
  </app-content>
</template>

<script>
import AppContent from 'components/AppContent';
import TitleView from 'components/public/TitleView';

export default {
  components: {
    AppContent,
    TitleView,
  },
};
</script>
