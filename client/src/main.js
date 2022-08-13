import Vue from "vue";
import store from "./store"

import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from './http/request'
import mavonEditor from 'mavon-editor'  //引入mavon-editor 就是上面所安装的
import 'mavon-editor/dist/css/index.css'
Vue.config.productionTip = false;
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.use(mavonEditor)  //让Vue使用mavonEditor

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
