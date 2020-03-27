
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js';
import firebase from 'firebase';

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAlYRCY7bPdc6Z_vv2W1ttNDSIQj6mIofA",
  authDomain: "my-address-pj-b0dbc.firebaseapp.com",
  databaseURL: "https://my-address-pj-b0dbc.firebaseio.com",
  projectId: "my-address-pj-b0dbc",
  storageBucket: "my-address-pj-b0dbc.appspot.com",
  messagingSenderId: "333562252841",
  appId: "1:333562252841:web:52a42d5b310e265d519638",
  measurementId: "G-G07WJWTDZK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
router,
store,
render: h => h(App)
}).$mount('#app')
