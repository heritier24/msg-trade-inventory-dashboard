import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import DataTable from "@andresouzaabreu/vue-data-table";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import VueProgressBar from 'vue-progressbar'
import VueNoty from 'vuejs-noty'
import VModal from 'vue-js-modal'

Vue.component("data-table", DataTable);

Vue.component("v-select", vSelect);

const options = {
  color: '#449161',
  failedColor: 'red',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VModal, {
  dynamicDefaults: {
    draggable: true,
    resizable: true,
    height: 500
  }
}, { dialog: true })

Vue.use(VueProgressBar, options)

Vue.use(VueNoty)

axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
