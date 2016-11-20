import VueRouter from 'vue-router';
import AccountMain from 'components/account/AccountMain';
import AccountsView from 'components/account/AccountsView';
import AccountRolesView from 'components/account/AccountRolesView';
import Books from './components/book/Books';
import Orders from './components/order/Orders';
import Articles from './components/article/Articles';
import Deals from './components/trade/Deals';
import Records from './components/trade/Records';

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
      component: AccountMain,
      children: [
        { path: '', component: AccountsView },
        { path: 'roles', component: AccountRolesView },
      ],
    },
  ],
});

export default router;
