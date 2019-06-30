import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
  username: sessionStorage.getItem('username') || '',
  token: sessionStorage.getItem('token') || null
};

const actions = {
  UserLogin({ commit }, data) {
    commit('LOGIN', data);
  },
  UserLogout({ commit }) {
    commit('LOGOUT');
  },
  UserName({ commit }, data) {
    commit('USERNAME', data);
  }
};
const mutations = {
  LOGIN: (state, data) => {
    //更改token的值
    state.token = data.token;
    state.username = data.username;
    sessionStorage.setItem('token', data.token) //存储token
    sessionStorage.setItem('username', data.username) //存储用户
  },
  LOGOUT: (state) => {
    //登出的时候要清除token
    state.token = null;
    state.username = '';
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});