<template>
  <app-content>
    <title-view title="交易记录" slot="header"></title-view>
    <br>
    <form class="form-horizontal">
      <div class="row">
        <div class=" col-lg-8 col-md-8 form-group">
          <label class="col-lg-2 col-md-3 control-label">成交时间:</label>
          <div class="col-md-3">
            <date-picker v-model.trim="queryParams.dealStartDate"></date-picker>
          </div>
          <label class="col-md-1 control-label" style="width: auto;">至</label>
          <div class="col-md-3">
            <date-picker v-model.trim="queryParams.dealEndDate"></date-picker>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-md-offset-8">
          <button type="button" class="btn btn-primary col-md-5" @click="query">查询</button>
          <button type="button" class="btn btn-primary col-md-5 col-md-offset-2" @click="resetParams">清空</button>
        </div>
      </div>
    </form>
    <br>
    <div class="box">
      <div class="box-body">
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead>
            <tr>
              <th>序号</th>
              <th>交易者A</th>
              <th>交易书籍A</th>
              <th>交易者A留言</th>
              <th>交易者B</th>
              <th>交易书籍B</th>
              <th>交易者B留言</th>
              <th>成交时间</th>
              <th>开始时间</th>
              <th>结束时间</th>
              <th>交易天数</th>
              <th>交易条件</th>
              <th>备注</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="(item, index) in trades">
              <tr>
                <td>{{ index + 1}}</td>
                <td>{{ item.fromTrader.name }}</td>
                <td>{{ item.fromTrader.bookName }}</td>
                <td>{{ item.fromTrader.remark }}</td>
                <td>{{ item.targetTrader.name }}</td>
                <td>{{ item.targetTrader.bookName }}</td>
                <td>{{ item.targetTrader.remark }}</td>
                <td>{{ item.tradeDealDate }}</td>
                <td>{{ item.tradeStartDate }}</td>
                <td>{{ item.tradeEndDate }}</td>
                <td>{{ item.tradeDays }}</td>
                <td>{{ item.tradeCondition }}</td>
                <td>{{ item.remark }}</td>
              </tr>
            </template>
            </tbody>
          </table>
        </div>
        <page :total="total" :pageSize="queryParams.pageSize" :currentPage="currentPage" @pageOnclick="getCurrentTrades"></page>
      </div>
    </div>
  </app-content>
</template>

<script>
  import AppContent from 'components/AppContent';
  import TitleView from 'components/public/TitleView';
  import DatePicker from 'components/public/DatePicker';
  import Page from 'components/public/Page';
  import { fetchTrades } from 'services/TradeService';

  export default {
    components: {
      AppContent,
      TitleView,
      DatePicker,
      Page,
    },
    data() {
      return {
        trades: [],
        queryParams: {
          dealStartDate: '',
          dealEndDate: '',
          page: 1,
          pageSize: 10,
        },
        total: 0,
        currentPage: 1,
      };
    },
    created() {
      this.initQueryParams();
      this.getTrades(this.queryParams.page);
    },
    methods: {
      initQueryParams() {
        const query = this.$route.query;
        if (query.page && query.pageSize) {
          query.page = Number(query.page);
          query.pageSize = Number(query.pageSize);
          this.queryParams = { ...query };
        }
      },
      getTrades(page) {
        fetchTrades(this.queryParams).then((resp) => {
          if (resp.result === 0) {
            this.trades = resp.data;
            this.total = resp.total;
            this.currentPage = page;
            this.$router.replace({ path: '/trades/records', query: { ...this.queryParams } });
          }
        });
      },
      getCurrentTrades(page) {
        this.getTrades(page);
      },
      query() {
        this.getTrades(1);
      },
      resetParams() {
        this.queryParams.dealStartDate = '';
        this.queryParams.dealEndDate = '';
      },
    },
  };
</script>
