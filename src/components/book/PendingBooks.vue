<template>
  <app-content>
    <title-view title="书籍信息" slot="header"></title-view>

    <div class="row" v-if="!isLoading">
      <!-- 基本信息 -->
      <div class="col-md-7">
        <div class="box box-success">
          <div class="box-header with-border">
            <h4 class="box-title">基本信息</h4>
          </div>
          <form class="form-horizontal">
            <div class="box-body">
              <div class="form-group">
                <label class="col-sm-3 col-md-3 col-lg-2 control-label">书籍名称</label>
                <div class="col-sm-8 col-md-8 col-lg-6">
                  <input class="form-control" v-model="bookInfo.title" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 col-md-3 col-lg-2 control-label">书籍作者</label>
                <div class="col-sm-8 col-md-8 col-lg-6">
                  <input class="form-control" v-model="bookInfo.authors" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 col-md-3 col-lg-2 control-label">书籍ISBN</label>
                <div class="col-sm-8 col-md-8 col-lg-6">
                  <input class="form-control" v-model="bookInfo.isbn" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 col-md-3 col-lg-2 control-label">书籍价格</label>
                <div class="col-sm-8 col-md-8 col-lg-6">
                  <input class="form-control" v-model="bookInfo.price" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 col-md-3 col-lg-2 control-label">出版社</label>
                <div class="col-sm-8 col-md-8 col-lg-6">
                  <input class="form-control" v-model="bookInfo.publisher" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 col-md-3 col-lg-2 control-label">出版日期</label>
                <div class="col-sm-8 col-md-8 col-lg-6">
                  <input class="form-control" v-model="bookInfo.publishDate" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 col-md-3 col-lg-2 control-label">印刷页数</label>
                <div class="col-sm-8 col-md-8 col-lg-6">
                  <input class="form-control" v-model="bookInfo.pages" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 col-md-3 col-lg-2 control-label">书籍简介</label>
                <div class="col-sm-8 col-md-8 col-lg-6">
                  <textarea class="form-control" rows="14" v-model="bookInfo.summary" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- 其他信息 -->
      <div class="col-md-5">
        <!-- 书籍封面 -->
        <div class="box box-danger">
          <div class="box-header">
            <h4 class="box-title">书籍封面</h4>
          </div>
          <div class="box-body">
            <div>
              <img class="img-responsive" style="margin: auto; max-width: 200px;" :src="bookInfo.image" v-if="bookInfo.image">
              <img class="img-responsive" style="margin: auto; max-width: 200px;" src="../../assets/book_default_logo.jpg" v-else>
            </div>
          </div>
        </div>
        <!-- 录入信息 -->
        <div class="box box-info">
          <div class="box-header with-border">
            <h4 class="box-title">录入信息</h4>
          </div>
          <form class="form-horizontal">
            <div class="box-body">
              <div class="form-group">
                <label class="col-sm-3 col-md-4 col-lg-3 control-label">代理商户</label>
                <div class="col-sm-8 col-md-7 col-lg-7 input-group">
                  <span class="input-group-addon"><i class="fa fa-user "></i></span>
                  <input class="form-control" v-model="bookInfo.saleAgent" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 col-md-4 col-lg-3 control-label">销售价格</label>
                <div class="col-sm-8 col-md-7 col-lg-7 input-group">
                  <span class="input-group-addon"><i class="fa fa-cny"></i></span>
                  <input class="form-control" v-model="bookInfo.salePrice" />
                  <span class="input-group-addon">元</span>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 col-md-4 col-lg-3 control-label">销售折扣</label>
                <div class="col-sm-8 col-md-7 col-lg-7 input-group">
                  <input class="form-control" v-model="bookInfo.saleDiscount" />
                  <span class="input-group-addon"><i class="fa fa-percent"></i></span>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 col-md-4 col-lg-3 control-label">销售数量</label>
                <div class="col-sm-8 col-md-7 col-lg-7 input-group">
                  <span class="input-group-addon" style="cursor: pointer;" @click="minusSaleNum"><i class="fa fa-minus"></i></span>
                  <input class="form-control" v-model="bookInfo.number" />
                  <span class="input-group-addon" style="cursor: pointer;" @click="plusSaleNum"><i class="fa fa-plus"></i></span>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 col-md-4 col-lg-3 control-label">备注</label>
                <div class="col-sm-8 col-md-7 col-lg-7 input-group">
                  <textarea class="form-control" rows="2" v-model="bookInfo.remark" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="row" v-if="!isLoading">
      <div class="col-md-4 col-md-offset-4">
        <button class="btn btn-default col-md-4 col-md-offset-2" style="background-color: white" @click="goBack">取消返回</button>
        <button class="btn btn-success col-md-4 col-md-offset-2" @click="setBookInfo">确认修改</button>
      </div>
    </div>

    <div class="loading" v-if="isLoading">
      <i class="fa fa-spinner fa-pulse"></i>
      <p>载入中...</p>
    </div>

  </app-content>
</template>

<script>
  import AppContent from 'components/AppContent';
  import TitleView from 'components/public/TitleView';
  import { fetchBookInfo, setBookInfo } from 'src/services/BookService';

  export default {
    components: {
      AppContent,
      TitleView,
    },
    data() {
      return {
        bookId: -1,
        isLoading: true,
        bookInfo: {},
        minSaleNum: 1,
        maxSaleNum: 100,
      };
    },
    created() {
      if (!isNaN(this.$route.params.bookId)) {
        this.bookId = this.$route.params.bookId;
        fetchBookInfo(this.bookId).then((resp) => {
          this.isLoading = false;
          if (resp.result === 0) {
            this.bookInfo = { ...resp.data };
          }
        });
      }
    },
    methods: {
      minusSaleNum() {
        if ((!isNaN(this.bookInfo.number) && this.bookInfo.number > this.minSaleNum)) {
          this.bookInfo.number--;
        }
      },
      plusSaleNum() {
        if (!isNaN(this.bookInfo.number) && this.bookInfo.number < this.maxSaleNum) {
          this.bookInfo.number++;
        }
      },
      goBack() {
        this.$router.go(-1);
      },
      setBookInfo() {
        setBookInfo(this.bookId, JSON.stringify(this.bookInfo)).then((resp) => {
          if (resp.result === 0) {
            this.$router.go(-1);
          }
        });
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $loading--bgcolor: #00a65a;
  .loading {
    text-align: center;
    i {
      color: $loading--bgcolor;
    }
    p {
      font-size: 18px;
      color: $loading--bgcolor;
    }
  }
</style>
