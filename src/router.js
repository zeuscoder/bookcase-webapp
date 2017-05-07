import Vue from 'vue';
import VueRouter from 'vue-router';
import AccountHome from 'components/account/AccountHome';
import AccountsView from 'components/account/AccountsView';
import AccountRolesView from 'components/account/AccountRolesView';
import Books from 'components/book/Books';
import PendingBooks from 'components/book/PendingBooks';
import Orders from 'components/order/Orders';
import Articles from 'components/article/Articles';
import Deals from 'components/trade/Deals';
import Records from 'components/trade/Records';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/books',
    },

    {
      path: '/books',
      component: Books,
    },

    {
      path: '/books/:bookId',
      component: PendingBooks,
    },

    {
      path: '/orders',
      component: Orders,
    },

    {
      path: '/articles',
      component: Articles,
    },

    {
      path: '/trades/deals',
      component: Deals,
    },

    {
      path: '/trades/records',
      component: Records,
    },

    {
      path: '/accounts',
      component: AccountHome,
      children: [
        { path: 'users', component: AccountsView },
        { path: 'roles', component: AccountRolesView },
      ],
    },
  ],
});

export default router;
