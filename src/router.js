import Vue from 'vue'
import VueRouter from 'vue-router'
import NewGame from './components/NewGame.vue'
import Room from './components/Room.vue'
Vue.use(VueRouter)
export const router = new VueRouter({
    routes: [{
        path: '/',
        component: NewGame
    }, {
        path: '/room',
        component: Room
    }, ]
})