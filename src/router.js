import Vue from 'vue'
import VueRouter from 'vue-router'
import NewGame from './components/NewGame.vue'
import Room from './components/Room.vue'
import ChoiceRoom from './components/ChoiceRoom.vue'
import SelectedRoom from './components/SelectedRoom.vue'
import WrongRoom from './components/WrongRoom.vue'
Vue.use(VueRouter)
export const router = new VueRouter({
    routes: [{
            path: '/',
            component: NewGame
        },
        {
            path: '/room',
            component: Room
        },
        {
            path: '/choiceRoom',
            component: ChoiceRoom
        },
        {
            path: '/selectedRoom',
            component: SelectedRoom
        },
        {
            path: '/wrongRoom',
            component: WrongRoom
        },
    ]
})