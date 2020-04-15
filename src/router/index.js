import Vue from 'vue'

import Router from 'vue-router'
Vue.use(Router)

/* Page components */
const index     = () => import('@/views/index/');
const history   = () => import('@/views/history/');

/* Directories */
/*
const DIRECTORIES = {
    INDEX: {
        NAME: 'index',
        PATH: '/index'
    },
    HISTORY: {
        NAME: 'history',
        PATH: '/history'
    },
};
*/


/* Management of scrolling during transitions */
const scrollBehavior = function (to, from, savedPosition) {
    if (savedPosition || to.params.noreload) {
        return savedPosition
    }
    else {
        return { x: 0, y: 0 }
    }
};


export function router(config) {
    return new Router({
        mode: 'history',
        scrollBehavior,
        routes: [
            {
                name: 'index',
                path: '/',
                component: index
            },
            {
                name: 'history',
                path: '/history/:action?',
                component: history
            }
        ]
    });
}

