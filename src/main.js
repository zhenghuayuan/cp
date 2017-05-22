
import Vue from 'vue'
import App from './App'
import router from './router'

// import 'mint-ui/lib/style.css'
// import MintUI from 'mint-ui'
// Vue.use(MintUI);

import FastClick from 'fastclick'
FastClick.attach(document.body);
// Vue.config.productionTip = false

new Vue({
	el: '#app',
	router,
	template: '<app></app>',
	components: { App }
})
