import Vue from 'vue'

import Meta from 'vue-meta'
Vue.use(Meta)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueMoment from 'vue-moment'
import 'moment/locale/ru.js'
Vue.use(VueMoment);

import { Plugin } from 'vue-fragment'
Vue.use(Plugin)

/* SVG sprites */
const __svg__ = {
    path: '../assets/svg/*.svg'
};

require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);