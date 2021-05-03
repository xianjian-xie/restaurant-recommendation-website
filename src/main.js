import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire' // Added to make vuefire work
import {auth} from './firebaseConfig.js' // for authentication

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import './registerServiceWorker'
Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.use(firestorePlugin); // added to make vuefire work

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBLLqHMvwDcC91pm7lhJBaMuyjUzYkYquw',
    libraries: 'places',
  }
});

let app // for authentication
auth.onAuthStateChanged(() => { // for authentication
  if (!app) { // for authentication
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
