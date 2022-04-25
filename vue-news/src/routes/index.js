import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import createListView from '../views/CreateListView.js'
import bus from '../utils/bus.js'
import { store } from '../store/index.js'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', //해시값 제거

    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            component: createListView('NewsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner')

                store.dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log("fetched");
                        // bus.$emit("end:spinner");
                        next()
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner')

                store.dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log("fetched");
                        // bus.$emit("end:spinner");
                        next()
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner')

                store.dispatch("FETCH_LIST", to.name)
                    .then(() => { next() })
                    .catch((error) => {
                        console.log(error);
                    });

            }
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
    ]

})