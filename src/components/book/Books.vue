<template>
  <app-content>
    <title-view title="书籍管理" slot="header"></title-view>
    <br>
    <form class="form-horizontal">
      <div class="row">
        <div class="col-md-3 form-group auto-width">
          <label class="col-md-4 control-label-center auto-width" for="title">图书标题:</label>
          <div class="col-md-8 auto-width">
            <input class="form-control" id="title" placeholder="图书标题" v-model.trim="queryParams.title">
          </div>
        </div>
        <div class="col-md-3 form-group auto-width">
          <label class="col-md-4 control-label-center auto-width" for="authors">图书作者:</label>
          <div class="col-md-8 auto-width">
            <input class="form-control" id="authors" placeholder="图书作者" v-model.trim="queryParams.authors">
          </div>
        </div>
        <div class="col-md-3 form-group auto-width">
          <label class="col-md-4 control-label-center auto-width" for="isbn">ISBN:</label>
          <div class="col-md-8 auto-width">
            <input class="form-control" id="isbn" placeholder="ISBN" v-model.trim="queryParams.isbn">
          </div>
        </div>
        <div class="col-md-3 form-group">
          <label class="col-md-4 control-label-center" for="category">图书类型:</label>
          <div class="col-md-8">
            <select class="form-control" id="category" v-model.number="queryParams.category">
              <option :value="0">全部</option>
              <option v-for="category in categories" :value="category.categoryId">{{ category.categoryName }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 form-group auto-width">
          <label class="col-md-4 control-label-center auto-width">出版日期:</label>
          <div class="col-md-3 auto-width">
            <date-picker></date-picker>
          </div>
          <label class="col-md-1 control-label auto-width">至</label>
          <div class="col-md-3 auto-width">
            <date-picker></date-picker>
          </div>
        </div>
      </div>
      <br/>
      <div class="row">
        <div class="col-md-2 col-md-offset-7">
          <a class="btn btn-block btn-primary" @click="query">查询</a>
        </div>
        <div class="col-md-2">
          <a class="btn btn-block btn-primary" @click="resetParams">清空</a>
        </div>
      </div>
    </form>
    <br>
    <div class="box">
      <div class="box-body">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
              <th>序号</th>
              <th>书名</th>
              <th>作者</th>
              <th>ISBN</th>
              <th>价格</th>
              <th>数量</th>
              <th>出版社</th>
              <th>出版日期</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
              <template v-for="(book, index) in books">
                <tr>
                  <td>{{ (queryParams.page - 1) * queryParams.pageSize + index + 1 }}</td>
                  <td>{{ book.title }}</td>
                  <td>{{ book.authors }}</td>
                  <td>{{ book.isbn }}</td>
                  <td>{{ book.price }}</td>
                  <td>{{ book.number }}</td>
                  <td>{{ book.publisher }}</td>
                  <td>{{ book.publishDate }}</td>
                  <td>
                    <a @click="showDetail(index)">详情</a>
                    <a @click="alertMsg(index)">展示</a>
                  </td>
                </tr>
                <tr v-show="index == isDetailShownIndex" style="background-color: #ccc">
                  <td></td>
                  <td :colspan="shownRowsTotal" class="form-horizontal" style="text-align: left;">
                    <div class="row" style="padding: 10px 20px 10px 20px;">
                      <span class="col-md-2">
                        书籍页数：{{ book.pages }}
                      </span>
                      <span class="col-md-2">
                        书籍评分：{{ book.rating }}
                      </span>
                      <span class="col-md-2">
                        书籍简介：{{ book.summary }}
                      </span>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
          <page :total="total" :pageSize="queryParams.pageSize" :currentPage="currentPage" @pageOnclick="getCurrentBooks"></page>
        </div>
      </div>
      <alert-modal ref="alertModal"></alert-modal>
  </app-content>
</template>

<script>
import AppContent from 'components/AppContent';
import TitleView from 'components/public/TitleView';
import Page from 'components/public/Page';
import AlertModal from 'components/public/AlertModal';
import { fetchBooks, fetchBookCategories } from 'src/services/BookService';
import DatePicker from '../public/DatePicker';

export default {
  components: {
    AppContent,
    TitleView,
    Page,
    AlertModal,
    DatePicker,
  },
  data() {
    return {
      books: [],
      queryParams: {
        title: '',
        authors: '',
        isbn: '',
        category: 0,
        page: 1,
        pageSize: 10,
      },
      categories: [],
      isDetailShownIndex: -1,
      total: 0,
      currentPage: 1,
      shownRowsTotal: 9,
    };
  },
  created() {
    this.initQueryParams();
    this.getCategories();
    this.getBooks(this.queryParams.page);
  },
  methods: {
    initQueryParams() {
      const query = this.$route.query;
      if (query.page && query.pageSize) {
        query.page = parseInt(query.page, 10);
        query.pageSize = parseInt(query.pageSize, 10);
        query.category = parseInt(query.category, 10);
        this.queryParams = { ...query };
      }
    },
    getCategories() {
      fetchBookCategories().then((resp) => {
        if (resp.result === 0) {
          this.categories = resp.data;
          console.log(this.categories);
        }
      });
    },
    getBooks(page) {
      this.isDetailShownIndex = -1;
      this.queryParams.page = page;
      fetchBooks(this.queryParams).then((resp) => {
        if (resp.result === 0) {
          this.books = resp.data;
          this.total = resp.total;
          this.currentPage = page;
          this.$router.replace({ path: '/books', query: { ...this.queryParams } });
        }
      });
    },
    getCurrentBooks(page) {
      this.getBooks(page);
    },
    query() {
      this.getBooks(1);
    },
    resetParams() {
      this.queryParams.title = '';
      this.queryParams.authors = '';
      this.queryParams.isbn = '';
      this.queryParams.category = 0;
    },
    showDetail(index) {
      if (index === this.isDetailShownIndex) {
        this.isDetailShownIndex = -1;
        return;
      }
      this.isDetailShownIndex = index;
    },
    alertMsg(index) {
      this.$refs.alertModal.alert(index);
    },
  },

};
</script>

<style scoped>
  .table th,
  .table td {
    text-align: center;
    height: 38px;
  }
  a {
    position: relative;
    margin-right: 10px;
    cursor: pointer;
  }
  .control-label-center {
    text-align: left;
    margin-top: 7px;
  }
  .auto-width {
    width: auto;
  }
</style>>
