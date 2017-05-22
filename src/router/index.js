import Vue from 'vue'
import Router from 'vue-router'


import Main from '@/components/Main.vue'
import Detial from '@/components/Detial.vue'
// import Fastclick from 'fastclick'
import VueHammer from 'vue-hammer'

Vue.use(VueHammer)
Vue.use(Router)

export default new Router({
  routes: [
		{
		  path: '/',
		  name: 'Main',
		  component: Main
		},
		{
		  path: '/detial',
		  name: 'Detial',
		  component: Detial
		},
	]
})
