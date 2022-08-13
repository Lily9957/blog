import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    choosePost: {},
    categoryList: [],
    categoryName: 'All',
    userInfo: {},
  },

  getters: {
    getChoose(state) {
      return state.choosePost;
    },
    getCategoryName(state) {
      return state.categoryName;
    },
    getCategoryList(state) {
      return state.categoryList;
    },
    getUserInfo(state) {
      return state.userInfo;
    }
  },
  mutations: {
    setChoose(state, payload) {
      state.choosePost = payload
    },
    setCategoryName(state, payload) {
      state.categoryName = payload
    },
    setCategoryList(state, payload) {
      state.categoryList = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    }
  },

});

export default store;
