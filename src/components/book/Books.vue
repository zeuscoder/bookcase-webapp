<template>
  <app-content>
    <title-view title="书籍管理" slot="header"></title-view>
    <br>
    <form class="form-horizontal">
      <div class="row">
        <div class="col-md-4 form-group">
          <label class="col-lg-4 col-md-6 control-label" for="title">图书标题:</label>
          <div class="col-lg-7 col-md-6">
            <input class="form-control" id="title" placeholder="图书标题" v-model.trim="queryParams.title">
          </div>
        </div>
        <div class="col-md-4 form-group">
          <label class="col-lg-4 col-md-6 control-label" for="authors">图书作者:</label>
          <div class="col-lg-7 col-md-6">
            <input class="form-control" id="authors" placeholder="图书作者" v-model.trim="queryParams.authors">
          </div>
        </div>
        <div class="col-md-4 form-group">
          <label class="col-lg-4 col-md-6 control-label" for="isbn">图书ISBN:</label>
          <div class="col-lg-7 col-md-6">
            <input class="form-control" id="isbn" placeholder="ISBN" v-model.trim="queryParams.isbn">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 form-group">
          <label class="col-lg-4 col-md-6 control-label" for="category">图书类型:</label>
          <div class="col-lg-7 col-md-6">
            <select class="form-control" id="category" v-model.number="queryParams.category">
              <option :value="0">全部</option>
              <option v-for="category in categories" :value="category.categoryId">{{ category.categoryName }}</option>
            </select>
          </div>
        </div>
        <div class="col-md-4 form-group">
          <label class="col-lg-4 col-md-6 control-label" for="state">图书状态:</label>
          <div class="col-lg-7 col-md-6">
            <select class="form-control" id="state" v-model.number="queryParams.state">
              <option :value="-1">全部</option>
              <option :value="0">待完善</option>
              <option :value="1">待审核</option>
              <option :value="2">已上架</option>
              <option :value="3">已下架</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class=" col-lg-8 col-md-8 form-group">
          <label class="col-lg-2 col-md-3 control-label">出版日期:</label>
          <div class="col-md-3">
            <date-picker v-model.trim="queryParams.publishStartDate"></date-picker>
          </div>
          <label class="col-md-1 control-label" style="width: auto;">至</label>
          <div class="col-md-3">
            <date-picker v-model.trim="queryParams.publishEndDate"></date-picker>
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
        <div class="row" style="margin-bottom: 20px;">
          <div class="col-md-12">
            <button class="btn btn-warning col-md-1 btn-margin">批量完善</button>
            <button class="btn btn-info col-md-1 btn-margin">批量审核</button>
            <button class="btn btn-success col-md-1 btn-margin">批量上架</button>
            <button class="btn btn-success col-md-1 btn-margin">批量下架</button>
            <button class="btn btn-danger col-md-1 btn-margin">批量删除</button>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead>
            <tr>
              <th><input type="checkbox" v-model="isAllChecked" @click="checkedAll" /></th>
              <th>序号</th>
              <th>书名</th>
              <th>作者</th>
              <th>ISBN</th>
              <th>价格</th>
              <th>数量</th>
              <th>出版社</th>
              <th>出版日期</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="(book, index) in books">
              <tr>
                <td><input type="checkbox" v-model="checkedBookIds" :value="book.bookId" /></td>
                <td>{{ (queryParams.page - 1) * queryParams.pageSize + index + 1 }}</td>
                <td>{{ book.title }}</td>
                <td>{{ book.authors }}</td>
                <td>{{ book.isbn }}</td>
                <td>{{ book.price }}</td>
                <td>{{ book.number }}</td>
                <td>{{ book.publisher }}</td>
                <td>{{ book.publishDate }}</td>
                <td>{{ book.state | stateFilter }}</td>
                <td>
                  <a class="btn btn-link" @click="showDetail(index)">详情</a>
                  <a class="btn btn-link" @click="alertMsg(index)">展示</a>
                  <template v-if="book.state === 'createdNew'">
                    <router-link class="btn btn-link" :to="{ path: `/books/${book.bookId}` }">完善</router-link>
                  </template>
                  <template v-if="book.state === 'pending'">
                    <a class="btn btn-link">审核</a>
                  </template>
                  <template v-if="book.state === 'onSale'">
                    <a class="btn btn-link">下架</a>
                  </template>
                  <template v-if="book.state === 'offSale'">
                    <a>上架</a>
                  </template>
                  <a class="btn btn-link" @click="deleteBook(book.bookId)">删除</a>
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
        </div>
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
import { fetchBooks, fetchBookCategories, deleteBook } from 'services/BookService';
import DatePicker from 'components/public/DatePicker';

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
        state: -1,
        publishStartDate: '',
        publishEndDate: '',
        page: 1,
        pageSize: 10,
      },
      categories: [],
      isDetailShownIndex: -1,
      total: 0,
      currentPage: 1,
      shownRowsTotal: 9,
      isAllChecked: false,
      checkedBookIds: [],
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
        query.page = Number(query.page);
        query.pageSize = Number(query.pageSize);
        query.category = Number(query.category);
        this.queryParams = { ...query };
      }
    },
    getCategories() {
      fetchBookCategories().then((resp) => {
        if (resp.result === 0) {
          this.categories = resp.data;
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
      this.queryParams.state = -1;
      this.queryParams.publishStartDate = '';
      this.queryParams.publishEndDate = '';
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
    // 复选框全选或反选
    checkedAll() {
      if (this.checkedBookIds.length === this.books.length) {
        this.checkedBookIds = [];
      } else {
        this.checkedBookIds = [];
        for (let index = 0; index < this.books.length; index += 1) {
          this.checkedBookIds.push(this.books[index].bookId);
        }
      }
    },
    deleteBook(bookId) {
      deleteBook(bookId).then((resp) => {
        if (resp.result === 0) {
          this.query();
        }
      });
    },
  },
  watch: {
    checkedBookIds() {
      this.isAllChecked = (this.checkedBookIds.length === this.books.length);
    },
  },
  filters: {
    stateFilter(value) {
      if (value === 'createdNew') {
        return '待完善';
      } else if (value === 'pending') {
        return '待审核';
      } else if (value === 'onSale') {
        return '已上架';
      } else if (value === 'offSale') {
        return '已下架';
      }
      return '';
    },
  },
};
</script>

<style scoped>
  a {
    position: relative;
  }
  .btn-margin {
    margin-right: 20px;
  }
</style>>
