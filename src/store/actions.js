import * as types from './mutation-types';

export const clearUser = ({ commit }) => {
  commit(types.CLEAR_USERINFO);
};

export const stroeUser = ({ commit }, userInfo) => {
  commit(types.STORE_USERINFO, userInfo);
};
