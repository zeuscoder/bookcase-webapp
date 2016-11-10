import * as types from '../mutation-types';

const state = {
  userInfo: {},
  status: '',
};

const mutations = {
  [types.STORE_USERINFO](state, { userInfo }) {
    state.userInfo = userInfo;
  },
  [types.CLEAR_USERINFO](state) {
    state.userInfo = '';
  },
};

export default {
  state,
  mutations,
};
