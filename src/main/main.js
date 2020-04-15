import Vue from 'vue'
import Main from './main.vue'

import { router } from '../router'
import store from '../store'

/* Import global libs */
import * as libs from './GlobalLibs.js'

/* Import global components */
import * as components from './GlobalComponents.js'

Vue.config.productionTip = false

const APP_CONFIG = {
	api: 'http://jobground.ru'
}

/* Init of request function */
import { init } from '../functions/request.js'
store.state.request = init(APP_CONFIG).request;

new Vue({
	render: h => h(Main),
	router: router(APP_CONFIG),
	store
}).$mount('#app')
