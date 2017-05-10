<template>
  <app-content>
    <title-view title="交易管理" slot="header"></title-view>
    <loading-view-b :isLoading="isLoading"></loading-view-b>

    <!-- 基本信息统计 -->
    <div class="row" v-if="!isLoading">
      <!-- 今天交易总量 -->
      <div class="col-lg-3 col-xs-6">
        <div class="small-box bg-aqua">
          <div class="inner">
            <h3>{{ baseInfo.trades }}</h3>
            <p>新交易量</p>
          </div>
          <div class="icon">
            <i class="fa fa-shopping-cart"></i>
          </div>
          <a class="small-box-footer">
            详细信息 <i class="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
      <!--  -->
      <div class="col-lg-3 col-xs-6">
        <div class="small-box bg-green">
          <div class="inner">
            <h3>53<sup style="font-size: 20px">%</sup></h3>
            <p>Bounce Rate</p>
          </div>
          <div class="icon">
            <i class="ion ion-stats-bars"></i>
          </div>
          <a class="small-box-footer">
            详细信息 <i class="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
      <!-- 注册用户 -->
      <div class="col-lg-3 col-xs-6">
        <div class="small-box bg-yellow">
          <div class="inner">
            <h3>{{ baseInfo.users }}</h3>
            <p>注册用户</p>
          </div>
          <div class="icon">
            <i class="ion ion-person-add"></i>
          </div>
          <a class="small-box-footer">
            详细信息 <i class="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
      <!--  -->
      <div class="col-lg-3 col-xs-6">
        <div class="small-box bg-red">
          <div class="inner">
            <h3>65</h3>
            <p>Unique Visitors</p>
          </div>
          <div class="icon">
            <i class="ion ion-pie-graph"></i>
          </div>
          <a class="small-box-footer">
            详细信息 <i class="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
    </div>

  </app-content>
</template>

<script>
import AppContent from 'components/AppContent';
import TitleView from 'components/public/TitleView';
import LoadingViewB from 'components/public/LoadingViewB';
import { fetchTradeBaseInfo } from 'services/TradeService';

export default {
  components: {
    AppContent,
    TitleView,
    LoadingViewB,
  },
  data() {
    return {
      isLoading: true,
      baseInfo: {
        users: 0,
        trades: 0,
      },
    };
  },
  created() {
    fetchTradeBaseInfo().then((resp) => {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      if (resp.result === 0) {
        this.baseInfo = { ...resp.data };
      }
    });
  },
};
</script>
